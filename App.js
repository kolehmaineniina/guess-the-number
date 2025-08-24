import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [guess, setGuess] = useState('');
  const [text, setText] = useState('Guess a number between 1 and 100');
  const [count, setCount] = useState(0);
  const [won, setWon] = useState(false);

  const [numberToGuess, setNumberToGuess] = useState(Math.floor(Math.random() * 100) + 1);
  
  const submitGuess = () => {
    if (won) {
      return;
    }
    
    const n = parseInt(guess);

    if (isNaN(n) || n < 1 || n > 100) {
      setText('Please enter a valid number between 1 and 100.');
      return;
    }
    setCount(count + 1);
    if (n === numberToGuess) {
      setText(`Congratulations! You guessed the number in ${count} tries`);
      setWon(true);
    } else if (n < numberToGuess) {
      setText(`Your guess ${guess} is too low.`);
    } else {
      setText(`Your guess ${guess} is too high.`);
    }
  };

  const resetGame = () => {
    setGuess('');
    setText('Guess a number between 1 and 100');
    setCount(0);
    setWon(false);
    setNumberToGuess(Math.floor(Math.random() * 100) + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guess the number!</Text>
      <Text>{text}</Text>
      <TextInput 
        placeholder="Enter your guess"
        keyboardType="numeric"
        value={guess}
        onChangeText={(guess) => setGuess(guess)}
        style={styles.input}
      />
      <View style={styles.buttonContainer}>
        <Button title="Make a guess"
          onPress={submitGuess}
          disabled={!guess.trim()}
        />
        <Button title="Play again" onPress={resetGame} />
      </View>
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 12,
    paddingLeft: 8,
    width: '50%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    justifyContent: 'space-evenly',
    height: 100,
  },
});
