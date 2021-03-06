import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import React, { useState, useEffect, useCallback } from 'react';
import { Provider } from 'react-redux';
import AppNavigation from '~navigation/AppNavigation';
import store from '~redux/store';
import useFonts from '~shared/hook/useFonts';

export default function App() {

  const [isReady, setIsReady] = useState(false);

  const onLayoutRootView = async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  };

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        await useFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
        await SplashScreen.hideAsync();
      }
    }
    prepare();
  }, []);


  if (!isReady) {
    return null;
  }


  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer >
    </Provider>
  );
}
