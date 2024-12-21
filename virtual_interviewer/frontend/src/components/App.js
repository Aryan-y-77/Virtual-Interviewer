import React, { Component } from "react";
import { createRoot } from "react-dom/client"; // Correct import for React 18+
import HomePage from "./HomePage";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HomePage />
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
const root = createRoot(appDiv); // Correct method for React 18+
root.render(<App />);
