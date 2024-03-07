import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { FallbackProps } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <View style={styles.container}>
      <Text>Something wrong, please refresh app</Text>
      <Text>Hello</Text>
      <Text>{error.message}</Text>
      <Button title='try Again' onPress={() => resetErrorBoundary()} />
      <StatusBar style='auto' />
    </View>
  );
}

export default ErrorFallback;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
