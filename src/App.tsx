import { Routes, Route, HashRouter } from "react-router-dom";
import Layout from "./Layout";
import ServicesPage from "./pages/ServicesPage";
import Home from "./components/Home";
import DestinationsGrid from "./pages/DestinationGrid";
import ReservationSystem from "./pages/Reservation";
import Rutas from "./pages/Routes";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";


function App() {
  useEffect(() => {
    const lenis = new Lenis();

    
    lenis.on('scroll', (e: unknown) => {
      console.log(e);
    });


    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);



  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/destinos" element={<DestinationsGrid />} />
          <Route path="/reservas" element={<ReservationSystem />} />
          <Route path="/rutas" element={<Rutas />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
