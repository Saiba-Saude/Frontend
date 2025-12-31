import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Index.routes";

export default function App() {
  return (
    <>
    <RouterProvider router={routes} />
    </>
  );
}


