import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Accueil from "./pages/Accueil";
import APropos from "./pages/APropos";
import CV from "./pages/CV";
import Projets from "./pages/Projets";
import Contact from "./pages/Contact";
import React from "react";
import Footer from "./components/Footer";
import "./App.css"; // Assurez-vous d'importer le CSS
import Decoration from "./components/Decoration";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Decoration />
        <Header />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/projets" element={<Projets />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/cv" element={<CV />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
