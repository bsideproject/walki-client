import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainTabNavi } from './navigators/MainTabNavi';
import { AuthStackNavi } from './navigators/AuthStackNavi';
import { ApolloProvider, useReactiveVar } from '@apollo/client';
import { client, isLoggedInVar } from './common/apollo';
import { Theme, ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';

const App = () => {
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
