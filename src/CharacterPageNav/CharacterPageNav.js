import React, { Component } from "react";
import "./CharacterPageNav.css";
import { Link } from "react-router-dom";
import TekkenContext from "../TekkenContext";

export default class CharacterPageNav extends Component {
  static contextType = TekkenContext;

  butterfly = (name) => {
    name = this.props.match.params.name;
    console.log(`Butterfly ${name}`);
    if (name.includes("Narmaya")) {
      return (
        <>
          <img src="https://gbf.wiki/images/thumb/f/fd/Status_Butterfly.png/25px-Status_Butterfly.png" />
        </>
      );
    } else return <></>;
  };

  render() {
    const { currentCharacter } = this.context;

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

        {this.butterfly()}
        <div className="Home__button">
          <Link className="CharacterPage__Link" to={`/`}>
            {/* <h1>{this.props.match.params.name}</h1> */}
            <img src="https://upload.wikimedia.org/wikipedia/en/9/93/Granblue_Fantasy_Versus_logo.png" />
          </Link>
        </div>
      </>
    );
  }
}
