import React, { Component } from "react";
import { createRoot } from "react-dom/client"; 
import { BrowserRouter as Router } from "react-router-dom"; 
import HomePage from "./HomePage";
import '../../static/css/index.css';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router> 
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
