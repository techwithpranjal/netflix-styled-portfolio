import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certifications from "./components/Certifications";

function App(){
  return (
    <div className="min-h-screen bg-black">
      <Header />

      <Routes>

        <Route path="/" element={
          <main>
            <Hero />
            <Projects />
            <About />
            <Certifications />
            <Contact />
          </main>
        } />
      </Routes>

      <Footer />
    </div>
  )
}

export default App;