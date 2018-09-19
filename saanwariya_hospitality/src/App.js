import React, { Component } from "react";
// import "./App.css";
import Header from "./components/header";
import MainRoute from "./components/mainRoute";
import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Header */}
        {/* <Header /> */}
        {/* Body */}
        <MainRoute />
        {/* Footer */}
        <Footer />
      </div>
    );
  }
}

export default App;
