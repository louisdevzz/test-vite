import { RouterProvider } from "react-router-dom";
import Home from "./components/Home"
import router from "./Routes/Routes";

const App = () =>{
    return(
      <RouterProvider router={router}/>
    )
}

export default App;   