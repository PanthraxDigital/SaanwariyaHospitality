import React from 'react'
// import '../styles/bootstrap4/bootstrap.min.css'
// import '../styles/main_styles.css'

const Intro = () => (
  <div className="intro">
    <div className="container">
      <div className="row">
        <div className="col">
          <h2 className="intro_title text-center">WE HAVE THE BEST PACKAGES</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-10 offset-lg-1">
          <div className="intro_text text-center">
            <p>
              We have created the packages by keeping your comfort in mind. The
              packages includes lots of FREE stuff which will make your Kutch
              Tour a memorable experience.Which you will cherised throghout your
              life.{' '}
            </p>
          </div>
        </div>
      </div>
      <div className="row intro_items">
        {/* <!-- Intro Item --> */}
        <div className="col-lg-4 intro_col">
          <div className="intro_item">
            <div className="intro_item_overlay" />

            <div
              className="intro_item_background"
              style={{ backgroundImage: `url(${require('../images/1.jpeg')})` }}
            />
            <div className="intro_item_content d-flex flex-column align-items-center justify-content-center">
              <div className="intro_date">Nov 01st - Mar 01st</div>
              <div className="button intro_button">
                <div className="button_bcg" />
                <a
                  href="https://drive.google.com/open?id=1zA3BOD9DnTwgg1H0Hc2bXdievgs37yDI"
                  target="_blank"
                >
                  see more<span />
                  <span />
                  <span />
                </a>
              </div>
              <div className="intro_center text-center">
                <h1>1N / 2D packages</h1>
                <div className="intro_price">From 3800/- onwards</div>
                <div className="rating rating_4">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Intro Item --> */}
        <div className="col-lg-4 intro_col">
          <div className="intro_item">
            <div className="intro_item_overlay" />

            <div
              className="intro_item_background"
              style={{ backgroundImage: `url(${require('../images/2.jpeg')})` }}
            />
            <div className="intro_item_content d-flex flex-column align-items-center justify-content-center">
              <div className="intro_date">Nov 01st - Mar 01st</div>
              <div className="button intro_button">
                <div className="button_bcg" />
                <a
                  href="https://drive.google.com/open?id=1D2scpP4wImnFn09EIStUIOq4lPnEDR9O"
                  target="_blank"
                >
                  see more<span />
                  <span />
                  <span />
                </a>
              </div>
              <div className="intro_center text-center">
                <h1>2N / 3D package</h1>
                <div className="intro_price">From 7000/- onwards</div>
                <div className="rating rating_4">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Intro Item --> */}
        <div className="col-lg-4 intro_col">
          <div className="intro_item">
            <div className="intro_item_overlay" />
            {/* <!-- Image by https://unsplash.com/@willianjusten --> */}
            <div
              className="intro_item_background"
              style={{ backgroundImage: `url(${require('../images/3.jpeg')})` }}
            />
            <div className="intro_item_content d-flex flex-column align-items-center justify-content-center">
              <div className="intro_date">Nov 01st - Mar 01st</div>
              <div className="button intro_button">
                <div className="button_bcg" />
                <a
                  href="https://drive.google.com/open?id=1ZUuDD0r-nvCCuW9jHBoOo-1DQMH9T96T"
                  target="_blank"
                >
                  see more<span />
                  <span />
                  <span />
                </a>
              </div>
              <div className="intro_center text-center">
                <h1>3N / 4D package</h1>
                <div className="intro_price">From 10200/- onwards</div>
                <div className="rating rating_4">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Intro
