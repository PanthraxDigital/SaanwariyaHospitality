import React from "react";
import Home from "../components/home";
import Search from "../components/search";
import Packages from "../components/Packages";
import PlaceToVisit from "../components/placeToVisit";
import Offers from "../components/offers";
import Testimonials from "../components/testimonials";

class Body extends React.Component {
  render() {
    const hideElement = {
      display: "block"
    };

    return (
      <div>
        <Home />
        {/* <!-- Search Component --> */}
        {/* <Search/> */}

        {/* <!-- Intro Component--> */}
        <Packages />

        {/* <!-- Place to visit --> */}
        <PlaceToVisit  />

        {/* <!-- Offers --> */}
        <Offers />

        {/* <!-- Testimonials --> */}
        <Testimonials />
      </div>
    );
  }
}

export default Body;
