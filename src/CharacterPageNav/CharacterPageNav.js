import React, { Component } from "react";
import "./CharacterPageNav.css";
import { Link } from "react-router-dom";
import ButterflyButton from "../ButterflyButton/ButterflyButton";

export default class CharacterPageNav extends Component {
  static defaultProps = {
    match: {
      params: {},
    },
  };

  render() {
    console.log(`From the nav ${this.props.match.params.name}`);
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

        <h1>{this.props.match.params.name}</h1>

        <div className="Home__button">
          <Link className="CharacterPage__Link" to={`/`}>
            {/* <h1>{this.props.match.params.name}</h1> */}
            <img
              alt="Home Button"
              src="https://upload.wikimedia.org/wikipedia/en/9/93/Granblue_Fantasy_Versus_logo.png"
            />
          </Link>
        </div>
      </>
    );
  }
}
