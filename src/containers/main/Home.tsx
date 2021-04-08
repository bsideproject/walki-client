import React, { useEffect, useState } from 'react';
import styled from '@emotion/native';
import { SafeLayout } from '../../layouts/SafeLayout';
import { Header } from '../../components/Home/Header';
import { Info } from '../../components/Home/Info';
import { CircularProgress } from '../../components/Home/CircularProgress';
import { Button } from '../../components/Button';
import Pedometer, {
  PedometerInterface,
} from '@t2tx/react-native-universal-pedometer';

const HomeContainer = () => {
  const [stepData, setStepData] = useState<PedometerInterface>();

  const check = () => {
    Pedometer.isStepCountingAvailable((error, result) => {
      console.log(error, result);
    });
  };

  const load = () => {
    const start = new Date('2021-04-07');
    const end = new Date();

    Pedometer.queryPedometerDataBetweenDates(
      start.getTime(),
      end.getTime(),
      (error, data: PedometerInterface | null) => {
        console.log(error);
        console.log(data);
        setStepData(
          data || {
            distance: 0,
            numberOfSteps: 0,
            endDate: 0,
            startDate: 0,
          },
        );
      },
    );
  };

  useEffect(() => {
    check();
  }, []);

  return (
    <SafeLayout>
      <Header />
      <Body>
        <Info />
        <CircularProgress />
        <TextContainer>
          <Text>조금만 더 힘내시면 목표에 도달할 수 있어요!</Text>
          <Text>distance {stepData?.distance}</Text>
          <Text>startDate {stepData?.startDate}</Text>
          <Text>endDate {stepData?.endDate}</Text>
          <Text>numberOfSteps {stepData?.numberOfSteps}</Text>
        </TextContainer>
        <ButtonContainer>
          <Button text="오늘은 그만할래요" type="secondary" onPress={load} />
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
