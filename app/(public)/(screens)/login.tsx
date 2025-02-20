import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useUserStore } from "@/store/userStore";
import { useRouter } from "expo-router";
import { useQuery, useMutation } from "@tanstack/react-query";
import * as SecureStore from "expo-secure-store";

// Stockage sécurisé
const saveSecureItem = async (key: string, value: string) => {
  try {
    await SecureStore.setItemAsync(key, value, {
      keychainAccessible: SecureStore.WHEN_UNLOCKED,
    });
  } catch (error) {
    console.error("Erreur de stockage sécurisé:", error);
  }
};

const LoginScreen = () => {
  const { setIsAuthenticated, setUser }: any = useUserStore();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const mutation = useMutation({
    mutationFn: async (credentials: { email: string; password: string }) => {
      const username = email;

      console.log("username", username);
      console.log("password", password);

      return fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        credentials: "include",
      }).then((res) => res.json());
    },
    onSuccess: (data) => {
      setIsAuthenticated(true);
      console.log("data", data);
      setUser(data);
      saveSecureItem("user_id", JSON.stringify(data));
      router.push("/");
    },
    onError: (error) => {
      console.log("error", error);
    },
  });

  const handleSubmit = () => {
    mutation.mutate({ email, password });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          borderWidth: 1,
          borderColor: "red",
          padding: 20,
          borderRadius: 10,
          width: "80%",
        }}
      >
        <TextInput
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <Button title="Login" onPress={handleSubmit} />
      </View>
    </View>
  );
};

export default LoginScreen;
