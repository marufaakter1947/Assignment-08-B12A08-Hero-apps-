import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import RootLayout from "../LayOuts/RootLayout";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path:"/",
    element:<RootLayout></RootLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
 {
    index: true,
    element:<Home></Home>,
  },
  {
    path:"/apps",
    element:<Apps></Apps>,
  },
  {
    path:"/installation",
    element:<Installation></Installation>,
  },
    ]
  },
 
  
])

export default router