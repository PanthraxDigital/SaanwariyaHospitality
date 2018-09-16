import React from 'react'
import '../styles/about_styles.css'
import '../styles/about_responsive.css'
import '../styles/bootstrap4/bootstrap.min.css'

const about = () => (
  <div>
    {/* <!-- Home --> */}

    <div className="home">
      <div className="home_background parallax-window" data-parallax="scroll">
        <img src={require('../images/about_background.jpg')} alt="" />
      </div>
      <div className="home_content">
        <div className="home_title">about us</div>
      </div>
    </div>

    {/* <!-- Intro --> */}

    <div className="intro">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="intro_image">
              <img src={require('../images/intro.png')} alt="" />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="intro_content">
              <div className="intro_title">Saanwariya Hospitality</div>
              <p className="intro_text">
                Under the super shade of <b>Saanwariya(कृषण) </b>, there is no
                such things as stranger. You are and will always be welcome.{' '}
                <br />
                At Saanwariya Hospitality we dont treat like guests, we make you
                feel part of the family. <br />India perceives world as{' '}
                <b> "वसुधैव कुटुमबकं" </b>and treats guests as{' '}
                <b>God "अतिथी देवो भवः"</b>. We have imbibed this in our
                attitude. We have blended ancient and mordern indian values in a
                right way. <br />So hereyou will experience the previlage
                ofbeing treated as royals and at the same time enjoy you privacy
                and have your 'me -time'. <br />
                <br />Saanwariya Hospitality hails-<br />
                <div>
                  <i className="fa fa-star" />Service &nbsp;&nbsp;
                  <i className="fa fa-star" />Adaptable&nbsp;&nbsp;
                  <i className="fa fa-star" />Adventurous&nbsp;&nbsp;
                  <i className="fa fa-star" />Well connected<br />
                  <i className="fa fa-star" />Amiable&nbsp;&nbsp;
                  <i className="fa fa-star" />Refreshing&nbsp;&nbsp;
                  <i className="fa fa-star" />Innovative&nbsp;&nbsp;
                  <i className="fa fa-star" />Anxious to welcome you !
                </div>
                Let us have the honor to host you. <br />We at kutch Resort dont
                make you mere viewers of the landscapes, but make you experience
                the soul of kachchh. <br />Your Morning tea will be served with
                the crisp attitude of <b>कचछीमाडु</b> and your Evening will be
                as soothing and welcoming as White Rann on full moon night and
                your Night will be enlightened with trendy and hips music of
                kachchhi gujarati folk lore. You will be enchanted by the
                vibrant colors of kachchh.<br /> So be the part of Saanwariya
                Hospitality. <br />
                <br />We amateur as writers, but ace in the art of hospitality.
                And it not something to be said, but to be experienced.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- Add --> */}

    <div className="add">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="add_container">
              <div
                className="add_background"
                style={{
                  backgroundImage: `url(${require('../images/kutch-rann-utsav.jpg')})`,
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
                    book now<span />
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

    {/* <!-- Milestones --> */}

    <div className="milestones">
      <div className="container">
        <div className="row">
          {/* <!-- Milestone --> */}
          <div className="col-lg-3 milestone_col">
            <div className="milestone text-center">
              <div className="milestone_icon">
                <img src={require('../images/milestone_1.png')} alt="" />
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
                <img src={require('../images/milestone_2.png')} alt="" />
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
                <img src={require('../images/milestone_3.png')} alt="" />
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
                <img src={require('../images/milestone_4.png')} alt="" />
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
)

export default about
