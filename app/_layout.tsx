// Import des composants et hooks de navigation
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
// Import des hooks et composants Expo
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
// Import pour les animations
import "react-native-reanimated";
// Import de React Query pour la gestion d'état serveur
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Import du hook personnalisé pour le thème
import { useColorScheme } from "@/hooks/useColorScheme";

// Empêche l'écran de chargement de se cacher automatiquement avant le chargement des assets
SplashScreen.preventAutoHideAsync();

// Création du client React Query
const client = new QueryClient();

// Composant racine de l'application
export default function RootLayout() {
  // Récupération du thème actuel (clair/sombre)
  const colorScheme = useColorScheme();

  // Chargement de la police personnalisée
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  // Effet pour cacher l'écran de chargement une fois les polices chargées
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  // Si les polices ne sont pas chargées, on ne rend rien
  if (!loaded) {
    return null;
  }

  // Structure principale de l'application
  return (
    // Fournisseur React Query pour la gestion d'état serveur
    <QueryClientProvider client={client}>
      {/* Fournisseur de thème pour la navigation */}
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        {/* Navigation Stack principale */}
        <Stack>
          {/* Route des onglets principaux */}
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          {/* Route pour les pages non trouvées */}
          <Stack.Screen name="+not-found" />
        </Stack>
        {/* Barre de statut adaptative */}
        <StatusBar style="auto" />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
