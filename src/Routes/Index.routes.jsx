import { createBrowserRouter } from "react-router-dom";

import { Login } from "../Pages/Login/Login";
import { Home } from "../Pages/Home/Home";
import { Register } from "../Pages/Register/Register";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    }, 
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/register",
        element: <Register />
    }
])