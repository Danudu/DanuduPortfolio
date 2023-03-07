import React from 'react';
import "./App.css";
import About from "./screens/About";
import Achieve from "./screens/Achieve";
import Hero from "./screens/Hero";
import NavBar from "./screens/NavBar";
import Work from "./screens/Work";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Achieve />
      <Work />
    </>
  );
}

export default App;
