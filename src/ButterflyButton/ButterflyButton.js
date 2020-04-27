import React, { Component } from "react";
import "./ButterflyButton.css";
import { Link } from "react-router-dom";
import TekkenContext from "../TekkenContext";

export default class ButterflyButton extends Component {
  static contextType = TekkenContext;

  butterfly = (name) => {
    name = this.props.name;
    let stance = "";

    if (name.includes("Narmaya")) {
      name === "Narmaya (Genji)"
        ? (stance = "Narmaya (Kagura)")
        : (stance = "Narmaya (Genji)");
      return (
        <div onClick={this.reload.bind(this)}>
          <Link className="Butterfly" to={`/character/${stance}/framedata`}>
            <img
              alt="butterfly"
              src="https://gbf.wiki/images/thumb/f/fd/Status_Butterfly.png/25px-Status_Butterfly.png"
            />
          </Link>
        </div>
      );
    } else return <></>;
  };

  render() {
    return <>{this.butterfly()}</>;
  }

  reload() {
    console.log("reload");
    window.location.reload(false);
  }
}
