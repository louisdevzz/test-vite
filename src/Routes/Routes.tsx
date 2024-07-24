import {BrowserRouter,Routes,Route, createBrowserRouter} from 'react-router-dom'
import Home from "../components/Home"
import Battle from "../components/Battle"
import Mint from "../components/Mint"

const router = createBrowserRouter([
    {
        path:"/test-vite/",
        element:<Home/>
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

export default router;