// src/app/(tabs)/search/_layout.tsx
import { Stack } from 'expo-router';

export default function SearchLayout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
       <Stack.Screen name="index" options={{ headerTitle: "Search" }} />
    </Stack>
  );
}