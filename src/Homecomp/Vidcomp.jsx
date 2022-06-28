import "./Home.css"
import vid from "../Assests/vid.mp4"

export default function Vidcomp() {

    return(
        <>
        <div className="vid">
        <div>
        <video 
        src={vid}   
        autoPlay width={"100%"} muted loop>
        </video>
        </div>
        <section>
            <h2>Adventure trek towards the mountains!</h2>
            <h2>Explore Our Cottages & Camps</h2>

        </section>
        </div>
        </>
    )
}