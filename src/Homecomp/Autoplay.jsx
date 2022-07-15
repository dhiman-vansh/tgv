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
          <a href="https://www.outlookindia.com/outlooktraveller/explore/story/54200/uttarakhand-goat-village" target={"_blank"}>
             <img src="https://www.thegoatvillage.com/images/new_img/features/1.png" />
          </a>
          <a href="https://tourismindia.org/the-goat-village-get-into-finalists-wtm-world-rt-award-2019/" target={"_blank"}>
            <img src="https://www.thegoatvillage.com/images/new_img/features/7.png" />
          </a>
          <a href="https://www.tribuneindia.com/news/archive/features/over-500-villagers-to-witness-goat-weddings-in-tehri-garhwal-368066"target={"_blank"}>
            <img src="https://www.thegoatvillage.com/images/new_img/features/8.png" />
          </a>
          <a href="https://timesofindia.indiatimes.com/city/dehradun/a-rally-for-rural-experience-of-goat-village-at-nag-tibba/articleshow/53478420.cms" target={"_blank"}>
            <img src="https://www.thegoatvillage.com/images/new_img/features/11.png" />
          </a>
          <a href="https://yourstory.com/socialstory/2020/01/social-enterprise-green-people-farmers-tourists-sustainable-livelihood/amp" target={"_blank"}>
            <img src="https://www.thegoatvillage.com/images/new_img/features/15.png" />
          </a>
          <a href="https://curlytales.com/this-dreamy-eco-resort-in-the-hills-of-uttarakhand-is-vacay-goals/"  target={"_blank"}>
          <img src="https://www.thegoatvillage.com/images/new_img/features/18.png" />
          </a>
          <a href="https://www.thebetterindia.com/92568/the-goat-village-himalayas-retreat-uttarakhand/" target={"_blank"}>
          <img src="https://www.thegoatvillage.com/images/new_img/features/21.png" />
          </a>
        </Slider>
      </div>
    );
  }
}