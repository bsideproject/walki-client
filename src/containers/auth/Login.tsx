import React from 'react';
import styled from '@emotion/native';
import { isLoggedInVar } from '../../common/apollo';
import {
  Alert,
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedbackProps,
} from 'react-native';

const LoginContainer = () => {
  return (
    <LoginButtonWrapper>
      <LoginButton
        type="kakao"
        onPress={() => Alert.alert('카카오로 시작하기')}
      />
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
        <TextLink onPress={() => Alert.alert('이용약관')}>이용약관</TextLink>과{' '}
        <TextLink onPress={() => Alert.alert('개인정보처리방침')}>
          개인정보처리방침
        </TextLink>
        을 읽고 이해했으며{'\n'}그에 동의함을 확인합니다.
      </Text>
    </LoginButtonWrapper>
  );
};

export default LoginContainer;

const LoginButtonWrapper = styled.View`
  margin: 16px 37px;
`;

interface ILoginButtonProps extends TouchableWithoutFeedbackProps {
  type: 'apple' | 'kakao';
}

const LoginButton: React.FC<ILoginButtonProps> = ({ type, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={{
        height: 54,
        marginBottom: 8,
        borderRadius: 8,
        backgroundColor: `${type === 'apple' ? '#000' : '#FFE812'}`,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        // justifyContent: 'space-between',
        // display: 'inline',
      }}>
      <Image
        source={
          type === 'apple'
            ? require(`../../assets/icons/button/logo_apple.png`)
            : require(`../../assets/icons/button/logo_kakao.png`)
        }
        style={{
          width: 24,
          height: 24,
          marginRight: 4,
          resizeMode: 'contain',
        }}
      />
      <Text
        numberOfLines={1}
        adjustsFontSizeToFit
        style={{
          color: `${type === 'apple' ? '#fff' : '#000'}`,
          fontWeight: '600',
          fontSize: 16,
          letterSpacing: -0.6,
        }}>
        {type === 'apple' ? '애플' : '카카오'}로 시작하기
      </Text>
    </TouchableOpacity>
  );
};

const TextLink: React.FC<TouchableWithoutFeedbackProps> = ({
  onPress,
  children,
}) => {
  return (
    <Text
      onPress={onPress}
      numberOfLines={1}
      adjustsFontSizeToFit
      style={{ textDecorationLine: 'underline' }}>
      {children}
    </Text>
  );
};
