import React from "react";
import Search from "../components/search";
import "../styles/main_styles.css";
import "../styles/responsive.css";

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
    
    return (
      <div>
        {this.state.showBooNow ? (
          <div>
            <Search hideBookNow={this.showBooNowFn} />
          </div>
        ) : (
          <div className="fixedBN" onClick={this.showBooNowFn}>
            <span>Book Now</span>
          </div>
        )}
      </div>
    );
  }
}

export default BookNow;
