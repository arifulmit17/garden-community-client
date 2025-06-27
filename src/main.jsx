import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './Layout/MainLayout.jsx';
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import ExploreGardners from './Pages/exploreGardners.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import Register from './Pages/Register.jsx';
import ShareGardenTips from './Pages/ShareGardenTips.jsx';
import PrivateRoutes from './PrivateRoutes.jsx';
import BrowseTips from './Pages/BrowseTips.jsx';
import TipDetails from './Pages/TipDetails.jsx';
import MyTipsPage from './Pages/MyTipsPage.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';
import UpdateTips from './Pages/UpdateTips.jsx';
import DashboardLayout from './Layout/DashboardLayout.jsx';
import Stats from './Pages/Dashboard/Stats.jsx';
import Allitems from './Pages/Dashboard/Allitems.jsx';

const tipsPromise=fetch(`${import.meta.env.VITE_API_URL}/gardens`).then(res=>res.json())
    

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index:true, 
        
        loader: ()=>fetch(`${import.meta.env.VITE_API_URL}/gardeners`),
        element: <Suspense loader={<h1>Data is loading</h1>}>
          <Home tipsPromise={tipsPromise}></Home>
        </Suspense>
      },
      {
        path:'/login',
        Component: Login
      },
      {
        path: '/register',
        Component: Register
      },
      {
        path: '/exploreGardners',
        Component: ExploreGardners,
        loader: ()=>fetch(`${import.meta.env.VITE_API_URL}/gardeners_full`)
      },
      {
        path: '/sharegardentips',
        element: <PrivateRoutes>
              <ShareGardenTips></ShareGardenTips>
        </PrivateRoutes>
        
      },
      {
        path: '/mytipspage',
        element: <PrivateRoutes>
              <MyTipsPage></MyTipsPage>
        </PrivateRoutes>,
        // loader: ()=>fetch('http://localhost:3000/gardens_user')
        loader: ()=>fetch(`${import.meta.env.VITE_API_URL}/gardens_user`)
        
      },
      {
        path: '/updatetips/:id',
        element: <PrivateRoutes>
              <UpdateTips></UpdateTips>
        </PrivateRoutes>,
        loader: ({params})=>fetch(`${import.meta.env.VITE_API_URL}/gardens/${params.id}`)
        
      },
      {
        path: '/tipdetails/:id',
        element: <PrivateRoutes>
              <TipDetails></TipDetails>
        </PrivateRoutes>,
        loader: ({params})=>fetch(`${import.meta.env.VITE_API_URL}/gardens/${params.id}`)
        
        
      },
      {
        path: '/browsetips',
        Component: BrowseTips,
        loader: ()=>fetch(`${import.meta.env.VITE_API_URL}/gardens_public`)
      }
    ]
  },
  {
          path: '/*',
          element: <ErrorPage></ErrorPage>
  },
  {
    path: '/dashboard',
    element: <PrivateRoutes>
      <DashboardLayout></DashboardLayout>
    </PrivateRoutes>,
    children: [
      {
        index:true,
        element: <PrivateRoutes>
          <Stats></Stats>
        </PrivateRoutes>,
        loader: ()=>fetch(`${import.meta.env.VITE_API_URL}/gardens_public`)
      },
      {
        path: 'dashtips',
        Component: Allitems,
        loader: ()=>fetch(`${import.meta.env.VITE_API_URL}/gardens_public`)
      },
      {
        path: 'dashmytips',
        element: <PrivateRoutes>
          <MyTipsPage></MyTipsPage>
        </PrivateRoutes>,
        loader: ()=>fetch(`${import.meta.env.VITE_API_URL}/gardens_user`)
      },
      {
        path: 'dashaddtips',
        element:<PrivateRoutes>
          <ShareGardenTips></ShareGardenTips>
        </PrivateRoutes>
      },
      {
        path: 'dashgardeners',
        element: <PrivateRoutes>
          <ExploreGardners></ExploreGardners>
        </PrivateRoutes>,
        loader: ()=>fetch(`${import.meta.env.VITE_API_URL}/gardeners_full`)
      }
    ]
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
          <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
