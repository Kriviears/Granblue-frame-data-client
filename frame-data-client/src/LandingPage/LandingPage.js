import React, { Component } from "react";
import "./LandingPage.css";

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to the Frame data app for Samurai Shodown.</h1>
        <h2>Click the button to select a character</h2>
        <Link className="Start" to={"/select"}>
          <h1>Click here to select a character</h1>
        </Link>
      </div>
    );
  }
}
