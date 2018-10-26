import React from "react";
import Search from "../components/search";

class BookNow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBooNow: false
    };
    this.showBooNowFn = this.showBooNowFn.bind(this);
  }

  showBooNowFn(e) {
    this.setState({
      showBooNow: !this.state.showBooNow
    });
  }

  render() {
    const fixedBN = {
      backgroundColor: "black",
      position: "fixed",
      top: "50%",
      padding: "1em",
      fontSize: "18px",
      color: "white",
      zIndex: 10,
      cursor: "pointer"
    };
    return (
      <div>
        {this.state.showBooNow ? (
          <div>
            <Search hideBookNow={this.showBooNowFn} />
          </div>
        ) : (
          <div>
            <span onClick={this.showBooNowFn} style={fixedBN}>
              Book Now
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default BookNow;
