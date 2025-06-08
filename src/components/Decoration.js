import React, { useEffect, useState } from 'react';
import papillon from '../assets/papillion.png';
import soleil from '../assets/soleil.png';

function Decoration() {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    // Créer des éléments aléatoires
    const generateRandomElements = () => {
      const newElements = [];
      
      // Générer 6 papillons à gauche (plus qu'avant)
      for (let i = 0; i < 6; i++) {
        newElements.push({
          id: `papillon-${i}`,
          image: papillon,
          top: Math.random() * 80 + 10, // Entre 10% et 90%
          left: Math.random() * 30, // De 0% à 30% (côté gauche)
          size: Math.random() * 70 + 40, // Entre 40px et 110px (plus grand)
          rotation: Math.random() * 360, // Rotation aléatoire
          type: 'papillon'
        });
      }
      
      // Générer 5 papillons à droite (plus qu'avant)
      for (let i = 0; i < 5; i++) {
        newElements.push({
          id: `papillon-droite-${i}`,
          image: papillon,
          top: Math.random() * 80 + 10,
          left: Math.random() * 30 + 70, // De 70% à 100% (côté droit)
          size: Math.random() * 70 + 40, // Entre 40px et 110px (plus grand)
          rotation: Math.random() * 360,
          type: 'papillon'
        });
      }
      
      // Générer 4 soleils (plus qu'avant)
      for (let i = 0; i < 4; i++) {
        const leftPosition = i % 2 === 0 
          ? Math.random() * 25 // Les soleils pairs à gauche (0-25%)
          : Math.random() * 25 + 75; // Les soleils impairs à droite (75-100%)
          
        newElements.push({
          id: `soleil-${i}`,
          image: soleil,
          top: Math.random() * 80 + 5,
          left: leftPosition,
          size: Math.random() * 120 + 80, // Entre 80px et 200px (beaucoup plus grand)
          rotation: Math.random() * 40 - 20, // Légère rotation entre -20 et +20 degrés
          type: 'soleil'
        });
      }
      
      // Ajouter un très grand soleil en bas à gauche
      newElements.push({
        id: 'grand-soleil',
        image: soleil,
        top: 75 + Math.random() * 10,
        left: 5 + Math.random() * 10,
        size: 230 + Math.random() * 70, // Un très grand soleil entre 230px et 300px
        rotation: Math.random() * 20 - 10,
        type: 'soleil',
        opacity: 0.6 // Plus transparent
      });
      
      // Ajouter quelques papillons vraiment petits en haut
      for (let i = 0; i < 3; i++) {
        newElements.push({
          id: `mini-papillon-${i}`,
          image: papillon,
          top: Math.random() * 20,
          left: Math.random() * 100, // N'importe où horizontalement
          size: Math.random() * 25 + 15, // Entre 15px et 40px (petits)
          rotation: Math.random() * 360,
          type: 'papillon',
          opacity: 0.8
        });
      }
      
      return newElements;
    };
    
    setElements(generateRandomElements());
  }, []);
  
  return (
    <div className="decoration-container">
      {elements.map(elem => (
        <img
          key={elem.id}
          src={elem.image}
          alt={elem.type}
          style={{
            position: 'absolute',
            top: `${elem.top}%`,
            left: `${elem.left}%`,
            width: `${elem.size}px`,
            height: 'auto',
            transform: `rotate(${elem.rotation}deg)`,
            zIndex: -1,
            pointerEvents: 'none',
            opacity: elem.opacity || (elem.type === 'soleil' ? 0.7 : 0.9),
            transition: 'transform 0.5s ease', // Ajout d'une transition pour l'animation
            animation: elem.type === 'papillon' ? `float ${3 + Math.random() * 4}s ease-in-out infinite alternate` : 'none'
          }}
        />
      ))}
      
      
    </div>
  );
}

export default Decoration;