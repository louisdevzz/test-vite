import {createBrowserRouter} from 'react-router-dom'
import Home from "../pages/Home"
import Battle from "../pages/Battle"
import Mint from "../pages/Mint"
import App from '../App'

const router = createBrowserRouter([
    {
        path:"/test-vite/",
        element:<App/>,
        children:[
            {
                path: "/test-vite/",
                element: <Home/>
            },
            {
                path: "/test-vite/battle",
                element: <Battle/>
            } ,
            {
                path: "/test-vite/mint",
                element: <Mint/>
            } 
        ]
    }
])

export default router;