// Import des dépendances nécessaires
import { useUserStore } from "@/store/userStore";
import { useQuery } from "@tanstack/react-query";
import { View, Text, StyleSheet } from "react-native";
import React from "react";

// Composant principal du profil utilisateur
const Profil = () => {
  // Récupération des données utilisateur depuis le store global
  const { user }: any = useUserStore();

  console.log("user", user);

  // Requête pour récupérer les données détaillées du profil
  const { data, isLoading, error } = useQuery({
    queryKey: ["profil"],
    queryFn: () =>
      fetch(`https://jsonplaceholder.typicode.com/users/${user.id - 92}`).then(
        (res) => res.json()
      ),
  });

  console.log("data", data);

  return (
    // Container principal
    <View style={styles.container}>
      {/* Titre de la page */}
      <Text style={styles.title}>Profil</Text>

      {/* Container des informations utilisateur */}
      <View style={styles.infoContainer}>
        {/* Ligne d'information: Nom */}
        <View style={styles.infoRow}>
          <Text style={styles.label}>Nom:</Text>
          <Text style={styles.value}>{data?.name}</Text>
        </View>

        {/* Ligne d'information: Nom d'utilisateur */}
        <View style={styles.infoRow}>
          <Text style={styles.label}>Nom d'utilisateur:</Text>
          <Text style={styles.value}>{data?.username}</Text>
        </View>

        {/* Ligne d'information: Email */}
        <View style={styles.infoRow}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{data?.email}</Text>
        </View>

        {/* Ligne d'information: Téléphone */}
        <View style={styles.infoRow}>
          <Text style={styles.label}>Téléphone:</Text>
          <Text style={styles.value}>{data?.phone}</Text>
        </View>

        {/* Ligne d'information: Site web */}
        <View style={styles.infoRow}>
          <Text style={styles.label}>Site web:</Text>
          <Text style={styles.value}>{data?.website}</Text>
        </View>

        {/* Section des informations de l'entreprise */}
        <View style={styles.companySection}>
          <Text style={styles.subtitle}>Entreprise</Text>
          {/* Nom de l'entreprise */}
          <View style={styles.infoRow}>
            <Text style={styles.label}>Nom:</Text>
            <Text style={styles.value}>{data?.company?.name}</Text>
          </View>
          {/* Slogan de l'entreprise */}
          <View style={styles.infoRow}>
            <Text style={styles.label}>Slogan:</Text>
            <Text style={styles.value}>{data?.company?.catchPhrase}</Text>
          </View>
          {/* Secteur d'activité */}
          <View style={styles.infoRow}>
            <Text style={styles.label}>Secteur:</Text>
            <Text style={styles.value}>{data?.company?.bs}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

// Styles pour le composant
const styles = StyleSheet.create({
  // Style du container principal
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  // Style du titre principal
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 30,
    textAlign: "center",
  },
  // Style du container des informations
  infoContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  // Style des lignes d'information
  infoRow: {
    flexDirection: "row",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  // Style des labels
  label: {
    flex: 1,
    fontSize: 16,
    color: "#666",
    fontWeight: "600",
  },
  // Style des valeurs
  value: {
    flex: 2,
    fontSize: 16,
    color: "#333",
  },
  // Style de la section entreprise
  companySection: {
    marginTop: 20,
    paddingTop: 10,
    borderTopWidth: 2,
    borderTopColor: "#eee",
  },
  // Style du sous-titre
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
});

export default Profil;
