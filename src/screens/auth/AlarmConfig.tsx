import React from 'react';

import AlarmContainer from '../../containers/auth/Alarm';
import { IAuthProps } from '../../navigators/AuthStackNavi';

const AlarmConfigScreen = ({ navigation }: IAuthProps) => {
  return <AlarmContainer goNext={() => navigation.push('Start')} />;
};

export default AlarmConfigScreen;
