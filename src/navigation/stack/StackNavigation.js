import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import HomeScreen from '~screens/Home/HomeScreen';
import LoginScreen from '~screens/Login/LoginScreen';
import SignUpScreen from '~screens/Login/SignUpScreen';
import MoneyBoxScreen from '~screens/MoneyBox/MoneyBoxScreen';
import TransactionScreen from '~screens/Transaction/ListTransaction';
import { MoneyBox } from '~shared/constants/icon';
import { colors } from '~shared/styles/colors';

const screenOptions = {
  headerMode: false
}

const Stack = createStackNavigator();

export default function NavigationStack() {
  const [isSigned, setIsSigned] = useState(true);
  return (
    <Stack.Navigator
      initialRouteName={isSigned ? "Login" : "Home"}
      screenOptions={{
        headerShown: false,
      }}
    >
      {
        isSigned ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Transaction" component={TransactionScreen} />
            <Stack.Screen name="MoneyBox" component={MoneyBoxScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="SignIn" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
          </>
        )}
    </Stack.Navigator>
  )
}