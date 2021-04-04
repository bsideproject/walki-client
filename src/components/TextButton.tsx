import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedbackProps,
} from 'react-native';

const TextButton: React.FC<TouchableWithoutFeedbackProps> = ({
  onPress,
  children,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <Text
        numberOfLines={1}
        adjustsFontSizeToFit
        style={{ color: '#333333', fontSize: 14 }}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};
export default TextButton;
