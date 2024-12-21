import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";

export default function HomePage(){
  return (
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes>
  );
};
