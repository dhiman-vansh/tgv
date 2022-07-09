import Home from "./Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Gall from "./Gall";
import Reservation from "./Reservation";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
   <>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/gall" element={<Gall />} />
    <Route path="/res" element={<Reservation />} />
    {/* <Gall /> */}
   {/* <Reservation /> */}
   </Routes>

   </>
  );
}

export default App;
