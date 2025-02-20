import { useState } from "react";
import { useUserStore } from "@/store/userStore";
import { useRouter } from "expo-router";
import { useQuery, useMutation } from "@tanstack/react-query";

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
      localStorage.setItem("user_id", JSON.stringify(data));
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
    <div className="flex justify-center items-center h-screen">
      <div className="border border-red-500 p-5 rounded-lg w-4/5 max-w-md">
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="w-full mb-4 p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="w-full mb-4 p-2 border rounded"
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
