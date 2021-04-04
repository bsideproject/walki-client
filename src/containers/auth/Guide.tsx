import React, { useCallback, useRef } from 'react';
import { Dimensions, Image, Text } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import styled from '@emotion/native';
import TextButton from '../../components/TextButton';

const { width: screenWidth, height: screenHight } = Dimensions.get('window');

interface IGuideData {
  title: string;
  subTitle: string;
  source: any;
  style: any;
}

const GUIDE_DATA: IGuideData[] = [
  {
    title: '코치와 함께 러닝해보세요!',
    subTitle: '토키와 부키가 당신의 데일리 러닝을 \n도와줘요!',
    source: require('../../assets/images/img_onboarding_01.png'),
    style: {
      width: screenWidth,
      height: screenHight / 2,
    },
  },
  {
    title: '챌린지를 생성하고 달성해보세요!',
    subTitle:
      '매일 챌린지를 달성하다보면 \n어느새 러닝이 습관으로 자리잡아 있을거예요!',
    source: require('../../assets/images/img_onboarding_02.png'),
    style: { width: screenWidth, height: screenHight / 2.1 },
  },
  {
    title: '메달을 차지해보세요!',
    subTitle:
      '오늘 메달을 차지하지 못해도 낙심하지마세요! \n매일 기회가 주어져요!',
    source: require('../../assets/images/img_onboarding_03.png'),
    style: { width: screenWidth, height: screenHight / 2.5 },
  },
];

interface IGuideContainerProps {
  currIndex: number;
  setCurrIndex: (idx: number) => void;
}

const GuideContainer = ({ currIndex, setCurrIndex }: IGuideContainerProps) => {
  const carouselRef = useRef<Carousel<IGuideData>>(null);

  const _renderItem = useCallback(
    ({ item, index }: { item: IGuideData; index: number }) => {
      return (
        <>
          <Text
            numberOfLines={1}
            adjustsFontSizeToFit
            style={{
              textAlign: 'left',
              fontWeight: '600',
              fontSize: 24,
              lineHeight: 36,
              marginBottom: 10,
              marginLeft: 16,
            }}>
            {item.title}
          </Text>
          <Text
            numberOfLines={2}
            adjustsFontSizeToFit
            style={{
              textAlign: 'left',
              fontWeight: '400',
              fontSize: 16,
              lineHeight: 24,
              marginBottom: 70,
              marginLeft: 16,
            }}>
            {item.subTitle}
          </Text>

          <Image
            source={item.source}
            style={{
              ...item.style,
              resizeMode: 'contain',
            }}
          />
        </>
      );
    },
    [],
  );

  return (
    <>
      <Container>
        <Pagination
          dotsLength={3}
          dotColor={'#F22764'}
          inactiveDotColor={'#E0E0E0'}
          inactiveDotScale={1}
          activeDotIndex={currIndex}
          containerStyle={{
            marginTop: 80,
          }}
        />

        <Carousel
          ref={carouselRef}
          data={GUIDE_DATA}
          renderItem={_renderItem}
          sliderWidth={screenWidth}
          sliderHeight={screenHight}
          itemWidth={screenWidth}
          onSnapToItem={(index) => setCurrIndex(index)}
        />
      </Container>
      <BottomContainer>
        {currIndex < 2 && (
          <TextButtonWrapper>
            {currIndex < 1 && (
              <TextButton
                onPress={() => {
                  if (carouselRef.current) carouselRef.current.snapToItem(2);
                  setCurrIndex(2);
                }}>
                건너뛰기
              </TextButton>
            )}
            <TextButton />
            <TextButton
              onPress={() => {
                if (carouselRef.current)
                  carouselRef.current.snapToItem(currIndex + 1);
                setCurrIndex(currIndex + 1);
              }}>
              다음
            </TextButton>
          </TextButtonWrapper>
        )}
      </BottomContainer>
    </>
  );
};

export default GuideContainer;

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.white};
`;
const BottomContainer = styled.View`
  position: absolute;
  width: 100%;
  bottom: 0;
  z-index: 100;
`;
const TextButtonWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 70px 20px;
`;
