import {BrowserRouter,Routes,Route, createBrowserRouter} from 'react-router-dom'
import Home from "../components/Home"
import Battle from "../components/Battle"
import Mint from "../components/Mint"

const router = createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
        path: "/battle",
        element: <Battle/>
    } ,
    {
        path: "/mint",
        element: <Mint/>
    } 
])

export default router;