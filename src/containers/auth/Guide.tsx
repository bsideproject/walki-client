import React, { useCallback, useState, useRef } from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Image,
  Alert,
  TouchableOpacity,
  Text,
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import styled from '@emotion/native';
import { SafeLayout } from '../../layouts/SafeLayout';

interface IGuideData {
  title: string;
  subtitle: string;
  source: string;
  style: any;
}

const { width: screenWidth, height: screenHight } = Dimensions.get('window');

const GUIDE_DATA: IGuideData[] = [
  {
    title: '코치와 함께 러닝해보세요!',
    subtitle: '토키와 부키가 당신의 데일리 러닝을 \n도와줘요!',
    source: require('../../assets/images/img_onboarding_01.png'),
    style: {
      width: screenWidth,
      height: screenHight / 2,
    },
  },
  {
    title: '챌린지를 생성하고 달성해보세요!',
    subtitle:
      '매일 챌린지를 달성하다보면 \n어느새 러닝이 습관으로 자리잡아 있을거예요!',
    source: require('../../assets/images/img_onboarding_02.png'),
    style: { width: screenWidth, height: screenHight / 2.1 },
  },
  {
    title: '메달을 차지해보세요!',
    subtitle:
      '오늘 메달을 차지하지 못해도 낙심하지마세요! \n매일 기회가 주어져요!',
    source: require('../../assets/images/img_onboarding_03.png'),
    style: { width: screenWidth, height: screenHight / 2.5 },
  },
];

const GuideContainer = () => {
  const [selectedCoachIndex, setSelectedCoachIndex] = useState(0);

  const carouselRef = useRef<Carousel<IGuideData>>(null);
  const _renderItem = useCallback(({ item }: { item: any }) => {
    return (
      <Content>
        <Title>{item.title}</Title>
        <Subtitle>{item.subtitle}</Subtitle>
        <Image
          source={item.source}
          style={{
            ...item.style,
            resizeMode: 'contain',
          }}
        />
      </Content>
    );
  }, []);

  return (
    <SafeLayout>
      <Container>
        <View
          style={{
            position: 'absolute',
            width: '100%',
            paddingTop: 50,
            zIndex: 100,
          }}>
          <Pagination
            dotsLength={3}
            activeDotIndex={selectedCoachIndex}
            dotColor={'#F22764'}
            inactiveDotColor={'#E0E0E0'}
            inactiveDotScale={1}
          />
        </View>

        <Carousel
          ref={carouselRef}
          data={GUIDE_DATA}
          renderItem={_renderItem}
          sliderWidth={screenWidth}
          sliderHeight={screenHight}
          itemWidth={screenWidth}
          onSnapToItem={(index) => setSelectedCoachIndex(index)}
        />

        <View style={styles.buttonContainer}>
          {selectedCoachIndex < 2 ? (
            <View style={styles.textButtonWrapper}>
              {selectedCoachIndex === 0 && (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    if (carouselRef.current) carouselRef.current.snapToItem(2);
                    setSelectedCoachIndex(2);
                  }}>
                  <Text style={styles.textButton}>건너뛰기</Text>
                </TouchableOpacity>
              )}
              <View style={{ flexGrow: 1 }}></View>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  if (carouselRef.current)
                    carouselRef.current.snapToItem(selectedCoachIndex + 1);
                  setSelectedCoachIndex(selectedCoachIndex + 1);
                }}>
                <Text style={styles.textButton}>다음</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.loginButtonWrapper}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => Alert.alert('카카오로 시작하기')}
                style={{
                  width: 300,
                  height: 54,
                  borderRadius: 8,
                  backgroundColor: '#FFE812',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text>카카오로 시작하기</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => Alert.alert('애플로 시작하기')}
                style={{
                  width: 300,
                  height: 54,
                  borderRadius: 8,
                  backgroundColor: '#000000',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{ color: '#ffffff' }}>애플로 시작하기</Text>
              </TouchableOpacity>
              <Text style={{ textAlign: 'center', lineHeight: 15 }}>
                walki의{' '}
                <Text
                  style={{ display: 'flex', textDecorationLine: 'underline' }}
                  onPress={() => Alert.alert('이용약관')}>
                  이용약관
                </Text>
                과{' '}
                <Text
                  style={{ display: 'flex', textDecorationLine: 'underline' }}
                  onPress={() => Alert.alert('개인정보처리방침')}>
                  개인정보처리방침
                </Text>
                을 읽고 이해했으며{'\n'}그에 동의함을 확인합니다.
              </Text>
            </View>
          )}
        </View>
      </Container>
    </SafeLayout>
  );
};

export default GuideContainer;

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.white};
`;

const Content = styled.View`
  margin: 100px 0px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin: 10px 16px;
  line-height: 36px;
`;

const Subtitle = styled.Text`
  font-size: 16px;
  margin: 0 16px;
  margin-bottom: 50px;
`;
const styles = StyleSheet.create({
  textButtonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    paddingBottom: 70,
  },
  textButton: {
    color: '#333333',
    fontSize: 14,
  },

  loginButtonWrapper: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    zIndex: 100,
  },
});
