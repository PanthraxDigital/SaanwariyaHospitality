import React from "react";
import Home from "../components/home";
import Search from "../components/search";
import Intro from "../components/intro";
import PlaceToVisit from "../components/placeToVisit";
import Offers from "../components/offers";
import Testimonials from "../components/testimonials";


class Body extends React.Component {
  render() {
    return (
      <div>
        <Home />

        {/* <!-- Search Component --> */}
        <Search />

        {/* <!-- Intro Component--> */}
        {/* <Intro /> */}

        {/* <!-- Place to visit --> */}
        <PlaceToVisit />

        {/* <!-- Offers --> */}
        {/* <Offers /> */}

        {/* <!-- Testimonials --> */}
        {/* <Testimonials /> */}

      </div>
    );
  }
}

export default Body;
