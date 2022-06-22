import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import EditMoneyBoxModal from '~components/template/EditMoneyBoxModal';
import MoneyBoxModal from '~components/template/MoneyBoxModal';
import TransactionModal from '~components/template/TransactionModal';
import HomeScreen from '~screens/Home/HomeScreen';
import LoginScreen from '~screens/Login/LoginScreen';
import SignUpScreen from '~screens/Login/SignUpScreen';
import MoneyBoxScreen from '~screens/MoneyBox/MoneyBoxScreen';
import TransactionScreen from '~screens/Transaction/TransactionScreen';
import { Home, MoneyBox, Transaction } from '~shared/constants/icon';
import { colors } from '~shared/styles/colors';

const screenOptions = {
  headerMode: false
}

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();


const MainScreen = ({ navigation }) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={colors.white}
      inactiveColor={colors.lightPurple}
      barStyle={{ backgroundColor: colors.secondaryColor }}
    >
      <Tab.Screen name="Home" component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => <Home focused={focused} />
        }} />
      <Tab.Screen name="Transaction" component={TransactionScreen}
        options={{
          tabBarIcon: ({ focused }) => <Transaction focused={focused} />
        }} />
      <Tab.Screen name="MoneyBox" component={MoneyBoxScreen}
        options={{
          tabBarIcon: ({ focused }) => <MoneyBox focused={focused} />
        }} />
    </Tab.Navigator>
  )
}

export default function AppNavigation() {
  const [isSigned, setIsSigned] = useState(true);
  return (
    <Stack.Navigator
      initialRouteName={isSigned ? "Login" : "MainScreen"}
      screenOptions={{
        headerShown: false,
      }}
    >
      {
        isSigned ? (
          <>
            <Stack.Group>
              <Stack.Screen name="MainScreen" component={MainScreen} />
            </Stack.Group>
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
              <Stack.Screen name="ModalScreen" component={TransactionModal} />
              <Stack.Screen name="AddMoneyBox" component={MoneyBoxModal} />
              <Stack.Screen name="EditMoneyBox" component={EditMoneyBoxModal} />
            </Stack.Group>
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