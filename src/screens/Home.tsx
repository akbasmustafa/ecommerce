import { StatusBar } from 'expo-status-bar';
import { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style='auto' />
    </View>
  );
}

export default memo(HomeScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
