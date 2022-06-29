import Foot from "./Homecomp/Foot"
import Navcomp from "./Homecomp/Navcomp"
import dog from "./Assests/dog.JPG"
import cpvid from "./Assests/vid.mp4"
export default function Gall() {
    return(
        <>
        <Navcomp />
        <div className="gal">
        <img src={dog} width="100%" />
        <iframe src={cpvid} width="100%" height={"1000px"} />
        </div>
        <Foot />
        </>
    )
}