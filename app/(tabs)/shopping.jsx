import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Shopping = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Shopping</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a3c9f1',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003366',
  },
});

export default Shopping;
