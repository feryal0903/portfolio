import React, { useState } from 'react';
import './ContentBox.css';

// Composant pour les cases de projets
export function ProjectCard({ title, description, imageUrl, tags }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="project-card">
      {imageUrl && (
        <div className="project-image-container">
          <img src={imageUrl} alt={title} className="project-image" />
        </div>
      )}
      <div className="project-content">
        <h3>{title}</h3>
        
        {tags && (
          <div className="project-tags">
            {tags.map((tag, index) => (
              <span key={index} className="project-tag">{tag}</span>
            ))}
          </div>
        )}
        
        <div className={`project-description ${expanded ? 'expanded' : ''}`}>
          <p>{description}</p>
        </div>
        
        {description && description.length > 150 && (
          <button 
            className="expand-button" 
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'Voir moins' : 'Voir plus'}
          </button>
        )}
      </div>
    </div>
  );
}

// Composant pour les rectangles longs
export function ContentSection({ title, children, icon }) {
  const [expanded, setExpanded] = useState(true);
  
  return (
    <div className="content-section">
      <div 
        className="section-header" 
        onClick={() => setExpanded(!expanded)}
      >
        {icon && <span className="section-icon">{icon}</span>}
        <h2>{title}</h2>
        <span className="expand-arrow">{expanded ? '▼' : '▶'}</span>
      </div>
      
      <div className={`section-content ${expanded ? 'expanded' : ''}`}>
        {children}
      </div>
    </div>
  );
}