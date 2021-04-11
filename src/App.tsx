import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { MainTabNavi } from './navigators/MainTabNavi';
import { AuthStackNavi } from './navigators/AuthStackNavi';
import { ApolloProvider, useReactiveVar } from '@apollo/client';
import { client, isLoggedInVar } from './common/apollo';
import { Theme, ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return (
    <ThemeProvider theme={theme.toki as Theme}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          {isLoggedIn ? <MainTabNavi /> : <AuthStackNavi />}
        </NavigationContainer>
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default App;
