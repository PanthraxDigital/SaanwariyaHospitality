import React from 'react'
import '../styles/bootstrap4/bootstrap.min.css'
import '../styles/main_styles.css'

const Offers = () => (
  <div className="offers">
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <h2 className="section_title">the best offers with rooms</h2>
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
                      backgroundImage: `url(${require('../images/4.jpeg')})`,
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
                    6000<span>per night</span>
                  </div>
                  <p className="offers_text">
                    The price is for twin sharing basis and including all meals.
                    Get the feel of staying traditional mud houses with latest
                    facilities
                  </p>
                  {/* <div className="offers_icons">
                    <ul className="offers_icons_list">
                      <li className="offers_icons_item">
                        <img src={`${require('../images/post.png')}`} alt="" />
                      </li>
                      <li className="offers_icons_item">
                        <img
                          src={`${require('../images/compass.png')}`}
                          alt=""
                        />
                      </li>
                      <li className="offers_icons_item">
                        <img
                          src={`${require('../images/bicycle.png')}`}
                          alt=""
                        />
                      </li>
                      <li className="offers_icons_item">
                        <img
                          src={`${require('../images/sailboat.png')}`}
                          alt=""
                        />
                      </li>
                    </ul>
                  </div>
                   */}
                  <div className="offers_link">
                    <a href="#">read more</a>
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
                      backgroundImage: `url(${require('../images/4.jpeg')})`,
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
                    5000<span>per night</span>
                  </div>

                  <p className="offers_text">
                    The price is on twin sharing basis and including all meals.
                    Get the feel of staying in swizz cottage tents with
                    comfortable facilities.
                  </p>
                  {/* <div className="offers_icons">
                    <ul className="offers_icons_list">
                      <li className="offers_icons_item">
                        <img src="images/post.png" alt="" />
                      </li>
                      <li className="offers_icons_item">
                        <img src="images/compass.png" alt="" />
                      </li>
                      <li className="offers_icons_item">
                        <img src="images/bicycle.png" alt="" />
                      </li>
                      <li className="offers_icons_item">
                        <img src="images/sailboat.png" alt="" />
                      </li>
                    </ul>
                  </div>
                  */}
                  <div className="offers_link">
                    <a href="#">read more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Offers Item --> */}
        {/* <div className="col-lg-6 offers_col">
          <div className="offers_item">
            <div className="row">
              <div className="col-lg-6">
                <div className="offers_image_container">
                  <div
                    className="offers_image_background"
                    style={{
                      backgroundImage: `url(${require('../images/offer_1.jpg')})`,
                    }}
                  />
                  <div className="offer_name">
                    <a href="#">grand castle</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="offers_content">
                  <div className="offers_price">
                    $70<span>per night</span>
                  </div>
                  <div className="rating_r rating_r_4 offers_rating">
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>
                  <p className="offers_text">
                    Suspendisse potenti. In faucibus massa. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Nullam eu convallis
                    tortor.
                  </p>
                  <div className="offers_icons">
                    <ul className="offers_icons_list">
                      <li className="offers_icons_item">
                        <img src="images/post.png" alt="" />
                      </li>
                      <li className="offers_icons_item">
                        <img src="images/compass.png" alt="" />
                      </li>
                      <li className="offers_icons_item">
                        <img src="images/bicycle.png" alt="" />
                      </li>
                      <li className="offers_icons_item">
                        <img src="images/sailboat.png" alt="" />
                      </li>
                    </ul>
                  </div>
                  <div className="offers_link">
                    <a href="offers.html">read more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <!-- Offers Item --> */}
        {/* <div className="col-lg-6 offers_col">
          <div className="offers_item">
            <div className="row">
              <div className="col-lg-6">
                <div className="offers_image_container">
                  <div
                    className="offers_image_background"
                    style={{
                      backgroundImage: `url(${require('../images/offer_1.jpg')})`,
                    }}
                  />
                  <div className="offer_name">
                    <a href="#">grand castle</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="offers_content">
                  <div className="offers_price">
                    $70<span>per night</span>
                  </div>
                  <div className="rating_r rating_r_4 offers_rating">
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>
                  <p className="offers_text">
                    Suspendisse potenti. In faucibus massa. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Nullam eu convallis
                    tortor.
                  </p>
                  <div className="offers_icons">
                    <ul className="offers_icons_list">
                      <li className="offers_icons_item">
                        <img src="images/post.png" alt="" />
                      </li>
                      <li className="offers_icons_item">
                        <img src="images/compass.png" alt="" />
                      </li>
                      <li className="offers_icons_item">
                        <img src="images/bicycle.png" alt="" />
                      </li>
                      <li className="offers_icons_item">
                        <img src="images/sailboat.png" alt="" />
                      </li>
                    </ul>
                  </div>
                  <div className="offers_link">
                    <a href="offers.html">read more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       */}
      </div>
    </div>
  </div>
)

export default Offers
