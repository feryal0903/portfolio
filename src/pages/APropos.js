import React from 'react';
import { ContentSection } from '../components/ContentBox';
import big from '../assets/big.jpg';
import fleur from '../assets/fleur.jpg';
import hxh from '../assets/hxh.jpg';
import k from '../assets/k.webp';
import lesJoursMauves from '../assets/les_jours_mauves.webp';
import saiki from '../assets/saiki.jpg';
import ym from '../assets/ym.jpg';
import septante from '../assets/70.webp';
import dessin from '../assets/dessin.jpg';

function APropos() {
    const [selectedImage, setSelectedImage] = React.useState(null);
    const images = [
        { 
            src: big, 
            alt: "The Big Bang Theory",
            description: "The Big Bang Theory : sitcom" 
        },
        { 
            src: fleur, 
            alt: "Fleur",
            description: "Inspiration des couleurs de mon portfolio" 
        },
        { 
            src: hxh, 
            alt: "Hunter x Hunter",
            description: "Hunter x Hunter : animé et manga" 
        },
        { 
            src: k, 
            alt: "GNX",
            description: "GNX : Album studio de Kendrick Lamar" 
        },
        { 
            src: lesJoursMauves, 
            alt: "Les jours mauves",
            description: "Les jours mauves : Roman de Kalindi Ramphul" 
        },
        { 
            src: saiki, 
            alt: "Saiki",
            description: "Saiki Kusuo, : animé et manga" 
        },
        { 
            src: ym, 
            alt: "Yohji Yamamoto",
            description: "Yohji Yamamoto : printemps 2023 hommes" 
        },
        { 
            src: septante, 
            alt: "That '70s Show",
            description: "That '70s Show : Sitcom" 
        },
        { 
            src: dessin, 
            alt: "Dessin",
            description: "Dernier de mes dessins" 
        }
    ];
  return (
    <div className="text-content">

      <ContentSection title="Mes Activités Sportives" icon="🤸">
        
          6 ans de danse classique<br />
          2 ans de handball<br />
          Pratique actuelle de l'escalade depuis 3 ans<br /><a 
          href="portfolio/assets/Escalade/Escalade.html"
          className="sport-link"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            marginTop: '1rem',
            padding: '0.5rem 1rem',
            background: 'linear-gradient(45deg, #D7462B 40%, #F77831 100%)',
            color: '#F2D2A4',
            textDecoration: 'none',
            borderRadius: '20px',
            fontFamily: 'Shrikhand, cursive, sans-serif',
            fontSize: '0.9rem',
            transition: 'all 0.3s ease'
          }}
        >Quiz 🧗‍♀️</a>
    
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
          marginTop: '1rem',
          position: 'relative'
        }}>
          {images.map((image, index) => (
            <div key={index} style={{ position: 'relative' }}>
              <img 
                src={image.src} 
                alt={image.alt}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  cursor: 'pointer',
                }}
                onClick={() => setSelectedImage(image)} // Changé de onMouseEnter à onClick
              />
            </div>
          ))}
        </div>
        {selectedImage && (
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1000,
            }}
            onClick={() => setSelectedImage(null)}
          >
            <div 
              style={{
                backgroundColor: 'rgba(242, 210, 164, 0.95)',
                padding: '20px',
                borderRadius: '8px',
                maxWidth: '90%',
                maxHeight: '90vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem'
              }}
              onClick={e => e.stopPropagation()}
            ><img
            src={selectedImage.src}
            alt={selectedImage.alt}
            style={{
              maxWidth: '100%',
              maxHeight: '70vh',
              objectFit: 'contain',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            }}
          />
          <p style={{
            color: '#845022',
            fontSize: '1.1rem',
            margin: '0',
            textAlign: 'center',
            fontFamily: 'Shrikhand, cursive, sans-serif'
          }}>
            {selectedImage.description}
          </p>
        </div>
      </div>
    )}
      </ContentSection>
    </div>
  );
}

export default APropos;