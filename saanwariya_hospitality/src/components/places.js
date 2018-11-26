import React from "react";
import placesList from "../content/ListOfVisitPlaces.json";
import { Link } from "react-router-dom";
import { width } from "window-size";

class Places extends React.Component {
  render() {
    window.scrollTo(0, 0);
    return (
      <div>
        <div className="home">
          <div
            className="home_background parallax-window"
            data-parallax="scroll"
          >
            <img
              src="https://farm5.staticflickr.com/4907/45000725424_482cae2fb5_h.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="intro intro_no_margin">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 temp_col">
                <div
                  className="placeToVisitTitle"
                  style={{ textAlign: "center" }}
                >
                  Unforgettable Places at Kutch
                </div>
              </div>
              <div className="col-lg-12">
                {placesList.map(data => (
                  <div className="offers_grid">
                    <div className="offers_item rating_4">
                      <div className="row">
                        <div className="col-lg-3">
                          <div className="offers_image_container">
                            <div
                              className="offers_image_background"
                              style={{
                                backgroundImage: `url(${data.imageUrl})`,
                                height: "12em"
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-lg-9">
                          <div className="offers_content">
                            <div className="row">
                              <div className="col-sm-8">
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
                              <div className="col-sm-4">
                                <div className="offer_reviews">
                                  <div className="offer_reviews_content">
                                    <div className="offer_reviews_title">
                                      HRS Away
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
                            <p className="offers_text" style={{display:'display'}}>{data.subtitle}</p>
                            <div
                              className="offers_icons"
                              style={{ display: "none" }}
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
                            <div
                              className="button book_button"
                              style={{ display: "none" }}
                            >
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
                    <div style={{ height: "0.5em" }} />
                  </div>
                ))}
              </div>
            </div>
            <h4 style={{ float: "right" }}>And many more ...</h4>
          </div>
        </div>

        <br />
        <br />
      </div>
    );
  }
}

export default Places;

/*
  [
    {
      "title": "ambedham",
      "subtitle": "Ambe Dham is temple of Amba Mata located on Mandvi – Godhra route in Kutch district of Gujarat.Ambedham is nearly 15km far from Mandvi beach. It is a religious location with extraordinary exhibition of Indian culture and different religions.",
      "imageUrl": "https://media-cdn.tripadvisor.com/media/photo-s/0b/6e/9b/90/ambe-dham-temple.jpg",
      "link": "/rannOfKutch/",
      "distance": "7.7"
    },
    {
      "title": "72 jinalay",
      "subtitle": "72 jinalay",
      "imageUrl": "https://media-cdn.tripadvisor.com/media/photo-s/0a/fd/07/81/72-jinalaya.jpg",
      "link": "/rannOfKutch/",
      "distance": "7.8"
    },
    {
      "title": "Koteshwar",
      "subtitle": "Koteshwar is a small village and the location of an ancient Shiva temple. It located near the mouth of Kori Creek, in the west of Kutch district of Gujarat, India.",
      "imageUrl": "https://media-cdn.tripadvisor.com/media/photo-s/02/06/6f/87/koteshwar-temple.jpg",
      "link": "/rannOfKutch/",
      "distance": "7.9"
    },
    {
      "title": "Mata na madh",
      "subtitle": "Mata no Madh is a village in Lakhpat Taluka of Kutch district, Gujarat, India. The village lies surrounded by hills on both banks of a small stream and has a temple dedicated to Ashapura Mata, the household deity of former Jadeja rulers of Cutch State.",
      "imageUrl": "https://media-cdn.tripadvisor.com/media/photo-s/12/b6/cb/01/mata-na-madh.jpg",
      "link": "/rannOfKutch/",
      "distance": "8.0"
    },
    {
      "title": "vande mataram memorial",
      "subtitle": "vande mataram memorial",
      "imageUrl": "https://businesswireindia.com/Handler/ThumbNailImage.ashx?imgpath=https://cms.businesswireindia.com/Uploads/news-multimedia/images/Memorial_52342.jpg&width=700",
      "link": "/rannOfKutch/",
      "distance": "8.1"
    },
    {
      "title": "Hira Laxmi craft park",
      "subtitle": "Hira Laxmi craft park",
      "imageUrl": "http://www.ashapura.com/images/social-resp/hmcraft/gallery/modal/g11.jpg",
      "link": "/rannOfKutch/",
      "distance": "8.2"
    },
    {
      "title": "Prag mahal",
      "subtitle": "Prag mahal",
      "imageUrl": "https://www.go2india.in/gujarat/images/bhuj-pragmahal.JPG",
      "link": "/rannOfKutch/",
      "distance": "8.3"
    },
    {
      "title": "Aaiyna Mahal",
      "subtitle": "Aaiyna Mahal",
      "imageUrl": "https://www.astrolika.com/monuments/images/aina-mahal-bhuj.jpg",
      "link": "/rannOfKutch/",
      "distance": "8.4"
    },
    {
      "title": "Gandhi nu gram",
      "subtitle": "Gandhi nu gram",
      "imageUrl": "https://newtogujarat.files.wordpress.com/2015/02/colorful-bhunga.jpg",
      "link": "/rannOfKutch/",
      "distance": "8.5"
    },
    {
      "title": "Kala Dungar",
      "subtitle": "Kalo Dungar or Black Hill is the highest point in Kutch, Gujarat, India, at 462 m. It is located at 97 km from District headquarters of Bhuj and 25 km from nearest town Khavda.",
      "imageUrl": "https://media-cdn.tripadvisor.com/media/photo-s/07/9c/84/f6/kala-dungar.jpg",
      "link": "/rannOfKutch/",
      "distance": "8.7"
    },
    {
      "title": "White rann of kutch",
      "subtitle": "Palace in gujarat dasdfasd fasdfasdfasdjflkas dlaksjfalksdjf asfasiodf asiodf asdfkja sfjasoifasfjaklfa",
      "imageUrl": "http://www.prasannaholidays.com/wp-content/uploads/2017/10/Rann-Of-Kutch-1.jpg",
      "link": "/rannOfKutch/",
      "distance": "7.9"
    },
    {
      "title": "Vijay Vilas (mandavi)",
      "subtitle": "Palace in gujarat dasdfasd fasdfasdfasdjflkas dlaksjfalksdjf asfasiodf asiodf asdfkja sfjasoifasfjaklfa",
      "imageUrl": "http://www.visitkutch.com/wp-content/uploads/2018/05/Vijay-Vilas-Palace-Mandvi6-400x250.jpg",
      "link": "/vijaypalace/",
      "distance": "8.0"
    },
    {
      "title": "Black Hill",
      "subtitle": "Palace in gujarat dasdfasd fasdfasdfasdjflkas dlaksjfalksdjf asfasiodf asiodf asdfkja sfjasoifasfjaklfa",
      "imageUrl": "http://www.visitkutch.com/wp-content/uploads/2018/05/Kalo-Dungar-Observation-Deck-400x250.jpg",
      "link": "/blackHill/",
      "distance": "8.1"
    },
    {
      "title": "Narayan Sarovar",
      "subtitle": "Palace in gujarat dasdfasd fasdfasdfasdjflkas dlaksjfalksdjf asfasiodf asiodf asdfkja sfjasoifasfjaklfa",
      "imageUrl": "http://www.visitkutch.com/wp-content/uploads/2018/05/narayansarovar-400x250.jpg",
      "link": "/narayansarovar/",
      "distance": "8.2"
    }
  ]
] */
