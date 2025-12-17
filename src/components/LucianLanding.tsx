import { About2 } from "./About2";
import Contact from "./Contact";
import Footer  from "./Footer";
import { Hero2 } from "./Hero2";
import { Navbar2 } from "./Navbar2";


const LucianLanding = () => {
  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden">
      <Navbar2 />
      <Hero2 />
      <About2 />
      <Contact />
      <Footer />
    </div>
  );
};

export default LucianLanding;
