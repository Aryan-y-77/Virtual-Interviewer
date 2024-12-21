import React, { Component } from "react";
import { Routes, Route } from "react-router-dom"; // Removed BrowserRouter import
import Home from "./Home/Home";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Routes>
                <Route path="/" element={<p>This is the home page</p>} />
                <Route path="/home" element={<Home />} /> 
            </Routes>
        );
    }
}
