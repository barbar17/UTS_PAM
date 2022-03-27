import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Navigation from './src/Navigation';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" hidden={true} />
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
