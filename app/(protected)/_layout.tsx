// app/(protected)/_layout.tsx
import { Redirect, Stack } from "expo-router";
import { useAuth } from "../../context/auth";

export default function ProtectedLayout() {
  const { user } = useAuth();

  if (!user) {
    return <Redirect href="/login" />;
  }

  return <Stack />;
}
