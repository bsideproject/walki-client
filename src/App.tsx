import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { ApolloProvider, useReactiveVar } from '@apollo/client';

import { client, isLoggedInVar } from './common/apollo';

import { AuthStack } from './navigators/AuthStack';
import { MainStack } from './navigators/MainStack';

const App = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        {isLoggedIn ? <MainStack /> : <AuthStack />}
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
