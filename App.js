import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavigationStack from '~navigation/stack/StackNavigation';
import HomeScreen from '~screens/Home/HomeScreen';
import LoginScreen from '~screens/Login/LoginScreen';
import SignUpScreen from '~screens/Login/SignUpScreen';
import useFonts from '~shared/hook/useFonts';
import { colors } from '~shared/styles/colors';

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
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer >
  );
}
