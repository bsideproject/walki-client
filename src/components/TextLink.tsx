import React from 'react';
import { Text, TouchableWithoutFeedbackProps } from 'react-native';

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
export default TextLink;
