import React from 'react';
import Header from "./components/Header/Header";
import Description from "./components/Description/Description";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Description />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
