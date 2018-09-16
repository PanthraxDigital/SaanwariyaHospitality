import React from "react";
import { Switch, Route } from "react-router-dom";
import Body from "../components/body";
import About from "../components/aboutus";
import Aboutkutch from "../components/aboutkutch";
import Contact from "../components/contact";

// const HeaderRoute = () => (
class HeaderRoute extends React.Component {
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

export default HeaderRoute;
