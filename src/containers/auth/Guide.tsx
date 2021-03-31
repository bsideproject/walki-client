import React, { useCallback, useState } from 'react';
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

const { width: screenWidth, height: screenHight } = Dimensions.get('window');

const COACH_DATA = [
  {
    title: '코치와 함께 러닝해보세요!',
    subtitle: '토키와 부키가 당신의 데일리 러닝을 \n도와줘요!',
    source: require('../../assets/images/img_onboarding_01.png'),
  },
  {
    title: '챌린지를 생성하고 달성해보세요!',
    subtitle:
      '매일 챌린지를 달성하다보면 \n어느새 러닝이 습관으로 자리잡아 있을거예요!',
    source: require('../../assets/images/img_onboarding_01.png'),
  },
  {
    title: '메달을 차지해보세요!',
    subtitle:
      '오늘 메달을 차지하지 못해도 낙심하지마세요! \n매일 기회가 주어져요!',
    source: require('../../assets/images/img_onboarding_01.png'),
  },
];

const GuideContainer = () => {
  const [selectedCoachIndex, setSelectedCoachIndex] = useState(0);

  const _renderItem = useCallback(({ item }: { item: any }) => {
    return (
      <Content>
        <Title>{item.title}</Title>
        <Subtitle>{item.subtitle}</Subtitle>
        <Image source={item.source} style={styles.image} />
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
            paddingTop: 70,
            zIndex: 100,
          }}>
          <Pagination
            dotsLength={3}
            activeDotIndex={selectedCoachIndex}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
            containerStyle={{}}
          />
        </View>

        <Carousel
          data={COACH_DATA}
          renderItem={_renderItem}
          sliderWidth={screenWidth}
          sliderHeight={screenHight}
          itemWidth={screenWidth}
          onSnapToItem={(index) => setSelectedCoachIndex(index)}
        />

        <View style={styles.buttonContainer}>
          {selectedCoachIndex < 2 ? (
            <View style={styles.textButton}>
              {selectedCoachIndex === 0 && (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => setSelectedCoachIndex(2)}>
                  <Text>건너뛰기</Text>
                </TouchableOpacity>
              )}
              <View style={{ flexGrow: 1 }}></View>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setSelectedCoachIndex(selectedCoachIndex + 1)}>
                <Text>다음</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.loginButton}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => Alert.alert('카카오로 시작하기')}>
                <Text>카카오로 시작하기</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => Alert.alert('애플로 시작하기')}>
                <Text>애플로 시작하기</Text>
              </TouchableOpacity>
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
  margin: 130px 0px;
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
  margin-bottom: 70px;
`;
const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
    width: screenWidth,
    height: screenWidth,
  },
  textButton: {
    color: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  loginButton: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    zIndex: 100,
    padding: 20,
  },
});
