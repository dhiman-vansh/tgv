import Slider from "react-slick"
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// // ..
// AOS.init();

export default function Grev() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 1,
        responsive: [
          
           {
            breakpoint: 900,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    }

    return(
        <>
        <div className="grev">
            <h1>Trekker Stories And Experiences With TGV</h1>
            <div>

            <card>
                <img src="https://images.prismic.io/indiahike/bbe2a446-f2a1-46ca-8c95-2706681a1401_WhatsApp+Image+2022-06-07+at+3.44.07+PM.jpeg?auto=compress,format"
                width={"100%"} />
                <h4>
                    Reviews From Google
                </h4>
            </card>
        <section data-aos="zoom-in"
  data-aos-duration="1000">
        <Slider {...settings} 
        >
          <rev>
            <h3>Amit Jain </h3>
            <h5><br></br> <br></br> <br></br> <br></br> 
                It was a great experience with amazing facilities and good gesture. Everyone must experience this.
            </h5>
          </rev>
          <rev>
            <h3>Amit Jain </h3>
            <h5><br></br> <br></br> <br></br> <br></br> 
                It was a great experience with amazing facilities and good gesture. Everyone must experience this.
            </h5>
          </rev>
          <rev>
            <h3>Amit Jain </h3>
            <h5><br></br> <br></br> <br></br> <br></br> 
                It was a great experience with amazing facilities and good gesture. Everyone must experience this.
            </h5>
          </rev>
          <rev>
            <h3>Amit Jain </h3>
            <h5><br></br> <br></br> <br></br> <br></br> 
                It was a great experience with amazing facilities and good gesture. Everyone must experience this.
            </h5>
          </rev>
          <rev>
            <h3>Amit Jain </h3>
            <h5><br></br> <br></br> <br></br> <br></br> 
                It was a great experience with amazing facilities and good gesture. Everyone must experience this.
            </h5>
          </rev>
          <rev>
            <h3>Amit Jain </h3>
            <h5><br></br> <br></br> <br></br> <br></br> 
                It was a great experience with amazing facilities and good gesture. Everyone must experience this.
            </h5>
          </rev>
    
        </Slider>

        </section>
        </div>

        </div>
        
        </>
    )
}