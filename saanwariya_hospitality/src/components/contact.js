import React from "react";
import "../styles/main_styles.css";
import "../styles/responsive.css";
import axios from "axios";
import lodash from "lodash";

class contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitContact = this.submitContact.bind(this);
  }

  submitContact() {
    let nameStr = this.name.value;
    let phoneStr = this.phone.value;
    let emailStr = this.email.value;
    let subjectStr = this.subject.value;
    let messageStr = this.message.value;

    if (nameStr.length == 0) {
      //alert('enter name');
      //this.name.attributes["required"]='required';
      
    }

    // axios
    //   .post("http://api.saanwariyahospitality.com:4004/api/Contact", {
    //     name: nameStr,
    //     phone: phoneStr,
    //     email: emailStr,
    //     subject: subjectStr,
    //     message: messageStr
    //   })
    //   .then(function(response) {
    //     alert("Thank you. Our executive will get in touch with you");
    //   })
    //   .catch(function(error) {
    //     alert("Failure. Please try again later");
    //   });
  }

  render() {
    window.scrollTo(0, 0);

    return (
      <React.Fragment>
        <div className="home home_375">
          <div
            className="home_background parallax-window"
            data-parallax="scroll"
          />
          <img src="https://farm5.staticflickr.com/4850/31854247868_b05ab86443_o.jpg" />
        </div>
        <div className="contact_form_section">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="contact_form_container">
                  <div className="contact_title text-center">get in touch</div>
                  <div
                    action="#"
                    id="contact_form"
                    className="contact_form text-center"
                  >
                    <input
                      type="text"
                      id="contact_form_name"
                      className="contact_form_name input_field"
                      placeholder="Name"
                      ref={ref => (this.name = ref)}
                    />
                    <input
                      type="text"
                      id="contact_form_email"
                      className="contact_form_email input_field"
                      placeholder="E-mail"
                      required="required"
                      ref={ref => (this.email = ref)}
                      data-error="Email is required."
                      style={{ marginBottom: "20px" }}
                    />
                    <input
                      type="text"
                      id="contact_form_phone_number"
                      className="contact_form_name input_field"
                      placeholder="Phone Number"
                      ref={ref => (this.phone = ref)}
                      required="required"
                      data-error="Phone Number is required."
                    />
                    <input
                      type="text"
                      ref={ref => (this.subject = ref)}
                      id="contact_form_subject"
                      className="contact_form_email input_field"
                      placeholder="Subject"
                      required="required"
                      data-error="Subject is required."
                    />

                    <textarea
                      id="contact_form_message"
                      className="text_field contact_form_message"
                      name="message"
                      rows="4"
                      ref={ref => (this.message = ref)}
                      placeholder="Message"
                      required="required"
                      data-error="Please, write us a message."
                    />
                    <button
                      type="submit"
                      id="form_submit_button"
                      onClick={this.submitContact}
                      className="form_submit_button button trans_200"
                    >
                      send message
                      <span />
                      <span />
                      <span />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="about_image intro_image_hide">
                  <img
                    src="https://farm5.staticflickr.com/4898/30785540977_c9f2702a11_o.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-lg-4">
                <div className="about_content">
                  <div className="logo_container about_logo">
                    <div className="logo">
                      <a href="#">
                        <img src={require("../images/logo.png")} alt="" />
                        <span style={{ fontSize: "20px" }}>
                          saanwariya Hospitality
                        </span>
                      </a>
                    </div>
                  </div>
                  <p className="about_text">
                    We at kutch Resort dont make you mere viewers of the
                    landscapes, but make you experience the soul of kachchh.
                  </p>
                  <ul className="about_social_list">
                    <li className="about_social_item">
                      <a href="#">
                        <i className="fa fa-facebook-f" />
                      </a>
                    </li>
                    <li className="about_social_item">
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li className="about_social_item">
                      <a href="#">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                  </ul>
                  <br />
                  <br />
                  <div />
                </div>
              </div>

              <div className="col-lg-3">
                <div className="about_info">
                  <ul className="contact_info_list">
                    <li className="contact_info_item d-flex flex-row">
                      <div>
                        <div className="contact_info_icon">
                          <img
                            src={require("../images/placeholder.svg")}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="contact_info_text">Kutch Gujarat</div>
                    </li>
                    <li className="contact_info_item d-flex flex-row">
                      <div>
                        <div className="contact_info_icon">
                          <img
                            src={require("../images/phone-call.svg")}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="contact_info_text">+91 96383 97591</div>
                    </li>
                    <li className="contact_info_item d-flex flex-row">
                      <div>
                        <div className="contact_info_icon">
                          <img src={require("../images/message.svg")} alt="" />
                        </div>
                      </div>
                      <div className="contact_info_text">
                        <a
                          href="mailto:info@saanwariyahospitality.com?Subject=Hello"
                          target="_top"
                        >
                          info@saanwariyahospitality.com
                        </a>
                      </div>
                    </li>
                    <li className="contact_info_item d-flex flex-row">
                      <div>
                        <div className="contact_info_icon">
                          <img
                            src={require("../images/planet-earth.svg")}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="contact_info_text">
                        <a href="/">www.saanwariyahospitality.com</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default contact;
