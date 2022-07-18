import yog from "../Assests/home gal/yog.JPG"
import view from "../Assests/home gal/view.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export default function Blog() {
  return (
    <>

      <div className="blog">
          <h1 className="blog-cont">
            Brief
          </h1>
        <div>

          <section>
            <figure>
              <img src={yog} width="100%" alt="" />
            </figure>
          </section>
          <section>
            <figure>
              <img src={view} width="100%" alt="" />
            </figure>
          </section>

          {/* <h2 data-aos="zoom-in"
            data-aos-duration="1000"> <br></br>
            The ambience is been surrounded with the locally available alluring items which together as a whole creates a great picture of memory for those visiting and enriching the beauty of nature with all greenery around. The site is the midpoint for a popular trek to Nag Tibba. We serve local delicacies and rely on our Garhwali kitchen staff to bring together local flavours. All the produce used for cooking purposes is sourced locally.

          </h2> */}
          {/* <h1 className="blog-cont">
            Blogs
          </h1> */}
        </div>
        {/* <section>
          <figure>
            <img data-aos="zoom-in"
              data-aos-duration="1000"
              src="https://www.thegoatvillages.com/assets/images/video-bg.jpg" width={"100%"} />
          </figure>

        </section>
        <section data-aos="zoom-in"
          data-aos-duration="1000">
          <h3><br></br>The early morning dews with a hope of new beginning, with the melodious rhythm of birds chirping around is what defines The Goat Village. Knowing more about The Goat Village, Nag Tibba is considered to be the soul of the village and originally it is crafted & curated beautifully and is known as the heaven in the chilly hills of Garhwal. Greatly inspired with the artistic influence the entire cottage area which is around 7700 ft, is done excellently the local artisans who are extremely talented and their work can be thoroughly seen in the beautiful ambience of The Goat Village.
          </h3>
        </section> */}

      </div>




    </>
  )
}