/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import SigninScreen from './screens/SigninScreen';
import TestAvoid from './screens/TestAvoid';
import { WHITE } from '../color';

const App = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <SigninScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
});

export default App;
