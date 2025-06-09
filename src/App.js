import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Accueil from "./pages/Accueil";
import APropos from "./pages/APropos";
import CV from "./pages/CV";
import Projets from "./pages/Projets";
import React from "react";
import Footer from "./components/Footer";
import "./App.css";
import Decoration from "./components/Decoration";

function App() {
  return (
    <Router >
      <div className="app-container">
        <Decoration />
        <Header />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/projets" element={<Projets />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/cv" element={<CV />} />
            <Route path="*" element={<Accueil />} /> {/* Redirection par défaut */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
