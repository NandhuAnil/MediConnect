import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function AuthLayout() {
  return (
    <>
      <Stack
      initialRouteName="index"
        screenOptions={{
          headerStyle: { backgroundColor: "#007BFF" },
          headerTintColor: "#FFF",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: true }} />
        <Stack.Screen name="signup" options={{ headerShown: true }} />
      </Stack>
      <StatusBar style="light" />
    </>
  );
}
