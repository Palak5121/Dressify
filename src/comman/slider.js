import React, { Component } from 'react';
import Slider from 'react-slick';

class MySlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };

    return (
      <Slider {...settings}>
        <div>
          <h3>Slide 1</h3>
        </div>
        <div>
          <h3>Slide 2</h3>
        </div>
        <div>
          <h3>Slide 3</h3>
        </div>
        {/* Add more slides here */}
      </Slider>
    );
  }
}

export default MySlider;

