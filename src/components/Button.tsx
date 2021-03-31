import React from 'react';
import styled from '@emotion/native';

export type ButtonType = 'primary' | 'secondary' | 'text';

interface IProps {
  text: string;
  type?: ButtonType;
  disabled?: boolean;
  onPress?: () => void;
}

export const Button: React.FC<IProps> = ({
  text,
  type = 'primary',
  disabled = false,
  onPress,
}) => {
  return (
    <Container
      type={type}
      activeOpacity={0.6}
      disabled={disabled}
      onPress={onPress}>
      <Text>{text}</Text>
    </Container>
  );
};

const Container = styled.TouchableOpacity<{ type: ButtonType }>`
  width: 100%;
  height: 54px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${({ type, theme, disabled }) =>
    disabled
      ? type === 'primary'
        ? `${theme.color.main}${disabled && 30}`
        : `${theme.color.gray1}${disabled && 30}`
      : type === 'primary'
      ? theme.color.main
      : theme.color.gray1};
`;

const Text = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.white};
`;
