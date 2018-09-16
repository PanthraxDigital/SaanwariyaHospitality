import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Main from "./components/headerRoute";
import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Header */}
        <Header />
        {/* Body */}
        <Main />
        {/* Footer */}
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
