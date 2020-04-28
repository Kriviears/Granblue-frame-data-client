import React, { Component } from "react";
import "./CharacterListMain.css";
import { Link } from "react-router-dom";
import CharacterCard from "../CharacterCard/CharacterCard";
import TekkenContext from "../TekkenContext";
import CharApiService from "../services/char-api-service";

export default class CharacterListMain extends Component {
  static contextType = TekkenContext;

  componentDidMount() {
    CharApiService.getCharacters().then((data) => {
      data.sort((a, b) => a.name.localeCompare(b.name));
      this.context.setCharacters(data);
    });
  }

  render() {
    const { characters, setCurrentCharacter } = this.context;
    let filteredList = characters.filter((char) => char.id !== 14);

    return (
      <div className="CharListMain">
        <ul className="CharList">
          {filteredList.map((char, i) => (
            <li key={i}>
              <Link
                className="CharacterList__link"
                to={`/character/${char.name}/framedata`}>
                <CharacterCard
                  name={char.name}
                  src={char.thumbnail}
                  alt={char.name}
                  onClick={() => setCurrentCharacter()}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
