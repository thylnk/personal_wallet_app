import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';
import AppNavigation from '~navigation/AppNavigation';
import useFonts from '~shared/hook/useFonts';

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
      <AppNavigation />
    </NavigationContainer >
  );
}
