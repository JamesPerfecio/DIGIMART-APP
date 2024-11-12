import React, { useState } from 'react'; // Import useState from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  const [highlighted, setHighlighted] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <TouchableOpacity
          onPress={() => {
            // Handle logo press event
            console.log('Logo pressed!');
          }}
          activeOpacity={0.7}
        >
          <Image
            source={require('../assets/image/logo.png')}
            style={styles.logo}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPressIn={() => setHighlighted(true)}
          onPressOut={() => setHighlighted(false)}
          style={styles.textContainer}
        >
          <Text style={[styles.title, highlighted && styles.highlighted]}>
            <Text style={styles.digi}>Digi</Text>
            <Text style={styles.mart}>Mart</Text>
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.linkContainer}>
        <Link href="/home" style={styles.link}>
          Go to Home
        </Link>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a3c9f1',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 263,
    width: 263,
    marginBottom: 20,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    flexDirection: 'row',
    alignItems: 'center',
  },
  digi: {
    color: '#ffffff',
  },
  mart: {
    color: '#003366',
  },
  highlighted: {
    opacity: 0.7, // Highlight effect
  },
  linkContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  link: {
    fontSize: 20,
    color: '#003366',
    fontWeight: '400',
  },
});
