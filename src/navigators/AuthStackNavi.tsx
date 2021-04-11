import React from 'react';
import {
  createStackNavigator,
  StackHeaderLeftButtonProps,
  StackNavigationProp,
} from '@react-navigation/stack';
import { MainTabNavi } from './MainTabNavi';
import LoginScreen from '../screens/auth/Login';
import ConfigScreen from '../screens/auth/Config';
import CoachConfigScreen from '../screens/auth/CoachConfig';
import ChallengeConfigScreen from '../screens/auth/ChallengeConfig';
import AlarmConfigScreen from '../screens/auth/AlarmConfig';
import StartScreen from '../screens/auth/Start';
import ChevronLeft from '../assets/icons/chevron/left.svg';
import { View } from 'react-native';

const Stack = createStackNavigator();

export const AuthStackNavi = () => {
  const CommonHeader = {
    headerLeft: (props: StackHeaderLeftButtonProps) => (
      <View style={{ paddingLeft: 18 }}>
        <ChevronLeft width={24} height={24} onPress={props.onPress} />
      </View>
    ),
  };
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          shadowColor: 'transparent',
          backgroundColor: '#fff',
        },
        headerTintColor: '#fff',
      }}>
      <Stack.Screen name="Onboarding" component={LoginScreen} />
      <Stack.Screen name="Config" component={ConfigScreen} />
      <Stack.Screen
        name="Coach"
        component={CoachConfigScreen}
        options={CommonHeader}
      />
      <Stack.Screen
        name="Challenge"
        component={ChallengeConfigScreen}
        options={CommonHeader}
      />
      <Stack.Screen
        name="Alarm"
        component={AlarmConfigScreen}
        options={CommonHeader}
      />
      <Stack.Screen
        name="Start"
        component={StartScreen}
        options={CommonHeader}
      />
      <Stack.Screen
        name="Home"
        component={MainTabNavi}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export type AuthStackNaviParamList = {
  Onboarding: undefined;
  Config: undefined;
  Coach: undefined;
  Challenge: undefined;
  Alarm: undefined;
  Start: undefined;
  Home: undefined;
};

export type NavigationProp = StackNavigationProp<
  AuthStackNaviParamList,
  'Onboarding'
>;
export interface IAuthProps {
  navigation: NavigationProp;
}

export interface INaviProps {
  goNext?: () => void;
  goBack?: () => void;
}
