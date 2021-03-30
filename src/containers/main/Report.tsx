import React from 'react';
import styled from '@emotion/native';
import { isLoggedInVar } from '../../common/apollo';

const ReportContainer = () => {
  return (
    <Container>
      <Button onPress={() => isLoggedInVar(false)}>
        <Text>Logout</Text>
      </Button>
    </Container>
  );
};

export default ReportContainer;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;

const Button = styled.TouchableOpacity``;
