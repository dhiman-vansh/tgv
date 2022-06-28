import SimpleReactFooter from "simple-react-footer";
import "./Home.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export default function Footer(){


  const description = "The early morning dews with a hope of new beginning, with the melodious rhythm of birds chirping around is what defines The Goat Village. Knowing more about The Goat Village, Nag Tibba is considered to be the soul of the village and originally it is crafted & curated beautifully and is known as the heaven in the chilly hills of Garhwal. Greatly inspired with the artistic influence the entire cottage area which is around 7700 ft, is done excellently the local artisans who are extremely talented and their work can be thoroughly seen in the beautiful ambience of The Goat Village.";
  const title = "THE GOAT VILLAGE";
  const columns = [
    {
        title: "Resources",
        resources: [
            {
                name: "About",
                link: "/about"
            },
            {
                name: "Careers",
                link: "/careers"
            },
            {
                name: "Contact",
                link: "/contact"
            },
            {
                name: "Admin",
                link: "/admin"
            }
        ]
    },
    {
        title: "Legal",
        resources: [
            {
                name: "Privacy",
                link: "/privacy"
            },
            {
                name: "Terms",
                link: "/terms"
            }
        ]
    },
    {
        title: "Visit",
        resources: [
            {
                name: "Locations",
                link: "/locations"
            },
            {
                name: "Culture",
                link: "/culture"
            }
        ]
    }
 ];
 return (
    <div className="foot">
        {/* <img src="https://images.pexels.com/photos/5237358/pexels-photo-5237358.jpeg"
         width={"50%"} /> */}
    <section data-aos="fade-up"
  data-aos-duration="1000">

    <SimpleReactFooter  
    description={description} 
    title={title}
    columns={columns}
    linkedin="fluffy_cat_on_linkedin"
    facebook="fluffy_cat_on_fb"
    twitter="fluffy_cat_on_twitter"
    instagram="fluffy_cat_live"
    youtube="UCFt6TSF464J8K82xeA?"
    pinterest="fluffy_cats_collections"
    copyright="ZEBRIANS"
    iconColor="white"
    backgroundColor="black"
    fontColor="white"
    copyrightColor="darkgrey"
 />
    </section>
    
    </div>
 )
}