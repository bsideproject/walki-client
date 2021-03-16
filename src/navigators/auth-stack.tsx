import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import LoginScreen from '../screens/auth/login';
import CoachScreen from '../screens/auth/coach';

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
      <Stack.Screen name="Coach" component={CoachScreen} />
    </Stack.Navigator>
  );
};
