import React from "react";
import "../styles/main_styles.css";
import "../styles/responsive.css";

class about extends React.Component {
  render() {
    window.scrollTo(0, 0);
    return (
      <div>
        {/* <!-- Home --> */}

        <div className="home home_375">
          <div>
            <img
              src="https://farm2.staticflickr.com/1966/30707857437_a0df186383_o.jpg"
              alt=""
            />
          </div>
        </div>

        {/* <!-- Intro --> */}

        <div className="intro intro_no_margin" style={{ padding: "10px" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="intro_content">
                  <div className="intro_title">
                    About Saanwariya Hospitality
                  </div>
                  <p className="intro_text" style={{ margin: "0" }}>
                    Saanwariya Hospitality got its name from Saanwariya Sheth
                    Temple in Rajasthan, dedicated to Lord Shri Krishna, under
                    whose blessings Saanwariya Hospitality came into being. <br />We
                    first ventured into Kutch Resort which is situated roughly 7
                    kms away from the White Salt Desert in the Great Rann of
                    Kutch. Here, we specialise in luxurious tent and
                    Bhunga(traditional cottages) accomodations at affordable
                    rates. Spread out over an area of 1.75 acres, we have all
                    the amenities that a tourist looks for in his / her vacation
                    home - tent area, cottage area, garden, open sky dining
                    section as well as traditional dining room, separate play
                    areas for indoor as well as outdoor sports along with A/Cs,
                    heaters, televisions and intercom services in each of the
                    rooms. <br />Saanwariya Hospitality has humbly served over 3000
                    guests in the last two years of service. Our standards keep
                    getting higher to provide for better customer satisfaction
                    with each passing year. We serve our guests with a variety
                    of finger licking vegetarian delicacies from a wide range of
                    Indian cuisines!! <br />At Saanwariya Hospitality's Kutch Resort,
                    we also provide transportation for our guests to visit
                    popular tourist destinations around.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- About --> */}

        <div className="add intro_image_hide" style={{ marginTop: "3em" }}>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="add_container">
                  <div
                    className="add_background"
                    style={{
                      backgroundImage: `url(https://farm5.staticflickr.com/4836/45675023872_c07bd06c3d_b.jpg)`
                    }}
                  />
                  <div className="add_content">
                    <h1 className="add_title">Amazing Tents & Bhungas</h1>
                    <div className="add_subtitle">
                      From <span>5000/-</span> onwards
                    </div>
                    <div className="button add_button">
                      <div className="button_bcg" />
                      <a href="#" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Milestones --> */}

        <div className="milestones">
          <div className="container">
            <div className="row">
              {/* <!-- Milestone --> */}
              <div className="col-lg-3 milestone_col">
                <div className="milestone text-center">
                  <div className="milestone_icon">
                    <img src={require("../images/milestone_1.png")} alt="" />
                  </div>
                  <div className="milestone_counter" data-end-value="255">
                    1
                  </div>
                  <div className="milestone_text">Resort</div>
                </div>
              </div>

              {/* <!-- Milestone --> */}
              <div className="col-lg-3 milestone_col">
                <div className="milestone text-center">
                  <div className="milestone_icon">
                    <img src={require("../images/milestone_2.png")} alt="" />
                  </div>
                  <div className="milestone_counter" data-end-value="1176">
                    17
                  </div>
                  <div className="milestone_text">Places</div>
                </div>
              </div>

              {/* <!-- Milestone --> */}
              <div className="col-lg-3 milestone_col">
                <div className="milestone text-center">
                  <div className="milestone_icon">
                    <img src={require("../images/milestone_3.png")} alt="" />
                  </div>
                  <div className="milestone_counter" data-end-value="39">
                    25
                  </div>
                  <div className="milestone_text">Countries</div>
                </div>
              </div>

              {/* <!-- Milestone --> */}
              <div className="col-lg-3 milestone_col">
                <div className="milestone text-center">
                  <div className="milestone_icon">
                    <img src={require("../images/milestone_4.png")} alt="" />
                  </div>
                  <div className="milestone_counter" data-end-value="127">
                    12847
                  </div>
                  <div className="milestone_text">Visitors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default about;
