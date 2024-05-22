import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={styles.Background}>
      <StatusBar style={styles.Background} />

      <View style={styles.Simbol}>
        <View style={styles.PnAngka}>
          <Text style={styles.Angka}>1</Text>
        </View>
        <View style={styles.PnAngka}>
          <Text style={styles.Angka}>2</Text>
        </View>
        <View style={styles.PnAngka}>
          <Text style={styles.Angka}>3</Text>
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  Background: {
    backgroundColor: '#000',
    flex: 1,
  },
  Simbol: {
    flexDirection: 'row',
  },
  PnAngka: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Angka: {
    color: 'white',
    fontSize: 25,
    padding: 10,
  },
});
