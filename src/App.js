import React from "react";
import SidebarNav from "./components/SidebarNav";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <div id="content">
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Footer />
      </div>
      <SidebarNav />
    </div>
  );
}

export default App;
