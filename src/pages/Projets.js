import React from 'react';
import { ProjectCard } from '../components/ContentBox';

function Projets() {
  const projetsList = [
    {
      title: "Site Portfolio Vintage",
      description: "Un site portfolio avec une esthétique années 70, utilisant React et des designs inspirés de motifs floraux vintage. J'ai créé des animations douces pour les papillons et les éléments soleil qui décorent la page.",
      imageUrl: "/images/projet-portfolio.jpg", // Remplacez par le chemin réel
      tags: ["React", "CSS", "Design Vintage"]
    },
    {
      title: "Application de Recettes",
      description: "Une application permettant de rechercher et sauvegarder des recettes de cuisine. Utilise une API externe pour récupérer les recettes et permet aux utilisateurs de créer leur propre livre de cuisine virtuel.",
      imageUrl: "/images/projet-recettes.jpg", // Remplacez par le chemin réel
      tags: ["JavaScript", "API", "LocalStorage"]
    },
    {
      title: "Jeu de Plateforme",
      description: "Un petit jeu de plateforme développé avec JavaScript et Canvas. Le joueur peut sauter entre différentes plateformes et collecter des objets pour gagner des points.",
      imageUrl: "/images/projet-jeu.jpg", // Remplacez par le chemin réel
      tags: ["JavaScript", "Canvas", "Game Dev"]
    }
  ];

  return (
    <div className="text-content">
      <h1>Mes Projets</h1>
      <p>Découvrez ci-dessous une sélection de mes réalisations récentes.</p>
      
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '1.5rem'
      }}>
        {projetsList.map((projet, index) => (
          <ProjectCard 
            key={index}
            title={projet.title}
            description={projet.description}
            imageUrl={projet.imageUrl}
            tags={projet.tags}
          />
        ))}
      </div>
    </div>
  );
}

export default Projets;