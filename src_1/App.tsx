import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Hello } from "./components/Hello";
import { Profile } from "./components/profile/Profile";

class App extends Component {
  render(): JSX.Element {
    return (
      <Profile name="Brian Inoa" github="inoabrian" company="UPS" picture="" />
    );
  }
}

export default App;
