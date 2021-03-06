import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
//import { characters } from './DummyData'
import TekkenContext from "./TekkenContext";
import { gatherData } from "./aux-functions";

import CharacterPageMain from "./CharacterPageMain/CharacterPageMain";
import CharacterPageNav from "./CharacterPageNav/CharacterPageNav";
import CharacterListMain from "./CharacterListMain/CharacterListMain";
import CharacterListNav from "./CharacterListNav/CharacterListNav";
import CharacterInfoMain from "./CharacterInfoMain/CharacterInfoMain";

class App extends React.Component {
  state = {
    characters: [],
    currentCharacter: {},
    moves: [],
    show: {
      command: true,
      startup: true,
      onblock: true,
      onhit: true,
      attribute: true,
      recovery: true,
      damage: true,
      cancel: true,
      super_cancel: true,
      properties: true,
    },
  };

  setCharacters = (data) => {
    this.setState({
      characters: data,
    });
  };

  getMoves = (data) => {
    this.setState({
      moves: data,
    });
  };

  setCurrentCharacter = (name) => {
    let current = this.state.characters.filter((char) => char.name === name);
    console.log("setting character");
    this.setState({
      currentCharacter: current,
    });
  };

  characterSelect = (i) => {
    const char = this.state.characters[i];
    console.log("character select");
    this.setState({
      currentCharacter: char,
    });
  };

  backHome() {
    this.setState({
      currentCharacter: { name: "" },
    });
  }

  renderNavRoutes() {
    return (
      <>
        <Route exact path="/" component={CharacterListNav} />
        <Route path="/select" component={CharacterListNav} />
        <Route path="/character/:name" component={CharacterPageNav} />
      </>
    );
  }

  renderMainRoutes() {
    return (
      <>
        <Route exact path="/" component={CharacterListMain} />
        <Route
          path="/character/:name/framedata"
          component={CharacterPageMain}
        />
        <Route path="/character/:name/info" component={CharacterInfoMain} />
      </>
    );
  }

  render() {
    const contextValue = {
      characters: this.state.characters,
      currentCharacter: this.state.currentCharacter,
      moves: this.state.moves,
      characterSelect: this.characterSelect,
      gatherData: gatherData,
      backHome: this.backHome,
      setCharacters: this.setCharacters,
      setCurrentCharacter: this.setCurrentCharacter,
      getMoves: this.getMoves,
    };

    return (
      <TekkenContext.Provider value={contextValue}>
        <div className="App">
          <header className="App_header">{this.renderNavRoutes()}</header>
          <main className="App_main">{this.renderMainRoutes()}</main>
        </div>
      </TekkenContext.Provider>
    );
  }
}

export default App;
