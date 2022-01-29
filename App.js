import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import * as Speech from 'expo-speech';
import defineLazyObjectProperty from 'react-native/Libraries/Utilities/defineLazyObjectProperty';

const App = () => {
    const [text, setText] = React.useState("Ouvindo com Expo Speech");

    const speak = () => {
    Speech.speak(text, {
      language: "pt-br"
      //language: "en-us"
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Clique para ouvir" onPress={speak} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  Texts: {
    marginTop: 10,
    color: 'black',
    padding:10,
  }
});


export default App;