import { createBrowserRouter } from "react-router-dom";

import { Login } from "../Pages/Login/Login";
import { Home } from "../Pages/Home/Home";
import { Register } from "../Pages/Register/Register";
import { Campaign } from "../Pages/Campaign/Campaign";
import { Appointment } from "../Pages/Appointment/Appointment";
import { Topleft } from "../Components/Topleft/Topleft";


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
        path:  "/appointment",
        element: <Appointment/>
    },
    {
        path:  "/topleft",
        element:<Topleft />
    }

]);