import { Slot } from 'expo-router'; // Use Slot instead of Stack
import { useColorScheme } from 'react-native';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { AnimatedSplashOverlay } from '@/components/animated-icon';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AnimatedSplashOverlay />
      {/* Slot renders the first child (the (tabs) folder) without an extra header */}
      <Slot /> 
    </ThemeProvider>
  );
}