import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedbackProps,
} from 'react-native';
import AppleLogo from '../assets/icons/logo/apple.svg';
import KakaoLogo from '../assets/icons/logo/kakao.svg';

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
      }}>
      {type === 'apple' ? (
        <AppleLogo width={24} height={24} />
      ) : (
        <KakaoLogo width={24} height={24} />
      )}
      <Text
        numberOfLines={1}
        adjustsFontSizeToFit
        style={{
          color: `${type === 'apple' ? '#fff' : '#000'}`,
          fontWeight: '600',
          fontSize: 16,
          letterSpacing: -0.6,
          marginLeft: 6,
        }}>
        {type === 'apple' ? '애플' : '카카오'}로 시작하기
      </Text>
    </TouchableOpacity>
  );
};

export default LoginButton;
