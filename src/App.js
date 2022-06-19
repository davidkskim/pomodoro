import React, { Component } from "react";
import Game from './components/Game'
import Pomodoro from "./components/Pomodoro";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Pomodoro />
      </div>
    )
  }
}