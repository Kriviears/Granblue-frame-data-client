import React, { Component } from "react";
import "./CharacterInfoMain.css";
import TekkenContext from "../TekkenContext";

export default class CharacterInfoMain extends Component {
  static contextType = TekkenContext;
  render() {
    return <h1 className="info__page">Guides Coming Soon</h1>;
  }
}
