import React from "react";
import "../styles/main_styles.css";
import "../styles/responsive.css";

const aboutkutch = () => (
  <div>
    <div className="home">
      <div className="home_background parallax-window" data-parallax="scroll">
        <img src={require("../images/8.jpeg")} alt="" />
      </div>
      <div className="home_content">
        <div className="home_title">about Kutch</div>
      </div>
    </div>

    <div className="intro">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="intro_image" style={{ padding: "10px" }}>
              <img src={require("../images/terracotta.jpg")} alt="" />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="intro_content">
              <div className="intro_title">Experience the Kutch</div>
              <p className="intro_text">
                Rann of Kutch is a vast ocean of cultural beauty. The
                spectacular sight of the boundless white desert under the
                moonlight, presents the stunning creation of nature. It is
                famous for the flat snow-white salt marsh, commonly called the
                White Desert, which is bone-dry all winter, then totally flooded
                with an overflow of seawater into the desert, post summer due to
                heavy rainfall. On a full moon night, this already white washed
                desert lights up and transports you in another world where your
                heart meets your soul. So much of who we are is where we have
                been. No matter how amazing pictures you manage to click, you
                can never captured the beauty of Kutch simply through a lens!!
                The beauty of this terrain can be cherished only when you see it
                and experience it. Whether you are a travel enthusiast or a
                history buff, photo fanatic or an experience seeker you are
                bound to be amazed by this beautiful place.KUTCH, the place
                which is known for its artistic handicrafts, flamingo sanctuary,
                the famous Kutchi food delicacies, the local markets and the
                famous local beauty. It is a fascinating place to be in because
                of it's gateways, old palaces, ornate temples and winding lanes.
                Tourists come from every corner of the world and from all over
                India for experiencing the beauty of this amazing place,
                shopping and much more. It's a unique experience to stay in the
                tents and bhungas of Kutch and to enjoy its beautiful landscapes
                with a safe and comfortable stay. It's a sight that is unlikely
                to fade for a long time. Saawariya Hospitality's Kutch resort
                promises to provide you a homely stay with a surreal lifetime
                experience of the Beautiful Kutch. So, what are you waiting for?
                Book your stay with us and make this holiday of yours a
                beautiful lifetime memory!!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="add">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="add_container" style={{ marginBottom: "20px" }}>
              <div
                className="add_background"
                style={{
                  backgroundImage: `url(${require("../images/rann-utsav.jpg")})`
                }}
              />
              <div className="add_content">
                <h1 className="add_title">Amazing Kutch</h1>
                <div className="add_subtitle">
                  From <span>5000/-</span> onwards
                </div>
                <div className="button add_button">
                  <div className="button_bcg" />
                  <a href="#">
                    Book now
                    <span />
                    <span />
                    <span />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default aboutkutch;

{
  /* <p className="intro_text">
                Kutch literally means something which intermittently becomes wet
                and dry; a large part of this district is known as Rann of Kutch
                which is shallow wetland which submerges in water during the
                rainy season and becomes dry during other seasons. The same word
                is also used in Sanskrit origin for a tortoise. The Rann is
                famous for its marshy salt flats which become snow white after
                the shallow water dries up each season before the monsoon rains.{" "}
                <br />
                <br />
                The district is also famous for ecologically important Banni
                grasslands with their seasonal marshy wetlands which form the
                outer belt of the Rann of Kutch.
                <br />
                Kutch District is surrounded by the Gulf of Kutch and the
                Arabian Sea in south and west, while northern and eastern parts
                are surrounded by the Great and Little Rann (seasonal wetlands)
                of Kutch. When there were not many dams built on its rivers, the
                Rann of Kutch remained wetlands for a large part of the year.
                Even today, the region remains wet for a significant part of
                year. The district had a population of 2,092,379 as of 2011
                census, of which 30% were urban.[4] Motor vehicles registered in
                Kutch district have their registration Number starting with
                GJ-12. The district is well connected by road, rail and air.
                There are four airports in the district: Naliya, Kandla, Mundra,
                and Bhuj. Bhuj is well connected with Mumbai airport. Being a
                border district, Kutch has both an army and an airforce base.
              </p> */
}
