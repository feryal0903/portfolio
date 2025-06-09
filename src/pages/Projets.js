import React from 'react';
import { ProjectCard } from '../components/ContentBox';
import infrapdf from '../assets/infra.pdf';
import dauphineopdf from '../assets/dauphineo.pdf';
import ihmpdf from '../assets/IHM.pdf';
import rstudiopdf from '../assets/rstudio.pdf';
import classificationzip from '../assets/classification.zip';
import sqlzip from '../assets/Sql.zip';


function Projets() {
  const projetsList = [
    {
        title: "Infrastructure réseau virtualisée et sécurisée – SAÉ 4.Deploi.01 (2024-2025)",
        description: "Nous avons conçu et mis en place une infrastructure réseau virtualisée intégrant de nombreux services. L’environnement repose sur la segmentation en VLAN, l’isolation des services, la sécurisation des accès et la supervision active du réseau. Nous avons intégré et configuré des services tels que LDAP, Kerberos, NFS, CAS, IPAM (NetBox), ainsi qu’un système de supervision (Zabbix) et de journalisation centralisée. Les services ont été déployés sur des machines virtuelles Debian à l’aide de scripts d’automatisation (bash). Pour la sécurité : authentification par clé SSH, filtrage réseau strict et application des mises à jour. Nous avons produit de la documentation et des tests.",
       
        tags: ["Virtualisation", "LDAP", "IPAM", "Journalisation", "Travail en équipe", "Proxmox"],
        downloadLink: infrapdf,
        downloadText: "Télécharger le rapport"
      },      
    {
        title: "Application web de valorisation du patrimoine culturel (2024-2025)",
        description: "Nous avons conçu et développé une application web visant à mettre en valeur les sites patrimoniaux remarquables situés en Isère. L’application offre des fonctionnalités clés : fiches détaillées sur les sites (description, localisation, accessibilité), système de recommandations personnalisées basé sur un questionnaire utilisateur, et module de réservation de guides locaux. Elle s’appuie sur une architecture client-serveur : un frontend en React, un backend en Laravel, et une base de données PostgreSQL. Le déploiement a été automatisé via des scripts shell, avec une gestion de projet et de version basée sur GitLab. ",
      
        tags: ["React", "Laravel", "PostgreSQL", "Shell", "Déploiement", "GitLab", "Client-Serveur"],
        downloadLink: dauphineopdf,
        downloadText: "Télécharger le rapport"
      },
      
    {
        title: "Application de gestion d’événements sportifs – Vollevent (2024)",
        description: "Vollevent est une application de bureau dédiée à la gestion de tournois de volley-ball, développée en trois semaines par une équipe de six personnes. L’application, construite avec Java et JavaFX selon une architecture MVC, permet une gestion des tournois, des équipes et des résultats. Nous avons conçu une interface utilisateur à partir de personas et de maquettes, en appliquant des principes ergonomiques (bastien et scapin).",
        
        tags: ["Java", "JavaFX", "Architecture MVC", "Gestion de projet"],
        downloadLink: ihmpdf,
        downloadText: "Télécharger le rapport IHM"
      },      
    {
        title: "Analyse de données nutritionnelles et visualisation avec R (2024)",
        description: "Ce projet consistait à modéliser et implémenter une base de données dans PostgreSQL, à effectuer des tests de conformité, puis à analyser, filtrer et nettoyer des données nutritionnelles brutes. Après traitement, nous avons utilisé R pour visualiser et analyser les données, à l’aide de graphiques et de statistiques. Enfin, nous avons rédigé un rapport en anglais présentant les résultats de notre analyse.",
        tags: ["PostgreSQL", "R", "Analyse de données", "Visualisation", "Anglais"], 
        downloadLink: rstudiopdf,
        downloadText: "Télécharger le compte rendu"
    },
    {
        title: "Implémentation d’un besoin client et comparaison d’approches algorithmiques (2023-2024)",
        description: "Ce projet, réalisé en binôme, portait sur la classification automatique d’articles de presse en cinq catégories (environnement-sciences, culture, économie, politique, sport). Dans une première partie, nous avons construit manuellement des lexiques à partir d’exemples d’articles, puis développé un programme en Java qui attribuait une catégorie à chaque article en fonction des scores calculés. Dans la seconde partie, nous avons automatisé la construction des lexiques grâce à une méthode d’apprentissage automatique basée sur l’analyse de fréquences et de spécificité des mots dans un fichier d’entraînement.",
        tags: ["Java", "Traitement de texte", "Classification"],
        downloadLink: classificationzip,
        downloadText: "Télécharger le projet"
    },      
    {
        title: "Création d’une base de données (2023-2024)",
        description: "Ce projet comporte plusieurs étapes visant à modéliser une base de données représentant le naufrage du Titanic, à justifier cette modélisation, à l’implémenter sous PostgreSQL, à réaliser des tests de conformité et à effectuer des requêtes d’analyse en binôme ou en groupe de trois. Elle m’a permis d’apprendre à concevoir un schéma entité-association (EA) à partir de données brutes, à le traduire en un schéma relationnel cohérent, à l’implémenter dans un système de gestion de base de données (SGBD) comme PostgreSQL, à écrire des requêtes SQL pour interroger la base et à vérifier l’intégrité des données via des tests.",
        tags: ["PostgreSQL", "SQL", "Modélisation", "Données", "Travail en groupe"],
        downloadLink: sqlzip,
        downloadText: "Télécharger les fichiers SQL"
    }, 
    {
        title: "Installation d’un poste de développement (2023-2024)",
        description: "Cette tâche implique l’installation de Debian 12 sur une machine virtuelle, suivie de l’installation de plusieurs logiciels. Voici ce que j’ai appris : l'installation de Debian et de logiciels (Apache, PHP, Postgresql...), ce qui m’a permis de me familiariser avec des outils de gestion de paquets comme apt, snap et flatpak. La vérification de l’intégrité des fichiers avec SHA-512 checksums. La configuration de l’environnement utilisateur (login, langue, localisation...). Le principe des privilèges et l'utilisation de sudo.",
        tags: ["Debian", "Shell", "Apt, Snap et Flatpak", "KDE/Plasma"]
    },
    {
        title: "Analyse des besoins et découverte de l’environnement économique et écologique (2023-2024)",
        description: "Nous avons commencé par une analyse des besoins en recueillant des informations sur l’entreprise Hardis Group, avec un focus sur sa démarche RSE. À partir de ces données, nous avons conçu une maquette de site web, que nous avons ensuite réalisée en HTML/CSS. Cette expérience, menée en groupe de quatre, nous a appris à travailler en équipe en répartissant les tâches selon nos compétences. Nous avons aussi développé nos compétences en communication, gestion de projet et développement web.",
        tags: ["HTML", "CSS", "Travail en équipe"],
        downloadLink: "portfolio/assets/C2-Hardis_group_site/text.html",
        downloadText: "Voir le site"
    },

    
         
    
        
      
  ];

  return (
    <div className="text-content">
      <h1>Mes Projets</h1>
      
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
            downloadLink={projet.downloadLink}
            downloadText={projet.downloadText}
          />
        ))}
      </div>
    </div>
  );
}

export default Projets;