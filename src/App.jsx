import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navcomponents/navBar";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Volunteer from "./components/pages/volunteer";
import Initiatives from "./components/pages/initiatives";
import DonatePage from "./components/pages/Donate";
import Gallery from "./components/pages/Gallery";
import ContactUs from "./components/pages/contactUs";
import ToTopBtn from "./components/smallerCompoonets/toTopBTn";

function App() {
  return (
    <>
      <div className="main_container  overflow-hidden">
        <NavBar />
        <ToTopBtn />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Volunteer" element={<Volunteer />} />
          <Route path="/Intiatives" element={<Initiatives />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/Contactus" element={<ContactUs />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
