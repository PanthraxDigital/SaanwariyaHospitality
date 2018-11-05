import React from "react";
// import '../styles/bootstrap4/bootstrap.min.css'
import "../styles/main_styles.css";
import "../styles/responsive.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Link } from "react-router-dom";

import testimonial from "../content/Testimonial.json";

class Testimonial extends React.Component {
  render() {
    var settings = {
      dots: true,
      speed: 500,
      infinite: true,
      slidesToShow: 3,
      arrows : false,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 641,
          settings: {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 361,
          settings: {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <div className="testimonials">
        <div className="test_border" />
        <div className="container">
          <div className="row">
            <div className="col">
            <h2 className="intro_title text-center">
                Happy Visitors
              </h2>
            
              <div className="test_slider_container">
                <div className="owl-carousel owl-theme test_slider">
                  <Slider {...settings}>
                    {testimonial.map((data, index) => (
                      <div key={index}>
                        <div className="test_item" >
                          <div className="test_image">
                            <img src={`${data.profileImage}`} style={{height:'13em'}}/>
                          </div>
                          <div className="test_content_container">
                            <div className="test_content">
                              <div className="test_item_info">
                                <div className="test_name">{data.name}</div>
                              </div>
                              <div className="test_quote_title">
                                {data.title}
                              </div>
                              <p className="test_quote_text">{data.subTitle}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonial;
