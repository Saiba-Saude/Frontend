import { createBrowserRouter } from "react-router-dom";

import { Login } from "../Pages/Login/Login";
import { Home } from "../Pages/Home/Home";
import { Register } from "../Pages/Register/Register";
import { Campaign } from "../Pages/Campaign/Campaign";
import { Alert } from "../Components/Alert";

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
    },
    {
        path: "/campaign",
        element: <Campaign/>
    },
    {
        path: "/alert",
        element: <Alert/>
    }
]);