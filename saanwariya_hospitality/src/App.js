import React, { Component } from "react";
// import "./App.css";
import Header from "./components/header";
import MainRoute from "./components/mainRoute";
import BookNow from "./components/booknow";
import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Header */}
        <Header />
        {/* Body */}
        <BookNow />
        <MainRoute />
        <Footer />
      </div>
    );
  }
}

export default App;
