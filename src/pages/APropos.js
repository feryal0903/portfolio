import React from 'react';
import { ContentSection } from '../components/ContentBox';

function APropos() {
  return (
    <div className="text-content">

      <ContentSection title="Mes Activités Sportives" icon="🤸">
        
          6 ans de danse classique<br />
          2 ans de handball<br />
          Pratique actuelle de l'escalade depuis 3 ans<br />
    
      </ContentSection>
      
      <ContentSection title="Mes Autres Passions" icon="🎨">
    
          Lecture<br />
          Dessin<br />
          Mode<br />
    
      </ContentSection>

      <ContentSection title="Mon Mood Board" icon="📷">
        <div className="photo-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '1rem',
          marginTop: '1rem'
        }}>
          {/* Ici vous pouvez ajouter vos images comme ceci : */}
          <img 
            src="/chemin/vers/image1.jpg" 
            alt="Description" 
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '8px'
            }}
          />
          {/* Répétez ce bloc pour chaque image */}
        </div>
      </ContentSection>
    </div>
  );
}

export default APropos;