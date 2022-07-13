import Home from "./Home";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Gall from "./Gall";
import Reservation from "./Reservation";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import {MDBIcon} from 'mdb-react-ui-kit';


function App() {
  return (
    <>
      <a href="https://wa.me/8755381346" class="whatsapp_float" target="_blank"><MDBIcon style={{marginTop:"15px"}} fab icon='whatsapp' /> </a>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gall" element={<Gall />} />
        <Route path="/res" element={<Reservation />} />
        <Route path="/about" element={<About />} />

        {/* <Gall /> */}
        {/* <Reservation /> */}
      </Routes>

    </>
  );
}

export default App;
