import { View, Image, StyleSheet } from 'react-native';

import LottieView from 'lottie-react-native';
import loadAnimation from '../assets/animation.json';


export function Splash() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')}  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  animation: {
      backgroundColor: 'transparent',
      position: 'absolute',
      bottom: -165
  },
  logo: {
    width: 220,
    height: 220,
    alignSelf: 'center',
    marginTop: 100
  }
});