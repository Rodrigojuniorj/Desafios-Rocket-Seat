import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens/Home';

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold });

  return (
    <>
      <StatusBar style="light" />

      { fontsLoaded ? <Home/> : <Text>Carregando...</Text> }
    </>
  );
}
