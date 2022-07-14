import "./Home.css"
import Slider from "react-slick";
import img1 from "../Assests/Cottage/img1.jpg"
import img2 from "../Assests/Cottage/img2.jpg"
import img3 from "../Assests/Cottage/img3.jpg"
import img4 from "../Assests/Cottage/img4.jpg"
import img5 from "../Assests/Cottage/img5.jpg"
import img6 from "../Assests/Cottage/img6.jpg"


export default function Cottages() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      <h1 className="blog-cont">Cottages</h1>
      <div className='cot'>
        <section data-aos="zoom-in"
          data-aos-duration="1000">
          <h3><br></br>The early morning dews with a hope of new beginning, with the melodious rhythm of birds chirping around is what defines The Goat Village. Knowing more about The Goat Village, Nag Tibba is considered to be the soul of the village and originally it is crafted & curated beautifully and is known as the heaven in the chilly hills of Garhwal. Greatly inspired with the artistic influence the entire cottage area which is around 7700 ft, is done excellently the local artisans who are extremely talented and their work can be thoroughly seen in the beautiful ambience of The Goat Village.
          </h3>
        </section>
        <section>
          <figure>
            <Slider {...settings}>

              <img data-aos="zoom-in"
                data-aos-duration="1000"
                src={img1}
                width={"90%"} />


              <img data-aos="zoom-in"
                data-aos-duration="1000"
                src={img2}
                width={"90%"} />

              <img data-aos="zoom-in"
                data-aos-duration="1000"
                src={img3}
                width={"90%"} />

              <img data-aos="zoom-in"
                data-aos-duration="1000"
                src={img4}
                width={"90%"} />

              <img data-aos="zoom-in"
                data-aos-duration="1000"
                src={img5}
                width={"90%"} />

              <img data-aos="zoom-in"
                data-aos-duration="1000"
                src={img6}
                width={"90%"} />
            </Slider>
            {/* <img data-aos="zoom-in"
              data-aos-duration="1000"
              src="https://www.thegoatvillages.com/assets/images/video-bg.jpg" width={"90%"} /> */}
          </figure>
        </section>
      </div></>
  )
}