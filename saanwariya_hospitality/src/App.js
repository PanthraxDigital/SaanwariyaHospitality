import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Home from "./components/home";
import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Header */}
        <Header />
        {/* Body */}
        <Home />
        {/* Footer */}
        <Footer />
      </div>
    );
  }
}

export default App;
