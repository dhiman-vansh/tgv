import Home from "./Comp/Home";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Gall from "./Comp/Gall";
import Reservation from "./Comp/Reservation";
import { Routes, Route } from "react-router-dom";
import About from "./Comp/About";
import {MDBIcon} from 'mdb-react-ui-kit';
import Amen from "./Comp/Amen";
import Contact from "./Comp/Contact";


function App() {
  return (
    <>
      <a href="https://wa.me/8755381346" class="whatsapp_float" target="_blank"><MDBIcon style={{marginTop:"22%"}} fab icon='whatsapp' /> </a>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gall" element={<Gall />} />
        <Route path="/res" element={<Reservation />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/amen" element={<Amen />} />

        {/* <Gall /> */}
        {/* <Reservation /> */}
      </Routes>

    </>
  );
}

export default App;
