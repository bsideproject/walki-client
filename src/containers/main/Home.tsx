import React from 'react';
import styled from '@emotion/native';
import { SafeLayout } from '../../layouts/SafeLayout';
import { Header } from '../../components/Home/Header';
import { Info } from '../../components/Home/Info';
import { CircularProgress } from '../../components/Home/CircularProgress';
import { Button } from '../../components/Button';

const HomeContainer = () => {
  return (
    <SafeLayout>
      <Header />
      <Body>
        <Info />
        <CircularProgress />
        <TextContainer>
          <Text>조금만 더 힘내시면 목표에 도달할 수 있어요!</Text>
        </TextContainer>
        <ButtonContainer>
          <Button text="오늘은 그만할래요" type="secondary" />
        </ButtonContainer>
      </Body>
    </SafeLayout>
  );
};

export default HomeContainer;

const Body = styled.View`
  flex: 1;
  padding: 0px 16px;
`;

const TextContainer = styled.View`
  align-items: center;
  margin-top: 15px;
  margin-bottom: 20px;
`;

const Text = styled.Text`
  font-size: 16px;

  color: ${(props) => props.theme.color.gray2};
`;

const ButtonContainer = styled.View`
  padding: 0px 36px;
`;
