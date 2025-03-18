import AsyncStorage from '@react-native-async-storage/async-storage';
import { router, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        setTimeout(() => {
          if (token) {
            router.replace('/(tabs)'); // Redirect to tabs if token is present
          } else {
            router.replace('/(auth)'); // Redirect to auth if no token
          }
        }, 100); // Small delay to ensure component is mounted
      } catch (error) {
        console.error('Error checking token:', error);
      } finally {
        setIsReady(true);
        SplashScreen.hideAsync();
      }
    };

    checkToken();
  }, []);

  if (!isReady) {
    return null; // Show nothing until token check completes
  }

  return (
    <>
      <Stack>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(booking)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
