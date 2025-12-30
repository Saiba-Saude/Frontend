<<<<<<< HEAD
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Footer />
    </>
  );
}

export default App;
=======
import { RouterProvider } from "react-router-dom"
import { routes } from "./Routes/Index.routes"

export default function App(){
  return(
  <div>
    <RouterProvider router={routes} />
  </div>
)}

>>>>>>> f55a26dc4b1c69f18fa04e8829b6326d3f7a1419
