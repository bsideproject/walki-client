import React from 'react';
import AppleLoginContainer from '../../containers/auth/appleLogin';
import KakaoLoginContainer from '../../containers/auth/kakaoLogin';
import styled from '@emotion/native';
import { StyleSheet, View, Text } from 'react-native';
const LoginScreen = () => {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <KakaoLoginContainer />
      <AppleLoginContainer />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
  horizontal: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});
