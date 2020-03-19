import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to the Frame data app for Samurai Shodown.</h1>
        <p>
          'Frame data' explains the timing of when characters in a fighting game
          are allowed to act again after an interaction
        </p>
        <p>
          This app charts out the different aspects of each move of the
          characters in Samurai Shodown
        </p>
        <Link className="Start" to={"/select"}>
          <h2>Click here to begin and select a character</h2>
        </Link>
      </div>
    );
  }
}
