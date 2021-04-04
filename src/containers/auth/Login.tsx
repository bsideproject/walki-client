import React, { useCallback } from 'react';
import styled from '@emotion/native';
import { Alert, Text } from 'react-native';
import LoginButton from '../../components/LoginButton';
import TextLink from '../../components/TextLink';
import { INaviProps } from '../../navigators/AuthStackNavi';
import { KakaoOAuthToken, login } from '@react-native-seoul/kakao-login';
import { appleAuth } from '@invertase/react-native-apple-authentication';
/**
 * 로그인 버튼
 * @param currIndex
 * @param setCurrIndex
 */
const LoginContainer = ({ goNext }: INaviProps) => {
  const onPressKakaoLogin = useCallback(async () => {
    await login().then((token: KakaoOAuthToken) => {
      console.log(1111111111111111, token);
      if (typeof goNext === 'function' && token) goNext();
    });
  }, []);

  const onAppleButtonPress = useCallback(async () => {
    // Start the sign-in request
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });
    // Ensure Apple returned a user identityToken
    if (!appleAuthRequestResponse.identityToken) {
      throw 'Apple Sign-In failed - no identify token returned';
    }
    // Create a Firebase credential from the response
    const { identityToken, nonce } = appleAuthRequestResponse;
    console.log('identityToken: ', identityToken);
    console.log('nonce: ', nonce);
    if (typeof goNext === 'function' && identityToken) goNext();
    // const appleCredential = auth.AppleAuthProvider.credential(
    //   identityToken,
    //   nonce,
    // );
    // return auth().signInWithCredential(appleCredential);
  }, []);

  return (
    <BottomContainer>
      <LoginButtonWrapper>
        <LoginButton type="kakao" onPress={onPressKakaoLogin} />
        <LoginButton type="apple" onPress={onAppleButtonPress} />

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
