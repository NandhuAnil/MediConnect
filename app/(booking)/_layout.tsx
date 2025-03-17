import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function BookingLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#007BFF" },
          headerTintColor: "#FFF",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: true }} />
        <Stack.Screen name="bookAppointement" options={{ headerShown: true }} />
      </Stack>
      <StatusBar style="light" />
    </>
  );
}
