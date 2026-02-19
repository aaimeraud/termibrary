<div align="center">
<h1>Termi-brary — un gestionnaire de livres en ligne de commande</h1>

<a href="./README.md">Read in English</a>
<span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
<a href="mailto:danielfortune.pro@gmail.com">Contact</a>
<span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
<a href="https://github.com/aaimeraud/termibrary/issues/new">Issues</a>
<br />

</div>

Une application en ligne de commande pour enregistrer et suivre ta bibliothèque personnelle, avec un stockage persistant via SQLite.

## Contexte du projet

Après mon **premier cours de JavaScript** (couvrant la POO et les bases du JS), j'ai créé ce projet pour pratiquer la **programmation orientée objet** dans un contexte concret.

Le premier défi que j'ai rencontré était la persistance des données, la bibliothèque ne se sauvegardait pas entre les sessions. J'ai résolu ce problème en intégrant **SQLite**, qui est intégré nativement dans [**Bun**](https://www.bun.sh), sans dépendances supplémentaires.

## Fonctionnalités

- Ajouter des livres à votre bibliothèque (titre, auteur, statut de lecture)
- Afficher tous les livres avec leur statut de lecture
- Stockage persistant via SQLite — les données sont conservées entre les sessions
- Construit avec les principes de la POO (classes `Book`, `Library`, `User`)

## Prérequis

- [**Bun**](https://www.bun.sh) (v1.3.\* et supérieur)

> Node.js n'est pas requis — Bun est un runtime autonome.

## Démarrage

```bash
git clone https://github.com/aaimeraud/termibrary.git

cd termibrary

bun run start
```

## Structure du projet

```
src/
├── main.js              # Point d'entrée
├── classes/
│   ├── Book.js          # Constructeur de livre
│   ├── Library.js       # Méthodes de la bibliothèque (ajout, affichage)
│   └── User.js          # Classe utilisateur
├── database/
│   ├── database.js      # Connexion SQLite
│   └── operations.js    # Requêtes DB (getAllBooks, addBook)
└── utils/
    └── input.js         # Utilitaire de saisie terminal
```
