import React from "react";
//import "../styles/bootstrap4/bootstrap.min.css";
// import "../styles/main_styles.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

class Home extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");
    const scriptText = document.createTextNode(`
      var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
      (function(){
      var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
      s1.async=true;
      s1.src='https://embed.tawk.to/5b9e0239c666d426648accd9/default';
      s1.charset='UTF-8';
      s1.setAttribute('crossorigin','*');
      s0.parentNode.insertBefore(s1,s0);
      })();
      `);
    script.appendChild(scriptText);
    document.head.appendChild(script);
  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 5000,
      cssEase: "linear",
      arrows: false,
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
      <div className="home">
        {/* <!-- Home Slider --> */}
        <div className="home_slider_container">
          <div className="owl-carousel owl-theme home_slider">
            {/* <!-- Slider Item Component--> */}
            <div className="home_slider_item">
              <Slider {...settings}>
                <div>
                  <img src={require("../images/1.jpeg")} />
                </div>
                <div>
                  <img src={require("../images/2.jpeg")} />
                </div>
                <div>
                  <img src={require("../images/3.jpeg")} />
                </div>
                <div>
                  <img src={require("../images/4.jpeg")} />
                </div>
                <div>
                  <img src={require("../images/5.jpeg")} />
                </div>
                <div>
                  <img src={require("../images/7.jpeg")} />
                </div>
              </Slider>
              {/* <div
                className="home_slider_background"
                style={{
                  backgroundImage: `url(${require("../images/dessert_1.jpg")})`
                }}
              /> */}

              <div className="home_slider_content text-center">
                <div className="home_slider_content_inner">
                  <h1>discover</h1>
                  <h1>the Kutch</h1>

                  <div className="button home_slider_button">
                    <div className="button_bcg" />
                    <a href="#">with Saanwariya Hospitality</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
