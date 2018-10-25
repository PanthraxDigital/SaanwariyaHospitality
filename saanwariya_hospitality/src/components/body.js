import React from "react";
import Home from "../components/home";
import Search from "../components/search";
import Packages from "../components/packages";
import Offers from "../components/offers";
import Amenities from "../components/amenities";
import Testimonials from "../components/testimonials";

class Body extends React.Component {
  render() {
    return (
      <div>
        <Home />
        {/* <!-- Search Component --> */}
        {/* <Search/> */}

        {/* <!-- Intro Component--> */}
        <Packages />

        <Amenities />

        {/* <!-- Offers --> */}
        <Offers />

        {/* <!-- Testimonials --> */}
        <Testimonials />
      </div>
    );
  }
}

export default Body;
