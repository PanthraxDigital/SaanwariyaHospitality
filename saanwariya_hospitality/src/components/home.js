import React from "react";
//import "../styles/bootstrap4/bootstrap.min.css";
// import "../styles/main_styles.css";
import { Link } from "react-router-dom";

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
    const hideElement = {
      display: "none"
    };
    return (
      <div className="home">
        {/* <!-- Home Slider --> */}
        <div className="home_slider_container">
          <div className="owl-carousel owl-theme home_slider">
            {/* <!-- Slider Item Component--> */}
            <div className="home_slider_item">
              <div
                className="home_slider_background"
                style={{
                  backgroundImage: `url(${require("../images/dessert_1.jpg")})`
                }}
              />

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
