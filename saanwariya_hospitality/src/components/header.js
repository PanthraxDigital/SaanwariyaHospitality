import React from "react";
import { Link } from "react-router-dom";
import "../styles/bootstrap4/bootstrap.min.css";
import "../styles/main_styles.css";
import "../styles/responsive.css";
// import "@fortawesome/react-fontawesome";

const Header = () => (
  <div>
    {/* <!-- Header --> */}

    <header className="header">
      {/* <!-- Top Bar --> */}

      <div className="top_bar">
        <div className="container">
          <div className="row">
            <div className="col d-flex flex-row">
              <div className="phone">+91 9638397591</div>
              <div className="social ml-auto" style={{ padding: "0px" }}>
                <ul className="social_list">
                  <li className="social_list_item">
                    <a href="#" style={{ display: "none" }}>
                      <i className="fa fa-pinterest" aria-hidden="true" />
                    </a>
                  </li>
                  <li className="social_list_item">
                    <a href="#">
                      <i className="fa fa-facebook" aria-hidden="true" />
                    </a>
                  </li>
                  <li className="social_list_item">
                    <a href="#">
                      <i className="fa fa-twitter" aria-hidden="true" />
                    </a>
                  </li>
                  <li className="social_list_item" style={{ display: "none" }}>
                    <a href="#">
                      <i className="fa fa-dribbble" aria-hidden="true" />
                    </a>
                  </li>
                  <li className="social_list_item" style={{ display: "none" }}>
                    <a href="#">
                      <i className="fa fa-behance" aria-hidden="true" />
                    </a>
                  </li>
                  <li className="social_list_item">
                    <a href="#">
                      <i className="fa fa-instagram" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Main Navigation --> */}

      <nav className="main_nav">
        <div className="container">
          <div className="row">
            <div className="col main_nav_col d-flex flex-row align-items-center justify-content-start">
              <div className="logo_container">
                <div className="logo">
                  <Link to="/">Saanwariya Hospitality</Link>
                </div>
              </div>
              <div className="main_nav_container ml-auto">
                <ul
                  className="main_nav_list"
                  style={{ marginBottom: "0px", width: "100%" }}
                >
                  <li className="main_nav_item">
                    <Link to="/">home</Link>
                  </li>
                  <li className="main_nav_item">
                    <Link to="/aboutus">about us</Link>
                  </li>
                  <li className="main_nav_item">
                    <Link to="/aboutkutch">Rann Utsav</Link>
                  </li>
                  <li className="main_nav_item">
                    <a href="https://www.instagram.com/saanwariyahospitalityindia/">Gallery</a>
                  </li>
                  <li className="main_nav_item">
                    <Link to="/contact">contact</Link>
                  </li>
                </ul>
              </div>

              <div className="content_search ml-lg-0 ml-auto" />

              <form id="search_form" className="search_form bez_1">
                <input type="search" className="search_content_input bez_1" />
              </form>

              <div className="hamburger" style={{ float: "right" }}>
                <i className="fa fa-bars trans_200" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <div className="menu trans_500">
      <div className="menu_content d-flex flex-column align-items-center justify-content-center text-center">
        <div className="menu_close_container">
          <div className="menu_close" />
        </div>
        <div className="logo menu_logo">
          <a href="#">{/* <img src="images/logo.png" alt="" /> */}</a>
        </div>
        <ul>
          <li className="menu_item">
            <a href="#">home</a>
          </li>
          <li className="menu_item">
            <a href="about.html">about us</a>
          </li>
          <li className="menu_item">
            <a href="offers.html">offers</a>
          </li>
          <li className="menu_item">
            <a href="blog.html">news</a>
          </li>
          <li className="menu_item">
            <a href="contact.html">contact</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Header;
