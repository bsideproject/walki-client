import React from 'react';
import styled from '@emotion/native';

import Clearsky from '../../assets/icons/weather/clearsky.svg';

export const Info = () => {
  return (
    <>
      <CurrentDate>
        <CurrentDateText>2월 26일 10:50PM</CurrentDateText>
      </CurrentDate>
      <Container>
        <ItemContainer>
          <TempText>-4</TempText>
          <TempPlace>강남구</TempPlace>
        </ItemContainer>
        <Divider />
        <ItemContainer>
          <WeatherIcon>
            <Clearsky />
          </WeatherIcon>
          <WeatherText>오늘 날씨</WeatherText>
        </ItemContainer>
      </Container>
    </>
  );
};

const CurrentDate = styled.View`
  margin-bottom: 8px;
`;

const CurrentDateText = styled.Text``;

const Container = styled.View`
  width: 181px;
  height: 88px;
  background-color: ${(props) => props.theme.color.white};

  flex-direction: row;
  justify-content: center;
  align-items: center;

  border-radius: 16px;

  margin-bottom: 20px;
`;

const ItemContainer = styled.View`
  width: 90px;
  justify-content: center;
  align-items: center;
`;

const TempText = styled.Text`
  font-size: 32px;
  font-weight: 300;
  color: ${(props) => props.theme.color.gray1};
  margin-bottom: 4px;
`;

const TempPlace = styled.Text`
  font-size: 12px;
  line-height: 12px;
  color: ${(props) => props.theme.color.gray3};
`;

const WeatherIcon = styled.View`
  margin-bottom: 8px;
`;

const WeatherText = styled.Text`
  font-size: 12px;
  line-height: 12px;
  color: ${(props) => props.theme.color.gray3};
`;

const Divider = styled.View`
  width: 1px;
  height: 28px;

  background-color: ${(props) => props.theme.color.gray4};
`;
