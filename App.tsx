import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./src/assets/logo.png')}  />
      <Text style={styles.title}>My base app on React Native!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#5e0c72',
    fontWeight: 'bold',
  },
  logo: {
    width: 200,
    height: 200,
  }
});
