import React from 'react';
import styled from '@emotion/native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { theme } from '../../styles/theme';

export const Graph = () => {
  return (
    <Container>
      <Title>이번달도 토키와 함께 목표를 이뤄봐요!</Title>
      <GraphContainer>
        <Info>
          <InfoTitle>걸음 수</InfoTitle>
          <StepContent>90,000 0 300,000 걸음</StepContent>

          <InfoTitle>달성률</InfoTitle>
          <CompletedContent>70 / 100 %</CompletedContent>

          <InfoTitle>달성일 수</InfoTitle>
          <DayContent>15 / 20 일</DayContent>
        </Info>
        <GraphBody>
          <AnimatedCircularProgress
            size={123}
            width={14}
            tintColor={theme.toki.color.main}
            backgroundColor={`${theme.toki.color.character.sub}60`}
            rotation={0}
            lineCap="round"
            fill={70}
            duration={2000}>
            {() => (
              <AnimatedCircularProgress
                size={86}
                width={14}
                tintColor={theme.toki.color.chart.main}
                backgroundColor={`${theme.toki.color.chart.sub}60`}
                rotation={0}
                lineCap="round"
                fill={70}
                duration={2000}>
                {() => (
                  <AnimatedCircularProgress
                    size={50}
                    width={14}
                    tintColor={theme.booki.color.main}
                    backgroundColor={`${theme.booki.color.character.sub}60`}
                    rotation={0}
                    lineCap="round"
                    fill={70}
                    duration={2000}
                  />
                )}
              </AnimatedCircularProgress>
            )}
          </AnimatedCircularProgress>
        </GraphBody>
      </GraphContainer>
    </Container>
  );
};

const Container = styled.View`
  padding: 0px 16px;
  margin-bottom: 26px;
`;

const Title = styled.Text`
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;

  color: ${(props) => props.theme.color.gray2};

  margin-bottom: 16px;
`;

const GraphContainer = styled.View`
  padding: 16px;
  border-radius: 16px;

  background-color: ${(props) => props.theme.color.white};

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Info = styled.View``;

const InfoTitle = styled.Text`
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;

  color: ${(props) => props.theme.color.gray1};
`;

const StepContent = styled.Text`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;

  color: #f22764;

  margin-bottom: 8px;
`;

const CompletedContent = styled.Text`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;

  color: #51b5ff;

  margin-bottom: 8px;
`;

const DayContent = styled.Text`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;

  color: #8ad10a;
`;

const GraphBody = styled.View``;
