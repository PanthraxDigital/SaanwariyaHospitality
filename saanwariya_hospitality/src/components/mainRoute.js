import React from "react";
import { Switch, Route } from "react-router-dom";
import Body from "./body";
import About from "./aboutus";
import Aboutkutch from "./aboutkutch";
import Contact from "./contact";

// const HeaderRoute = () => (
class MainRoute extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/aboutus" component={About} />
        <Route path="/aboutkutch" component={Aboutkutch} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Body} />
      </Switch>
    );
  }
}

export default MainRoute;
