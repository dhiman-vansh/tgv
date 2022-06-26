import React, { Component } from "react";
import Slider from "react-slick";
import "./Home.css"

export default class Testimonals extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
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
      <div className="test">
        <h2> TESTIMONALS </h2>
        <Slider {...settings}>
          <card>
            <h3>1</h3>
          </card>
          <card>
            <h3>2</h3>
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
      </div>
    );
  }
}
