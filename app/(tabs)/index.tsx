import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome!</Text>
      <Button title='Logout' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  welcome: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HomeScreen;
