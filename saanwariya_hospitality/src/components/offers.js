import React from "react";
// import '../styles/bootstrap4/bootstrap.min.css'
// import '../styles/main_styles.css'

const Offers = () => (
  <div className="offers">
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <h2 className="intro_title text-center">Rooms with great ambience</h2>
        </div>
      </div>
      <div className="row offers_items">
        {/* <!-- Offers Item --> */}
        <div className="col-lg-6 offers_col">
          <div className="offers_item">
            <div className="row">
              <div className="col-lg-6">
                <div className="offers_image_container">
                  <div
                    className="offers_image_background"
                    style={{
                      backgroundImage: `url(https://farm2.staticflickr.com/1958/44990140874_2826f25edd_m.jpg)`
                    }}
                  />
                  <div className="offer_name">
                    <a href="#">AC Cottages</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="offers_content">
                  <div className="offers_price">
                    &#8377;6000
                    <span>per night</span>
                  </div>
                  <p className="offers_text">
                    The price is for twin sharing basis and including all meals.
                    Get the feel of staying in traditional mud houses with
                    latest facilities
                  </p>
                  <div className="offers_icons">
                    <ul className="offers_icons_list">
                      <li className="offers_icons_item">
                        <img src={`${require("../images/post.png")}`} alt="" />
                      </li>
                      <li className="offers_icons_item">
                        <img
                          src={`${require("../images/compass.png")}`}
                          alt=""
                        />
                      </li>
                      <li className="offers_icons_item">
                        <img
                          src={`${require("../images/bicycle.png")}`}
                          alt=""
                        />
                      </li>
                    </ul>
                  </div>

                  <div className="offers_link">
                    <a href="#" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Offers Item --> */}
        <div className="col-lg-6 offers_col">
          <div className="offers_item">
            <div className="row">
              <div className="col-lg-6">
                <div className="offers_image_container">
                  <div
                    className="offers_image_background"
                    style={{
                      backgroundImage: `url(https://farm2.staticflickr.com/1948/44990140574_ff1b409c02_m.jpg)`
                    }}
                  />
                  <div className="offer_name">
                    <a href="#">Non AC Cottages</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="offers_content">
                  <div className="offers_price">
                    &#8377;5000
                    <span>per night</span>
                  </div>
                  <p className="offers_text">
                    The price is on twin sharing basis and including all meals.
                    Get the feel of staying in swizz cottage tents with
                    comfortable facilities.
                  </p>
                  <div className="offers_icons">
                    <ul className="offers_icons_list">
                      <li className="offers_icons_item">
                        <img src={`${require("../images/post.png")}`} alt="" />
                      </li>
                      <li className="offers_icons_item">
                        <img
                          src={`${require("../images/compass.png")}`}
                          alt=""
                        />
                      </li>
                      <li className="offers_icons_item">
                        <img
                          src={`${require("../images/bicycle.png")}`}
                          alt=""
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="offers_link">
                    <a href="#" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Offers;
