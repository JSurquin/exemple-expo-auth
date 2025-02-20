# Application Mobile de Démonstration 📱

Ce projet est une application mobile développée avec [Expo](https://expo.dev) pour vous aider à comprendre les concepts fondamentaux du développement d'applications mobiles.

## 🎯 Objectif Pédagogique

Cette application sert de démonstration pour illustrer :

- La création d'une interface utilisateur mobile
- La gestion de l'authentification (connexion/inscription)
- L'utilisation d'une navigation par onglets
- La récupération et l'affichage de données depuis une API
- La gestion d'état global avec un store

## 🛠 Technologies Utilisées

- **React Native** : Framework pour créer des applications mobiles
- **Expo** : Plateforme simplifiant le développement React Native
- **TypeScript** : Langage de programmation typé basé sur JavaScript
- **React Query** : Bibliothèque pour la gestion des requêtes API
- **Zustand** : Gestionnaire d'état global simple et efficace

## 🚀 Pour Commencer

1. Installez les dépendances :

   ```bash
   npm install
   ```

2. Lancez l'application :
   ```bash
   npx expo start
   ```

## 📱 Fonctionnalités

- **Authentification** : Système de connexion et d'inscription
- **Profil Utilisateur** : Affichage et gestion des informations personnelles
- **Navigation** : Système de navigation entre les différentes pages
- **Intégration API** : Exemple d'utilisation d'une API externe

## 💡 Structure du Projet

```
app/
├── (private)/       # Pages accessibles après connexion
│   └── (tabs)/     # Navigation par onglets
├── (public)/       # Pages publiques
│   └── (screens)/  # Écrans de connexion/inscription
└── _layout.tsx     # Configuration de la navigation
```

## 📚 Ressources pour Apprendre

- [Documentation Expo](https://docs.expo.dev/)
- [Documentation React Native](https://reactnative.dev/)
- [Documentation TypeScript](https://www.typescriptlang.org/docs/)

## 🤝 Contribution

N'hésitez pas à explorer le code, faire des modifications et expérimenter ! C'est en pratiquant que l'on apprend le mieux.

## ❓ Besoin d'aide ?

Si vous avez des questions ou rencontrez des difficultés, n'hésitez pas à :

- Consulter la documentation des technologies utilisées
- Demander de l'aide à votre enseignant
- Explorer le code source pour mieux comprendre son fonctionnement

Bon apprentissage ! 🎓
