import React from 'react';
import styled from '@emotion/native';

import Logo from '../../assets/images/logo.svg';
import Setting from '../../assets/icons/tab/setting.svg';

export const Header = () => {
  return (
    <Container>
      <Left>
        <Logo />
      </Left>
      <Right>
        <Setting />
      </Right>
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  height: 60px;
  padding: 0px 16px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 16px;
`;

const Left = styled.View``;

const Right = styled.View``;
