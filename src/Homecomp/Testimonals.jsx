import React, { Component } from "react";
import Slider from "react-slick";
import "./Home.css"

export default class Testimonals extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      // autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="test">
        <section>
        <h2> Testimonials </h2>
        <Slider {...settings}>
          <card>
          <iframe width="100%" height={"600px"}
          src="https://www.youtube.com/embed/BT8KW69mcjw" 
          frameborder="0" allow="accelerometer; picture-in-picture" ></iframe>
          </card>
          <card>
          <iframe width="100%" height="600" 
          src="https://www.youtube.com/embed/yMc9ZIpYVXA" title="The Goat Village | Hill view resort, Nag Tibba  |  Best resort in Uttarakhand" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
           allowfullscreen></iframe>
          </card>
          <card>
            <h3>3</h3>
          </card>
          <card>
            <h3>4</h3>
          </card>
          <card>
            <h3>5</h3>
          </card>
          <card>
            <h3>6</h3>
          </card>
          <card>
            <h3>7</h3>
          </card>
          <card>
            <h3>8</h3>
          </card>
        </Slider>
      </section>
      </div>
    );
  }
}
