import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { AnimatedSplashOverlay } from '@/components/animated-icon';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {/* Global overlay for the whole app */}
      <AnimatedSplashOverlay />
      
      <Stack screenOptions={{ headerShown: false }}>
        {/* The (tabs) group is your main entry point */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        
        {/* Any screens outside (tabs) will automatically hide the tab bar */}
        <Stack.Screen 
          name="modal" 
          options={{ presentation: 'modal', headerShown: true }} 
        />
      </Stack>
    </ThemeProvider>
  );
}