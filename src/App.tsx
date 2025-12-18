import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import ServicesPage from "./pages/ServicesPage";
import Home from "./components/Home";
import DestinationsGrid from "./pages/DestinationGrid";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/destinos" element={<DestinationsGrid />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
