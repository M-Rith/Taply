// app/login.tsx
import { useRouter } from "expo-router";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useAuth } from "../context/auth";
import { ThemedText } from "@/components/ThemedText";

export default function Login() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View
      className="bg-background"
      style={{
        padding: 20,
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Text className="color-green-100 text-4xl font-bold">Hello</Text>
      <TextInput
        placeholder="Email"
        onChangeText={setEmail}
        style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
      />
      <TouchableOpacity className="bg-primary">
        <Text style={{ color: "#fff", textAlign: "center" }}>Login</Text>
      </TouchableOpacity>

      {/* <Button
        title="Login"
        onPress={() => {
          login(email);
          router.replace("/(protected)/home");
        }}
      /> */}
      <Button title="Go to Signup" onPress={() => router.push("/signup")} />
    </View>
  );
}
