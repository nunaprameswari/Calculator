/* eslint-disable no-eval */
import {
  Button,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [result, setResult] = useState('0');

  const calculate = ({title}) => {
    if (title == 'C') {
      setResult('');
    } else if (title == '⌫') {
      setResult(result.substring(0, result.length - 1));
    } else if (title == '=') {
      const ans = Number(eval(result)).toFixed(3).toString();
      setResult(ans);
    } else {
      setResult(result + title);
    }
  };
  return (
    <View style={styles.Background}>
      <StatusBar style={styles.Background} />

      <View style={{flex: 1.3, backgroundColor: '#000'}}>
        <Text style={styles.nol}>{result}</Text>
      </View>

      <View style={{flex: 1}}>
        <View style={styles.Simbol}>
          <TouchableOpacity
            style={styles.PnAngka}
            onPress={() => calculate(title)}>
            <Text style={styles.SAngka} title="C">
              C
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.PnAngka}
            onPress={() => calculate(title)}>
            <Text style={styles.SAngka} title="%">
              %
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.PnAngka}
            onPress={() => calculate(title)}>
            <Text style={styles.SAngka} title="⌫">
              ⌫
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.PnAngka}
            onPress={() => calculate(title)}>
            <Text style={styles.SAngka} title="÷">
              ÷
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Simbol}>
          <TouchableOpacity
            style={styles.PnAngka}
            onPress={() => calculate(title)}>
            <Text style={styles.Angka} title="7">
              7
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.PnAngka}>
            <Text style={styles.Angka}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.PnAngka}>
            <Text style={styles.Angka}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.PnAngka}>
            <Text style={styles.SAngka}>x</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Simbol}>
          <TouchableOpacity style={styles.PnAngka}>
            <Text style={styles.Angka}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.PnAngka}>
            <Text style={styles.Angka}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.PnAngka}>
            <Text style={styles.Angka}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.PnAngka}>
            <Text style={styles.SAngka}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Simbol}>
          <TouchableOpacity style={styles.PnAngka}>
            <Text style={styles.Angka}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.PnAngka}>
            <Text style={styles.Angka}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.PnAngka}>
            <Text style={styles.Angka}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.PnAngka}>
            <Text style={styles.SAngka}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Simbol}>
          <TouchableOpacity style={styles.PnAngka}>
            <Text style={styles.Angka}>00</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.PnAngka}>
            <Text style={styles.Angka}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.PnAngka}>
            <Text style={styles.Angka}>,</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.PnAngka}>
            <Text style={styles.SAngka}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  Background: {
    backgroundColor: '#3a3636b0',
    flex: 1,
  },
  Simbol: {
    flexDirection: 'row',
    marginVertical: 10,
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
  nol: {
    fontSize: 40,
    textAlign: 'right',
    paddingRight: 10,
    marginTop: 360,
    paddingBottom: 20,
  },
});
