import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { ApolloProvider, useReactiveVar } from '@apollo/client';

import { client, isLoggedInVar } from './common/apollo';

import LoginScreen from './screens/auth/login';
import HomeScreen from './screens/main/home';

const App = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        {isLoggedIn ? <HomeScreen /> : <LoginScreen />}
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
