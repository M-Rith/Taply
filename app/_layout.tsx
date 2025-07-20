import { Stack } from "expo-router";
import "../global.css";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import { useColorScheme } from "@/hooks/useColorScheme";
import { AuthProvider } from "../context/auth";
export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    "Satoshi-Regular": require("../assets/fonts/Satoshi-Regular.otf"),
    "Satoshi-Bold": require("../assets/fonts/Satoshi-Bold.otf"),
    "Satoshi-Light": require("../assets/fonts/Satoshi-Light.otf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <StatusBar style="auto" />
      <AuthProvider>
        <Slot />
      </AuthProvider>
    </ThemeProvider>
  );
}
