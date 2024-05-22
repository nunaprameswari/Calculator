import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={styles.Background}>
      <StatusBar style={styles.Background} />

      <View style={styles.Simbol}>
        <View style={styles.PnAngka}>
          <Text style={styles.SAngka}>C</Text>
        </View>
        <View style={styles.PnAngka}>
          <Text style={styles.SAngka}>%</Text>
        </View>
        <View style={styles.PnAngka}>
          <Text style={styles.SAngka}>⌫</Text>
        </View>
        <View style={styles.PnAngka}>
          <Text style={styles.SAngka}>÷</Text>
        </View>
      </View>
      <View style={styles.Simbol}>
        <View style={styles.PnAngka}>
          <Text style={styles.Angka}>7</Text>
        </View>
        <View style={styles.PnAngka}>
          <Text style={styles.Angka}>8</Text>
        </View>
        <View style={styles.PnAngka}>
          <Text style={styles.Angka}>9</Text>
        </View>
        <View style={styles.PnAngka}>
          <Text style={styles.SAngka}>x</Text>
        </View>
      </View>
      <View style={styles.Simbol}>
        <View style={styles.PnAngka}>
          <Text style={styles.Angka}>4</Text>
        </View>
        <View style={styles.PnAngka}>
          <Text style={styles.Angka}>5</Text>
        </View>
        <View style={styles.PnAngka}>
          <Text style={styles.Angka}>6</Text>
        </View>
        <View style={styles.PnAngka}>
          <Text style={styles.SAngka}>-</Text>
        </View>
      </View>
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
        <View style={styles.PnAngka}>
          <Text style={styles.SAngka}>+</Text>
        </View>
      </View>
      <View style={styles.Simbol}>
        <View style={styles.PnAngka}>
          <Text style={styles.Angka}>00</Text>
        </View>
        <View style={styles.PnAngka}>
          <Text style={styles.Angka}>0</Text>
        </View>
        <View style={styles.PnAngka}>
          <Text style={styles.Angka}>,</Text>
        </View>
        <View style={styles.PnAngka}>
          <Text style={styles.SAngka}>=</Text>
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
    fontSize: 28,
    padding: 10,
  },
  SAngka: {
    color: '#15fff3',
    fontSize: 28,
  },
});
