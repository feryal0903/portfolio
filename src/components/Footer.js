import React from "react";
import waveImage from "../assets/wave-footer-image.png"; // Ajustez le nom du fichier selon le nom réel de l'image

function Footer() {
  return (
    <footer style={{ 
      width: '100%', 
      marginTop: 'auto',
      position: 'relative',
      bottom: 0
    }}>
      <img 
        src={waveImage} 
        alt="Vague avec fossiles de poissons" 
        style={{
          width: '100%',
          height: 'auto',
          display: 'block'
        }}
      />
      <p style={{
        textAlign: 'center',
        padding: '0.5rem',
        margin: 0
      }}>© 2025 - Mon Portfolio</p>
    </footer>
  );
}

export default Footer;