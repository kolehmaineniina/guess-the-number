import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Guess the number!</Text>
      <Text>Your guess: {guess}</Text>
      <TextInput 
      placeholder="Enter a number between 1 and 100"
      keyboardType="numeric"
      />
      <Button title="Make a guess" onPress={() => {}} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
