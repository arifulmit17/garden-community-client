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

const tipsPromise=fetch('https://b11a10garden-community-server.vercel.app/gardens').then(res=>res.json())
    

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index:true, 
        
        loader: ()=>fetch('https://b11a10garden-community-server.vercel.app/gardeners'),
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
        loader: ()=>fetch('https://b11a10garden-community-server.vercel.app/gardeners_full')
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
        loader: ()=>fetch('https://b11a10garden-community-server.vercel.app/gardens_user')
        
      },
      {
        path: '/updatetips/:id',
        element: <PrivateRoutes>
              <UpdateTips></UpdateTips>
        </PrivateRoutes>,
        loader: ({params})=>fetch(`https://b11a10garden-community-server.vercel.app//gardens/${params.id}`)
        
      },
      {
        path: '/tipdetails/:id',
        element: <PrivateRoutes>
              <TipDetails></TipDetails>
        </PrivateRoutes>,
        loader: ({params})=>fetch(`https://b11a10garden-community-server.vercel.app/gardens/${params.id}`)
        
        
      },
      {
        path: '/browsetips',
        Component: BrowseTips,
        loader: ()=>fetch('https://b11a10garden-community-server.vercel.app/gardens_public')
      }
    ]
  },
  {
          path: '/*',
          element: <ErrorPage></ErrorPage>
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
          <RouterProvider router={router} />
    </AuthProvider>
    
  </StrictMode>,
)
