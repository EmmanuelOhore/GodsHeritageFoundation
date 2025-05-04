import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navcomponents/navBar";
import Home from "./components/navigationComponent/home";
import About from "./components/navigationComponent/about";
import Volunteer from "./components/navigationComponent/volunteer";
import Initiatives from "./components/navigationComponent/initiatives";
import DonatePage from "./components/navigationComponent/Donate";
import Gallery from "./components/navigationComponent/Gallery";
import ContactUs from "./components/navigationComponent/contactUs";
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
