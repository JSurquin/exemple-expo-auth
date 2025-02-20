// Import des dépendances nécessaires
import { Redirect, Tabs, useRootNavigationState, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Platform, PlatformColor } from "react-native";

// Import des composants personnalisés
import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useUserStore } from "@/store/userStore";
import * as SecureStore from "expo-secure-store";

// Fonction utilitaire pour récupérer un élément du stockage sécurisé
const getSecureItem = async (key: string) => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.error("Erreur de lecture sécurisée:", error);
    return null;
  }
};

export default function TabLayout() {
  // Détection de la plateforme web
  const web = Platform.OS === "web";
  const router = useRouter();
  const colorScheme = useColorScheme();

  // Récupération des états d'authentification depuis le store
  const { isAuthenticated, setIsAuthenticated }: any = useUserStore();
  const [isReady, setIsReady] = useState(false);

  // Effet pour vérifier l'authentification au chargement
  useEffect(() => {
    async function getUserInSecureStore() {
      let user_id = null;
      // Récupération de l'ID utilisateur selon la plateforme
      if (web) {
        user_id = localStorage.getItem("user_id");
      }
      if (!web) {
        user_id = await getSecureItem("user_id");
      }
      console.log("user_id", user_id);
      if (user_id) {
        setIsAuthenticated(true);
        return <Redirect href="/" />;
      } else {
        setIsReady(true);
      }
    }
    getUserInSecureStore();
  }, []);

  // Redirection vers login si non authentifié
  if (!isAuthenticated && isReady) {
    return <Redirect href="/login" />;
  }

  // je dois recuperer l'état authentifié, si je ne suis pas authentifié, je ne peux pas acceder aux pages privées
  // donc je dois rediriger vers la page de login
  // si je suis authentifié (appel api et donc attente de retour), je suis poussé vers la page d'accueil
  // je dois stocker l'état authentifié dans le storage
  // je dois stocker l'état authentifié dans le state pour pouvoir naviguer vers les pages

  // on va utiliser "zustand" pour stocker l'état authentifié
  // on va utiliser "react-query" pour faire les appels api
  // on va utiliser "expo-router" pour la navigation
  // on va utiliser "expo-secure-store" pour stocker l'état authentifié dans le storage

  // Rendu des tabs si authentifié
  if (isAuthenticated) {
    return (
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          // Configuration spécifique selon la plateforme
          tabBarStyle: Platform.select({
            ios: {
              // Utilisation d'un fond transparent sur iOS pour l'effet de flou
              position: "absolute",
            },
            default: {},
          }),
        }}
      >
        {/* Tab Home */}
        <Tabs.Screen
          name="index"
          options={{
            headerShown: false,
            title: "Home",
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="house.fill" color={color} />
            ),
          }}
        />
        {/* Tab Explore */}
        <Tabs.Screen
          name="explore"
          options={{
            headerShown: false,
            title: "Explore",
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="paperplane.fill" color={color} />
            ),
          }}
        />
        {/* Tab Tinder */}
        <Tabs.Screen
          name="tinder"
          options={{
            headerShown: false,
            title: "Tinder",
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="heart.fill" color={color} />
            ),
          }}
        />
        {/* Tab Hello */}
        <Tabs.Screen
          name="hello"
          options={{
            headerShown: false,
            title: "Hello",
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="heart.fill" color={color} />
            ),
          }}
        />
      </Tabs>
    );
  }
}
