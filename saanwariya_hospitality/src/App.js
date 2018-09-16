import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Header */}
        <Header />
        {/* Body */}
        <Body />
        {/* Footer */}
        <Footer />
      </div>
    );
  }
}

export default App;
