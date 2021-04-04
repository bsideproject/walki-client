import React from 'react';

import ChallengeContainer from '../../containers/auth/Challenge';
import { IAuthProps } from '../../navigators/AuthStackNavi';

const ChallengeConfigScreen = ({ navigation }: IAuthProps) => {
  return <ChallengeContainer goNext={() => navigation.push('Alarm')} />;
};

export default ChallengeConfigScreen;
