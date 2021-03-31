import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GuideScreen from '../screens/auth/Guide';
import LoginScreen from '../screens/auth/Login';
import CoachScreen from '../screens/auth/Coach';

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Guide" component={GuideScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Coach" component={CoachScreen} />
    </Stack.Navigator>
  );
};
