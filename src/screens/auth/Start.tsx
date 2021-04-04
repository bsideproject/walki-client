import React from 'react';

import StartContainer from '../../containers/auth/Start';
import { IAuthProps } from '../../navigators/AuthStackNavi';

const StartScreen = ({ navigation }: IAuthProps) => {
  return <StartContainer goNext={() => navigation.push('Home')} />;
};

export default StartScreen;
