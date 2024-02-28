import React from 'react';
import {SafeAreaView, useColorScheme, StyleSheet} from 'react-native';
import StartScreen from './screens/StartScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#000' : '#fff',
  };

  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <StartScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
