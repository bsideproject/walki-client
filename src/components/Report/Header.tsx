import React from 'react';
import styled from '@emotion/native';

import Setting from '../../assets/icons/tab/setting.svg';

export const Header = () => {
  return (
    <Container>
      <Left />
      <Center>2021년 2월 리포트</Center>
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

const Left = styled.View`
  width: 48px;
  height: 48px;
`;

const Center = styled.Text`
  flex: 2;
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;

  color: ${(props) => props.theme.color.gray1};
`;

const Right = styled.View`
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: flex-end;
`;
