import React, { Component } from "react";
import Slider from "react-slick";
import "./Home.css"
import pic from "../Assests/goat.jpg"




export default class Utube extends Component {

  
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      swipeToSlide:true,
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
      <div className="utube">
        <h2> Youtube </h2>
        <Slider {...settings}>
          <div>
    <iframe width="400" height="200" src="https://www.youtube.com/embed/ntqk9MWSY9s" title="Goat Village Nag Tibba Camping || Dehradun to Pantwari" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div>
    <iframe width="400" height="200" src="https://www.youtube.com/embed/ntqk9MWSY9s" title="Goat Village Nag Tibba Camping || Dehradun to Pantwari" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div>
    <iframe width="400" height="200" src="https://www.youtube.com/embed/ntqk9MWSY9s" title="Goat Village Nag Tibba Camping || Dehradun to Pantwari" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div>
    <iframe width="400" height="200" src="https://www.youtube.com/embed/ntqk9MWSY9s" title="Goat Village Nag Tibba Camping || Dehradun to Pantwari" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div>
    <iframe width="400" height="200" src="https://www.youtube.com/embed/ntqk9MWSY9s" title="Goat Village Nag Tibba Camping || Dehradun to Pantwari" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div>
    <iframe width="400" height="200" src="https://www.youtube.com/embed/ntqk9MWSY9s" title="Goat Village Nag Tibba Camping || Dehradun to Pantwari" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div>
    <iframe width="400" height="200" src="https://www.youtube.com/embed/ntqk9MWSY9s" title="Goat Village Nag Tibba Camping || Dehradun to Pantwari" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div>
    <iframe width="400" height="200" src="https://www.youtube.com/embed/ntqk9MWSY9s" title="Goat Village Nag Tibba Camping || Dehradun to Pantwari" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </Slider>
      </div>
    );
  }
}