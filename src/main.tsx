import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import WebApp from '@twa-dev/sdk'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from "./pages/Home.tsx"
import Battle from "./pages/Battle.tsx"
import Mint from "./pages/Mint.tsx"
WebApp.ready();

const router = createBrowserRouter([
    {
        path:"/test-vite/",
        element:<App/>,
        children:[
            {
                path: "/test-vite/",
                element: <Home/>
            },
            
        ]
    },
    {
      path: "/test-vite/battle",
      element: <Battle/>
  } ,
  {
      path: "/test-vite/mint",
      element: <Mint/>
  } 
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
