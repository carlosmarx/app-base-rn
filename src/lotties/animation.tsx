import { View, Text, StyleSheet } from 'react-native';

import LottieView from 'lottie-react-native';

import loadAnimation from '../assets/animation.json';

export default function Animation() {
  return (
    <View style={styles.container}>
      <LottieView
        source={loadAnimation}
        autoPlay
        loop
        resizeMode="contain"
        autoSize
        style={styles.animation}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    animation: {
        backgroundColor: 'transparent',
        width: '100%',
        height: 150,
        marginRight: 60
    }
});