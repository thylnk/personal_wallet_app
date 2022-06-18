import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import useFonts from '~shared/hook/useFonts';
import SignUpScreen from '~screens/Login/SignUpScreen';
import { colors } from '~shared/styles/colors';
import LoginScreen from '~screens/Login/LoginScreen';
import HomeScreen from '~screens/HomeScreen';

export default function App() {

  const [isReady, SetIsReady] = useState(false);

  const loadFonts = async () => {
    await useFonts();
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => { }}
      />
    );
  }

  return (
    <View style={styles.container}>
      {/* <LoginScreen />
      <SignUpScreen /> */}
      <HomeScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
