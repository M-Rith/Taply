// app/signup.tsx
import { View, TextInput, Button } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { useAuth } from "../context/auth";

export default function Signup() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={{ padding: 20, flex: 1, justifyContent: "center" }}>
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
      <Button
        title="Signup"
        onPress={() => {
          login(email);
          router.replace("/(protected)/home");
        }}
      />
    </View>
  );
}
