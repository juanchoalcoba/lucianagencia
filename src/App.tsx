import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import ServicesPage from "./pages/ServicesPage";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
