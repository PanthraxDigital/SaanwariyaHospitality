import React from "react";
import Home from "../components/home";
import Search from "../components/search";
import Intro from "../components/intro";
import PlaceToVisit from "../components/placeToVisit";
import Offers from "../components/offers";
import Testimonials from "../components/testimonials";

class Body extends React.Component {
  render() {
    const hideElement = {
      display: "none"
    };

    return (
      <div>
        <Home />
        {/* <!-- Search Component --> */}
        {/* <Search style={hideElement} /> */}

        {/* <!-- Intro Component--> */}
        {/* <Intro /> */}

        {/* <!-- Place to visit --> */}
        {/* <PlaceToVisit style={hideElement} /> */}

        {/* <!-- Offers --> */}
        {/* <Offers style={hideElement} /> */}

        {/* <!-- Testimonials --> */}
        <Testimonials />
      </div>
    );
  }
}

export default Body;
