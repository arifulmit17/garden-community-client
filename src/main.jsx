import { StrictMode } from 'react'
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


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index:true, 
        Component: Home,
        loader: ()=>fetch('http://localhost:3000/gardeners')
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
        loader: ()=>fetch('http://localhost:3000/gardeners_full')
      },
      {
        path: '/sharegardentips',
        element: <PrivateRoutes>
              <ShareGardenTips></ShareGardenTips>
        </PrivateRoutes>
        
      },
      {
        path: '/tipdetails/:id',
        element: <PrivateRoutes>
              <TipDetails></TipDetails>
        </PrivateRoutes>,
        loader: ({params})=>fetch(`http://localhost:3000/gardens/${params.id}`)
        
        
      },
      {
        path: '/browsetips',
        Component: BrowseTips,
        loader: ()=>fetch('http://localhost:3000/gardens')
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
          <RouterProvider router={router} />
    </AuthProvider>
    
  </StrictMode>,
)
