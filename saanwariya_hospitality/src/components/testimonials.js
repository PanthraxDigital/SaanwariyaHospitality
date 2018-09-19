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
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 641,
          settings: {
            infinite: true,
            slidesToShow: 2,
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
            <div className="col text-center">
              <h1 className="section_title">The site is under construction.</h1>
              <h3>
                Please talk to our customer service agent or leave your contact
                details. <br /> We will get it touch with you at the earliest.
              </h3>
              <h3>
                <Link to="/contact">CONTACT NOW</Link>
              </h3>
              {/* <h3 className="section_title">what our clients say about us</h3> */}
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="test_slider_container">
                <div className="owl-carousel owl-theme test_slider">
                  <Slider {...settings}>
                    {testimonial.map((data, index) => (
                      <div key={index}>
                        <div className="test_item">
                          <div className="test_image">
                            <img
                              src={require("../images/test_1.jpg")}
                              alt="https://unsplash.com/@anniegray"
                            />
                          </div>
                          <div className="test_icon">
                            <img
                              src={require("../images/backpack.png")}
                              alt=""
                            />
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
