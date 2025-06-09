import React from 'react';
import Decoration from '../components/Decoration';
import '../index.css';
import CV_PDF from '../assets/CV_alternance_benkheira.pdf'; // Importation du PDF

function CV() {
  return (
    <div className="cv-container">
      <Decoration />
      <div className="cv-content">
        <header>
          <h1>Lilya Benkheira</h1>
          <h2>Étudiante en BUT2 Informatique – Déploiement d'applications communicantes et sécurisées</h2>
          <a href={CV_PDF} download className="download-button">
            <i className="fas fa-download"></i> Télécharger le CV
          </a>
        </header>

        <section className="cv-section contact">
          <div className="contact-item"><i className="fas fa-phone"></i><span>Numero : 07 66 52 18 20</span></div>
          <div className="contact-item"><i className="fas fa-envelope"></i><span>Mail : feryal0903@gmail.com</span></div>
          <div className="contact-item"><i className="fas fa-map-marker-alt"></i><span>Claix (38)</span></div>
          <div className="contact-item"><i className="fab fa-github"></i><a href="https://github.com/feryal0903" target="_blank" rel="noopener noreferrer">github.com/feryal0903</a></div>
          <div className="contact-item"><i className="fab fa-linkedin"></i><a href="https://fr.linkedin.com/in/lilya-benkheira-882258265" target="_blank" rel="noopener noreferrer">linkedin.com/in/lilya-benkheira</a></div>
          <div className="contact-item"><i className="fas fa-globe"></i><a href="https://feryal0903.github.io/portfolio" target="_blank" rel="noopener noreferrer">Portfolio</a></div>
        </section>

        <section className="cv-section">
          <h3>Compétences</h3>
          <div className="skills-container">
            <div className="skill-category">
              <h4>Langages & Outils</h4>
              <ul>
                <li>Java, Python, C++, PHP</li>
                <li>SQL (PostgreSQL)</li>
                <li>HTML, CSS, JavaScript</li>
                <li>Linux, Shell, Docker, Proxmox</li>
                <li>Ansible, KVM, OpenLDAP, AWX</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Modélisation & Réseau</h4>
              <ul>
                <li>BPMN, UML (Visual Paradigm)</li>
                <li>Journalctl, IPAM (Netbox)</li>
                <li>Filtrage (NetFilter) </li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Langues</h4>
              <ul>
                <li>Français (natif)</li>
                <li>Anglais (C1)</li>
                <li>Espagnol (A2), Arabe (A1)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="cv-section">
          <h3>Formation</h3>
          <div className="timeline-item">
            <div className="timeline-date">2024 – en cours</div>
            <div className="timeline-content">
              <h4>BUT Informatique – IUT2 Grenoble</h4>
              <p>Parcours B : Déploiement d’applications communicantes et sécurisées</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2023</div>
            <div className="timeline-content">
              <h4>Baccalauréat Général – Lycée Vaucanson</h4>
              <p>Spécialités Mathématiques & numérique et sciences informatiques</p>
            </div>
          </div>
        </section>

        <section className="cv-section">
          <h3>Expériences Professionnelles</h3>
          <div className="timeline-item">
            <div className="timeline-date">Avril – Juin 2025</div>
            <div className="timeline-content">
              <h4>DevOps – Automatisation d'infrastructure</h4>
              <p>Utilisation d’Ansible, déploiements avec AWX, CI/CD sur GitLab, documentation et fiabilité des outils internes.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">Août 2024</div>
            <div className="timeline-content">
              <h4>Employée polyvalente – Piscine de Fontaine</h4>
              <p>Travail en équipe, respect des normes de sécurité, autonomie.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">Août 2023</div>
            <div className="timeline-content">
              <h4>Hôtesse de caisse – Leclerc</h4>
              <p>Gestion de la relation client et des encaissements, gestion du stress.</p>
            </div>
          </div>
        </section>

        <section className="cv-section">
          <h3>Projets Professionnalisants (détail dans Projets)</h3>
          <div className="project-item">
            <h4>Infrastructure Réseau Sécurisée</h4>
            <p>Gestion de services en VM : LDAP, journalisation, IPAM. Scripts Bash et documentation.</p>
          </div>
          <div className="project-item">
            <h4>Déploiement d’une application web</h4>
            <p>Création d’une application client-serveur avec base de données SQL.</p>
          </div>
          <div className="project-item">
            <h4>Analyse de données nutritionnelles</h4>
            <p>Nettoyage, visualisation avec R, et rédaction d’un rapport en anglais.</p>
          </div>
          <div className="project-item">
            <h4>Application JavaFX – Gestion d’événements</h4>
            <p>Architecture MVC, conception d’interface, rédaction du cadrage de projet.</p>
          </div>
        </section>
        <section className="cv-section">
        <h3>Savoir-être</h3>
        <div className="savoir-etre">
            <div className="skill-item"><i className="fas fa-tasks"></i><span>Rigueur</span></div>
            <div className="skill-item"><i className="fas fa-bolt"></i><span>Dynamisme</span></div>
            <div className="skill-item"><i className="fas fa-users"></i><span>Travail en équipe</span></div>
            <div className="skill-item"><i className="fas fa-random"></i><span>Flexibilité</span></div>
            <div className="skill-item"><i className="fas fa-lightbulb"></i><span>Créativité</span></div>
        </div>
        </section>

        <section className="cv-section">
          <h3>Centres d’intérêt</h3>
          <div className="interests-container">
            <div className="interest-item"><i className="fas fa-book"></i><span>Lecture</span></div>
            <div className="interest-item"><i className="fas fa-dumbbell"></i><span>Escalade</span></div>
            <div className="interest-item"><i className="fas fa-pencil-alt"></i><span>Dessin</span></div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CV;
