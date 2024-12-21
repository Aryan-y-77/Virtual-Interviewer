import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Layout from "./Layout"; 
import Dashboard from "./Dashboard/Dashboard";
import Category from "./Category/Category";
import Permission from "./Permission/Permission";
import Register from "./Register/Register";
import Camera_Preview1 from "./Camera_Preview/Camera_Preview1";
import Camera_Preview2 from "./Camera_Preview/Camera_Preview2";
import Resume from "./Resume/Resume";
import Review_Interview from "./Review_Interview/Review_Interview";
import Analysis from "./Review_Interview/Analysis";
import About from "./About/About";
import Contact from "./Contact/Contact";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="interview-category" element={<Category />} />
        <Route path="cam-permission" element={<Permission />} />
        <Route path="register" element={<Register />} />
        <Route path="cam-preview1" element={<Camera_Preview1 />} />
        <Route path="cam-preview2" element={<Camera_Preview2 />} />
        <Route path="resume" element={<Resume />} />
        <Route path="review-interview" element={<Review_Interview />} />
        <Route path="analysis" element={<Analysis />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        
      </Route>
    </Routes>
  );
}
