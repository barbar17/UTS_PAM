import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './src/Screens/HomeScreen';
import PemesananScreen from './src/Screens/PemesananScreen';
import PembatalanScreen from './src/Screens/PembatalanScreen';
import Navigation from './src/Navigation';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <HomeScreen /> */}
      {/* <PemesananScreen /> */}
      {/* <PembatalanScreen /> */}
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dbdbdb',
  },
});
