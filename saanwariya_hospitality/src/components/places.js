import React from "react";
import placesList from "../content/ListOfVisitPlaces.json";
import { Link } from "react-router-dom";

class Places extends React.Component {
  render() {
    return (
      <div>
        <div className="home">
          <div
            className="home_background parallax-window"
            data-parallax="scroll"
          >
            <img src={require("../images/6.jpeg")} alt="" />
          </div>
          <div className="home_content" style={{ bottom: "0px" }}>
            <div className="home_title">Places to Visit</div>
          </div>
        </div>

        <div className="intro intro_no_margin" style={{ padding: "10px" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-1 temp_col" />
              <div className="col-lg-12">
                {placesList.map(data => (
                  <div className="offers_grid">
                    <div className="offers_item rating_4">
                      <div className="row">
                        <div className="col-lg-3 col-1680-4">
                          <div className="offers_image_container">
                            <div
                              className="offers_image_background"
                              style={{
                                backgroundImage: `url(${data.imageUrl})`
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-lg-9">
                          <div className="offers_content">
                            <div class="row">
                              <div class="col-sm-8">
                                <div className="offers_price">{data.title}</div>
                                <div
                                  className="rating_r rating_r_4 offers_rating"
                                  data-rating="4"
                                >
                                  <i />
                                  <i />
                                  <i />
                                  <i />
                                  <i />
                                </div>
                              </div>
                              <div class="col-sm-4">
                                <div className="offer_reviews">
                                  <div className="offer_reviews_content">
                                    <div className="offer_reviews_title">
                                      KMS Away
                                    </div>
                                    <div className="offer_reviews_subtitle">
                                      from resort
                                    </div>
                                  </div>
                                  <div className="offer_reviews_rating text-center">
                                    {data.distance}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p className="offers_text">{data.subtitle}</p>
                            <div
                              className="offers_icons"
                              style={{ display:'none' }}
                            >
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
                            <div className="button book_button">
                              <Link to={data.link}>
                                Explore
                                <span />
                                <span />
                                <span />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />
      </div>
    );
  }
}

export default Places;
