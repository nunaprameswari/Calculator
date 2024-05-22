import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={styles.Background}>
      <StatusBar style={styles.Background} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  Background: {
    backgroundColor: '#000',
    flex: 1,
  },
});
