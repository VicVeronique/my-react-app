import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lviv" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://famous-seahorse-dea7c2.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            VicVeronique
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/VicVeronique/my-react-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
