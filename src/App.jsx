import React, { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Table from "./components/Table.jsx";
import Arts from "./screens/Art/index.jsx";
import Slide from "./components/Slide.jsx";
import Button from "./components/Buttons.jsx";

function App() {
  return (
    <div>
      <Header />
      <Slider/>
      <Slide/>
      <Table />
      <Arts />
      <Footer />
    </div>
  );
}

export default App;
