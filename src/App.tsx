import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import ServicesPage from "./pages/ServicesPage";
import Home from "./components/Home";
import DestinationsGrid from "./pages/DestinationGrid";
import ReservationSystem from "./pages/Reservation";
import Rutas from "./pages/Routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/destinos" element={<DestinationsGrid />} />
          <Route path="/reservas" element={<ReservationSystem />} />
          <Route path="/rutas" element={<Rutas />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
