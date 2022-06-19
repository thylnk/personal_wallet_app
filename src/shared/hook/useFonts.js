import * as Font from 'expo-font';

const useFonts = async () =>
  await Font.loadAsync({
    'Inter-Black': require('assets/fonts/Inter-Black.ttf'),
    'Inter-Bold': require('assets/fonts/Inter-Bold.ttf'),
    'Inter-Thin': require('assets/fonts/Inter-Thin.ttf'),
    'Inter-Regular': require('assets/fonts/Inter-Regular.ttf'),
    'Inter-Medium': require('assets/fonts/Inter-Medium.ttf'),
  });

export default useFonts;