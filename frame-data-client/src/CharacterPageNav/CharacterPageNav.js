import React, { Component } from "react";
import "./CharacterPageNav.css";
import { Link } from "react-router-dom";
import TekkenContext from "../TekkenContext";

export default class CharacterPageNav extends Component {
  static contextType = TekkenContext;

  render() {
    return (
      <>
        <div className="char_tabs">
          <Link
            className="frames"
            to={`/character/${this.props.match.params.name}/framedata`}>
            <h1>Frames </h1>
          </Link>
          <Link
            className="info"
            to={`/character/${this.props.match.params.name}/info`}>
            <h1>Info</h1>
          </Link>
        </div>

        <div className="Home__button">
          <Link className="CharacterPage__Link" to={`/select`}>
            {/* <h1>{this.props.match.params.name}</h1> */}
            <img src="https://i2.wp.com/www.sittingonclouds.net/wp-content/uploads/2019/07/Samurai-Shodown-2019-Logo.png?fit=525%2C143&ssl=1" />
          </Link>
        </div>
      </>
    );
  }
}
