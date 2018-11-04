import React from "react";
//import "../styles/bootstrap4/bootstrap.min.css";
// import "../styles/main_styles.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.prevClick = this.prevClick.bind(this);
    this.nextClick = this.nextClick.bind(this);
  }

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

  prevClick(e) {
    this.slider.slickPrev();
  }

  nextClick(e) {
    this.slider.slickNext();
  }
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      swipeToSlide: true,
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
              <Slider ref={c => (this.slider = c)} {...settings}>
                <div>
                  <img src="https://farm2.staticflickr.com/1980/30707859247_2405765fd6_o.jpg" />
                </div>
                <div>
                  <img src="https://farm2.staticflickr.com/1947/44734470345_2ff2f4dcae_o.jpg" />
                </div>
                <div>
                  <img src="https://farm2.staticflickr.com/1908/30707858577_dcff5acc2b_b.jpg" />
                </div>
                <div>
                  <img src="https://farm2.staticflickr.com/1977/30707858157_60c5d2b64a_o.jpg" />
                </div>
                {/*<div>
                  <img src={require("../images/5.jpeg")} />
                </div>
                <div>
                  <img src={require("../images/7.jpeg")} />
                </div> */}
              </Slider>

              <div className="home_slider_content text-center">
                <div className="home_slider_content_inner">
                  <h1>discover</h1>
                  <h1>the Rann of Kutch</h1>

                  <div className="button home_slider_button">
                    <div className="button_bcg" />
                    <a href="#">with Saanwariya Hospitality</a>
                  </div>
                </div>
              </div>

              {/* <!-- Home Slider Nav - Prev --> */}
              <div
                class="home_slider_nav home_slider_prev"
                onClick={this.prevClick}
              >
                <img src={require("../images/ic_back.png")} />
              </div>

              {/* <!-- Home Slider Nav - Next --> */}
              <div
                class="home_slider_nav home_slider_next"
                onClick={this.nextClick}
              >
                <img src={require("../images/ic_next.png")} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
