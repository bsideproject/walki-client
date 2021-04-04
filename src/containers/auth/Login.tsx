import React, { useCallback } from 'react';
import styled from '@emotion/native';
import { Alert, Text } from 'react-native';
import LoginButton from '../../components/LoginButton';
import TextLink from '../../components/TextLink';
import { KakaoOAuthToken, login } from '@react-native-seoul/kakao-login';

const LoginContainer = () => {
  const onPressKakaoLogin = useCallback(async () => {
    const token: KakaoOAuthToken = await login();
    console.log(token);
  }, []);

  return (
    <BottomContainer>
      <LoginButtonWrapper>
        <LoginButton type="kakao" onPress={onPressKakaoLogin} />
        <LoginButton
          type="apple"
          onPress={() => Alert.alert('애플로 시작하기')}
        />

        <Text
          numberOfLines={2}
          adjustsFontSizeToFit
          style={{
            marginBottom: 42,
            letterSpacing: 0.16,
            lineHeight: 15,
            fontSize: 12,
            color: '#828282',
            textAlign: 'center',
          }}>
          walki의{' '}
          <TextLink onPress={() => Alert.alert('이용약관')}>이용약관</TextLink>
          과{' '}
          <TextLink onPress={() => Alert.alert('개인정보처리방침')}>
            개인정보처리방침
          </TextLink>
          을 읽고 이해했으며{'\n'}그에 동의함을 확인합니다.
        </Text>
      </LoginButtonWrapper>
    </BottomContainer>
  );
};

export default LoginContainer;

const LoginButtonWrapper = styled.View`
  margin: 16px 37px;
`;
const BottomContainer = styled.View`
  position: absolute;
  width: 100%;
  bottom: 0;
  z-index: 100;
`;
