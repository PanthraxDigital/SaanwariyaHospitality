import React from "react";
// import "../styles/bootstrap4/bootstrap.min.css";
// import "../styles/main_styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Link } from "react-router-dom";
import placesList from "../content/ListOfVisitPlaces.json";

class PlaceToVisit extends React.Component {
  render() {
    var settings = {
      dots: true,
      speed: 500,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        }
      ]
    };

    return (
      <div>
        <div className="cta">
          <h1
            className="text-center"
            style={{
              color: "white",
              textTransform: "uppercase",
              fontWeight: "700"
            }}
          >
            Places to Visit
          </h1>
          <div className="container">
            <div>
              <Slider {...settings}>
                {placesList.map((data, index) => (
                  <div key={index}>
                    <div className="cta_item text-center">
                      <div className="cta_title">{data.title}</div>
                      <img
                        src={`${data.imageUrl}`}
                        style={{
                          display: "inline",
                          marginTop: "20px",
                          height: "250px"
                        }}
                      />

                      <div className="button cta_button">
                        <div className="button_bcg" />
                        <Link to={data.link}>
                          Read More
                          <span />
                          <span />
                          <span />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlaceToVisit;
