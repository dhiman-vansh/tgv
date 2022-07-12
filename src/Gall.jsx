// import dog from "./Assests/dog.JPG"
// import cpvid from "./Assests/vid.mp4"
import React from "react"
import "./app.css"
import dog from "./Assests/Gall/dog.jpg"
import dine from "./Assests/Gall/dine.jpg"
import walk from "./Assests/Gall/walk.jpg"
import goatman from "./Assests/Gall/goatman.jpg"
import wine from "./Assests/Gall/wine.jpg"
import tree from "./Assests/Gall/tree.jpg"
import room from "./Assests/Gall/room.jpg"
import bath from "./Assests/Gall/bath.jpg"
import food from "./Assests/Gall/food.jpg"
import peeps from "./Assests/Gall/peeps.jpg"
import sunset from "./Assests/Gall/sunset.jpg"
import staff from "./Assests/Gall/staff.jpg"

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();



export default function Gall() {

  const dataImg = [
    {
      img: food,
      wide: "50%",
      title: 'image',
      overlay: 'blue-strong'
    },
    {
      img: walk,
      wide: "50%",
      title: 'image',
      overlay: 'blue-light'
    },
    {
      img: goatman,
      wide: "33.33%",
      title: 'image',
      overlay: 'blue-slight'
    },
    {
      img: wine,
      wide: "33.33%",
      title: 'image',
      overlay: 'lime-strong'
    },
    {
      img: tree,
      wide: "33.33%",
      title: 'image',
      overlay: 'lime-light'
    },

    {
      img: room,
      wide: "50%",
      title: 'image',
      overlay: 'lime-slight'
    },
    {
      img: bath,
      wide: "50%",
      title: 'image',
      overlay: 'lime-slight'
    },
    {
      img: dine,
      wide: "100%",
      title: 'image',
      overlay: 'teal-strong'
    },
    {
      img: peeps,
      wide: "50%",
      title: 'image',
      overlay: 'teal-light'
    },
    {
      img: sunset,
      wide: "50%",
      title: 'image',
      overlay: 'teal-light'
    },
    {
      img: staff,
      wide: "100%",
      title: 'image',
      overlay: 'teal-light'
    }
  ];


  return (
    <>
      <div >
        {/* <h1 style={{textAlign:"center",marginTop:"2%"}}>Gallery </h1> */}

        <div>
          <section>
            <img src={dog} width="100%" alt="" />
          </section>
        </div>


        <div className="gal" >
          {dataImg.map(({ wide, img, title, overlay }, i) => {
            return (
              <>
                <section
                  style={{ width: { wide } }}>
                  <img src={img} alt={title} width={wide}
                    data-aos="slide-up"
                    data-aos-duration="2000"
                    data-aos-delay="-1000"
                  />
                  <span className="vis">{title}</span>
                </section>
              </>
            )
          })}

        </div>
        {/* 
        {user.map((value) =>{
            return(
                <>
                <section>
                <img src={value.media_url} width="100%" />
                </section>

                </>
            )
        })
        } */}
      </div>
    </>
  )
}