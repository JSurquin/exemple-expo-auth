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

## Liens utiles :

[Formation React Native et Expo - Slidev](https://react-native.andromed.fr/stockage-local)
[Getting started | React Navigation](https://reactnavigation.org/docs/getting-started)
[Introduction to Expo Router - Expo Documentation](https://docs.expo.dev/router/introduction/)
[Building Your Application: Routing | Next.js](https://nextjs.org/docs/pages/building-your-application/routing)
[Navigating | React Router](https://reactrouter.com/start/framework/navigating)
[Exploring React Native Navigation with Expo: A Complete Guide - DEV Community](https://dev.to/vrinch/exploring-react-native-navigation-with-expo-a-complete-guide-4o91)
[pmndrs/zustand: 🐻 Bear necessities for state management in React](https://github.com/pmndrs/zustand)
[Installation | TanStack Query React Docs](https://tanstack.com/query/latest/docs/framework/react/installation)
[Using the Fetch API - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
[Context – React](https://legacy.reactjs.org/docs/context.html)
[mutation body react query - Google Search](https://www.google.com/search?q=mutation+body+react+query&rlz=1C5CHFA_enFR1027FR1027&ie=UTF-8)
[Expo/React Native Mobile Development Overview - Claude](https://claude.ai/chat/83d1c5b3-e186-4862-9ffe-d0f8656d8a41)
[SecureStore - Expo Documentation](https://docs.expo.dev/versions/latest/sdk/securestore/)
[Auth - DummyJSON - Free Fake REST API for Placeholder JSON Data](https://dummyjson.com/docs/auth)
[JSurquin/expo-router-auth-zustand-expo-secure-data-use-query-fetch-et-mutation-: exemple pour les eleves](https://github.com/JSurquin/expo-router-auth-zustand-expo-secure-data-use-query-fetch-et-mutation-)
[expo-router-auth-zustand-expo-secure-data-us-jsurquins-projects.vercel.app](https://expo-router-auth-zustand-expo-secure-data-us-jsurquins-projects.vercel.app/login)

## 🤝 Contribution

N'hésitez pas à explorer le code, faire des modifications et expérimenter ! C'est en pratiquant que l'on apprend le mieux.

## ❓ Besoin d'aide ?

Si vous avez des questions ou rencontrez des difficultés, n'hésitez pas à :

- Consulter la documentation des technologies utilisées
- Demander de l'aide à votre enseignant
- Explorer le code source pour mieux comprendre son fonctionnement

Bon apprentissage ! 🎓
