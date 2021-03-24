import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MainTabs } from './MainTabs';

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="MainTabs" component={MainTabs} />
    </Stack.Navigator>
  );
};
