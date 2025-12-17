import { Outlet } from "react-router-dom";
import { Navbar2 } from "./components/Navbar2";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden flex flex-col">
      <Navbar2 />

      {/* Contenido dinámico */}
      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
