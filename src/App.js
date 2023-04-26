import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import AddBlog from "./components/AddBlog";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Izbrannoe from "./components/Izbrannoe";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<AddBlog />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/izbrannoe" element={<Izbrannoe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
