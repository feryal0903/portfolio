import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Accueil from "./pages/Accueil";
import APropos from "./pages/APropos";
import CV from "./pages/CV";
import Projets from "./pages/Projets";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<APropos />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;