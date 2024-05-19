import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://www.linkedin.com/in/isumeetkumar/">
          Contact Me
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://www.instagram.com/sumeetsinghh_/">
          Sumeet Kumar
        </a>{" "}
      </div>
    </React.Fragment>
  );
}

export default App;
