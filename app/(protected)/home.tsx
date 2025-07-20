// app/(protected)/home.tsx
import { View, Text, Button } from "react-native";
import { useAuth } from "../../context/auth";
import { useRouter } from "expo-router";

export default function Home() {
  const { logout } = useAuth();
  const router = useRouter();

  return (
    <View style={{ padding: 20, flex: 1, justifyContent: "center" }}>
      <Text>Welcome to the protected Home Page!</Text>
      <Button
        title="Logout"
        onPress={() => {
          logout();
          router.replace("/login");
        }}
      />
    </View>
  );
}
