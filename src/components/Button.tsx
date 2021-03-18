import React from 'react';
import styled from '@emotion/native';

interface IProps {
  text: string;
  onPress?: () => void;
}

export const Button: React.FC<IProps> = ({ text, onPress }) => {
  return (
    <Container onPress={onPress}>
      <Text>{text}</Text>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  width: 100%;
  height: 54px;
  justify-content: center;
  align-items: center;
  background-color: #333333;
  border-radius: 8px;
`;

const Text = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
`;
