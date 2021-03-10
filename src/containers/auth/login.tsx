import React from 'react';
import styled from '@emotion/native';
import { isLoggedInVar } from '../../common/apollo';

const LoginContainer = () => {
  return (
    <Container>
      <Button onPress={() => isLoggedInVar(true)}>
        <Text>Login</Text>
      </Button>
    </Container>
  );
};

export default LoginContainer;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Button = styled.TouchableOpacity``;

const Text = styled.Text``;
