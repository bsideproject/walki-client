import React from 'react';
import styled from '@emotion/native';

export const SafeLayout: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;
