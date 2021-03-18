import React from 'react';
import styled from '@emotion/native';

export const Header: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.View`
  width: 100%;
  height: 60px;
  justify-content: center;
`;
