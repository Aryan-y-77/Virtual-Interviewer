import React, { Component } from "react";
import { createRoot } from "react-dom/client"; // Correct import for React 18+
import { BrowserRouter as Router } from "react-router-dom"; // Import Router
import HomePage from "./HomePage";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router> {/* Wrap HomePage with BrowserRouter */}
        <div>
          <HomePage />
        </div>
      </Router>
    );
  }
}

const appDiv = document.getElementById("app");
const root = createRoot(appDiv); // Correct method for React 18+
root.render(<App />);
