import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Navigation from './src/Navigation';
import LainnyaScreen from './src/Screens/LainnyaScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <Navigation /> */}
      <LainnyaScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dbdbdb',
  },
});
