import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Typist from "react-typist";

function App() {
  return (
    <div className="App">
      <Typist avgTypingDelay={120}>
        <span className="intro-title">
          {"hi, "}
          <span className="intro-name">{"kerem"}</span>
          {" here."}
        </span>
      </Typist>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
