import React from "react";
import axios from "axios";
import alertToast from "../components/alertToast";
import DatePicker from "react-datepicker";
import moment from "moment";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
  submit() {
    let phoneNumberStr = this.phoneNumber.value;
    let checkInStr = this.checkIn.value;
    let checkOutStr = this.checkout.value;
    let adultStr = this.adult.value;
    let childStr = this.child.value;

    axios
      .post("http://api.saanwariyahospitality.com:4004/api/BookNow", {
        phone: phoneNumberStr,
        checkIn: checkInStr,
        checkout: checkOutStr,
        adult: adultStr,
        child: childStr
      })
      .then(function(response) {
        alert("Thank you. Our executive will get in touch with you");
      })
      .catch(function(error) {
        console.log("error " + error);
        alert("Failure. Please try again later");
      });
  }

  render() {
    return (
      <div className="modal">
        <div className="search modal-content">
          <div className="container fill_height">
            <span className="closeBookNow" onClick={this.props.hideBookNow}>
              close
            </span>
            <div className="search_panel active">
              <div
                id="search_form_1"
                className="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start"
              >
                <div className="search_item">
                  <div>phone number</div>
                  <input
                    type="number"
                    ref={ref => (this.phoneNumber = ref)}
                    placeholder="00-000-000-0000"
                    className="destination search_input"
                  />
                </div>
                <div className="search_item">
                  <div>check in</div>
                  <input
                    type="text"
                    className="check_in search_input"
                    placeholder="DD-MM-YYYY"
                    ref={ref => (this.checkIn = ref)}
                  />
                  {/* <DatePicker
                    ref={ref => (this.checkIn = ref)}
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    todayButton={"Today"}
                    className="check_in search_input"
                  /> */}
                </div>
                <div className="search_item">
                  <div>check out</div>
                  <input
                    type="text"
                    className="check_out search_input"
                    placeholder="DD-MM-YYYY"
                    ref={ref => (this.checkout = ref)}
                  />
                </div>
                <div className="search_item">
                  <div>adults</div>
                  <select
                    name="adults"
                    id="adults_1"
                    ref={ref => (this.adult = ref)}
                    className="dropdown_item_select search_input"
                  >
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                    <option>04</option>
                  </select>
                </div>
                <div className="search_item">
                  <div>children</div>
                  <select
                    name="children"
                    id="children_1"
                    ref={ref => (this.child = ref)}
                    className="dropdown_item_select search_input"
                  >
                    <option>00</option>
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                  </select>
                </div>
                <button className="button search_button" onClick={this.submit}>
                  Book Now
                  <span />
                  <span />
                  <span />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
