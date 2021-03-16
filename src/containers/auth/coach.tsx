import React, { useCallback, useState } from 'react';
import styled from '@emotion/native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const CoachContainer = () => {
  const [activeSlide, setactiveSlide] = useState(0);

  const _renderItem = useCallback(({ item }: { item: number }) => {
    return <Iamge source={item} />;
  }, []);

  return (
    <SafeContaienr>
      <Container>
        <Header>
          <BackButton>&larr;</BackButton>
        </Header>
        <Content>
          <Title>나의 걷기를 도와줄 코치를 선택해주세요!</Title>
          <Subtitle>코치를 선택해야 서비스를 이용할 수 있어요!</Subtitle>
        </Content>
        <Carousel
          data={[
            require('../../assets/images/card_01.png'),
            require('../../assets/images/card_02.png'),
          ]}
          renderItem={_renderItem}
          sliderWidth={screenWidth - 32}
          itemWidth={264 + 12}
          onSnapToItem={(index) => setactiveSlide(index)}
          slideStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
        <Pagination
          dotsLength={2}
          activeDotIndex={activeSlide}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
        <ButtonContainer>
          <ButtonText>선택하기</ButtonText>
        </ButtonContainer>
      </Container>
    </SafeContaienr>
  );
};

export default CoachContainer;

const SafeContaienr = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

const Header = styled.View`
  width: 100%;
  height: 60px;
  justify-content: center;
`;

const BackButton = styled.Text`
  font-size: 24px;
  font-weight: bold;
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
`;

const Container = styled.View`
  flex: 1;
  padding: 0px 16px;
  background-color: white;
`;

const Content = styled.View`
  margin-bottom: 40px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  width: 254px;

  margin-bottom: 16px;
`;

const Subtitle = styled.Text``;

const Iamge = styled.Image``;

const ButtonContainer = styled.TouchableOpacity`
  width: 100%;
  height: 54px;
  justify-content: center;
  align-items: center;
  background-color: #333333;
  border-radius: 8px;

  margin-bottom: 24px;
`;

const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
`;
