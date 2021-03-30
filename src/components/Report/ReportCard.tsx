import React from 'react';
import styled from '@emotion/native';

export const ReportCard = () => {
  return (
    <Container>
      <Title>Day 7</Title>
      <StepContainer>
        <StepNumber>10,000</StepNumber>
        <StepString>걸음</StepString>
      </StepContainer>
      <MaxStep>/ 10,000</MaxStep>
    </Container>
  );
};

const Container = styled.View`
  width: 110px;
  height: 116px;
  justify-content: center;
  align-items: center;
  margin: 2px;

  border-radius: 16px;

  background-color: ${(props) => props.theme.color.main};
`;

const Title = styled.Text`
  margin-bottom: 8px;

  font-weight: 600;
  font-size: 16px;

  text-align: center;
  letter-spacing: 0.16px;

  color: ${(props) => props.theme.color.gray6};
`;

const StepContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-bottom: 4px;
`;

const StepNumber = styled.Text`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  text-align: center;
  letter-spacing: 0.16px;

  color: ${(props) => props.theme.color.white};
`;

const StepString = styled.Text`
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  text-align: center;

  color: ${(props) => props.theme.color.white};

  margin-left: 4px;
`;

const MaxStep = styled.Text`
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;

  text-align: center;
  letter-spacing: 0.16px;

  color: ${(props) => props.theme.color.gray5};
`;
