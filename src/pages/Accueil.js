import React from 'react';
import { Link } from 'react-router-dom';
import { ContentSection } from '../components/ContentBox';

function Accueil() {
  return (
    <div className="text-content">
      <ContentSection>
        <h1 style={{ 
          fontSize: '2.5rem',
          color: '#D7462B',
          marginBottom: '2rem'
        }}>
          Bienvenue sur mon portfolio !
        </h1>
        
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          Je suis Lilya Benkheira, étudiante en BUT2 Informatique 
          spécialisée dans le déploiement d'applications communicantes et sécurisées.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginTop: '2rem'
        }}>
          <Link to="/projets" className="home-card">
            <h3>Mes Projets</h3>
            <p>Découvrez mes réalisations lié à l'informatique.</p>
          </Link>

          <Link to="/cv" className="home-card">
            <h3>Mon CV</h3>
            <p>Parcourez mon parcours et mes compétences.</p>
          </Link>

          <Link to="/a-propos" className="home-card">
            <h3>À Propos</h3>
            <p>En savoir plus sur moi et mes centres d'intérêt.</p>
          </Link>
        </div>
      </ContentSection>
    </div>
  );
}

export default Accueil;