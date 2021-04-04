import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/main/Home';
import ReportScreen from '../screens/main/Report';
import RankingScreen from '../screens/main/Ranking';

const MainTab = createBottomTabNavigator();

export const MainTabNavi = () => {
  return (
    <MainTab.Navigator
      tabBarOptions={{
        style: {
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          marginTop: -16,
          borderWidth: 0.5,
          borderTopWidth: 0.5,
          borderColor: 'gray',
          borderTopColor: 'gray',
        },
      }}>
      <MainTab.Screen
        name="Home"
        options={{ title: '홈' }}
        component={HomeScreen}
      />
      <MainTab.Screen
        name="Report"
        options={{ title: '리포트' }}
        component={ReportScreen}
      />
      <MainTab.Screen
        name="Ranking"
        options={{ title: '전체랭킹' }}
        component={RankingScreen}
      />
    </MainTab.Navigator>
  );
};
