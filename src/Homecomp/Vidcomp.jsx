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
    {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/CabZxQZI5w4?controls=0&showinfo=0&rel=0&modestbranding=0"
     title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
     allowfullscreen></iframe> */}
        </div>
        <section>
            <h2>Adventure trek towards the mountains!</h2>
            <h2>Explore Our Cottages & Camps</h2>

        </section>
        </div>
        </>
    )
}