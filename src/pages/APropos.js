import React from 'react';
import { ContentSection } from '../components/ContentBox';

function APropos() {
  return (
    <div className="text-content">
      <h1>À Propos de Moi</h1>
      
      <ContentSection title="Qui suis-je ?" icon="👋">
        <p>Passionné(e) par le développement web depuis plusieurs années, j'aime créer des interfaces à la fois esthétiques et fonctionnelles. Mon style s'inspire des années 70 avec une touche contemporaine. Je suis toujours à la recherche de nouveaux défis créatifs!</p>
      </ContentSection>
      
      <ContentSection title="Mes Compétences" icon="💻">
        <p>Je maîtrise plusieurs technologies web modernes:</p>
        <ul>
          <li><strong>Front-end:</strong> HTML5, CSS3, JavaScript, React</li>
          <li><strong>Design:</strong> Figma, Adobe XD, Photoshop</li>
          <li><strong>Back-end:</strong> Node.js, Express, MongoDB</li>
          <li><strong>Autres:</strong> Git, Responsive Design, SEO de base</li>
        </ul>
      </ContentSection>
      
      <ContentSection title="Mon Parcours" icon="🎓">
        <p>Diplômé(e) en développement web, j'ai complété ma formation par plusieurs projets personnels qui m'ont permis d'approfondir mes connaissances. J'ai également travaillé sur des projets freelance qui m'ont donné l'occasion de mettre en pratique mes compétences dans des contextes variés.</p>
      </ContentSection>
      
      <ContentSection title="Mes Centres d'Intérêt" icon="🎨">
        <p>En dehors du code, je m'intéresse à l'art vintage, la musique des années 70, et la photographie. Ces passions nourrissent ma créativité et influencent mon approche du design web.</p>
      </ContentSection>
    </div>
  );
}

export default APropos;