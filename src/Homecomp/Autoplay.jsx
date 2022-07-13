import React, { Component } from "react";
import Slider from "react-slick";

export default class AutoPlay extends Component {
  render() {
    const settings = {
    //   dots: true,
      infinite: true,
      slidesToShow: 5,
      swipeToSlide: true,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 1000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
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
      <div className="feat">
        <h2>Our Mentions</h2>
        <Slider {...settings}>
          <a href="">
             <img src="https://www.thegoatvillage.com/images/new_img/features/1.png" />
          </a>
          <a href="">
            <img src="https://www.thegoatvillage.com/images/new_img/features/2.png" />
          </a>
          <a href="">
            <img src="https://www.thegoatvillage.com/images/new_img/features/3.png" />
          </a>
          <a href="">
            <img src="https://www.thegoatvillage.com/images/new_img/features/4.png" />
          </a>
          <a href="">
            <img src="https://www.thegoatvillage.com/images/new_img/features/5.png" />
          </a>
          <a href="">
          <img src="https://www.thegoatvillage.com/images/new_img/features/6.png" />
          </a>
        </Slider>
      </div>
    );
  }
}