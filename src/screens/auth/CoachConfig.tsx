import React from 'react';
import CoachContainer from '../../containers/auth/Coach';
import { IAuthProps } from '../../navigators/AuthStackNavi';

const CoachConfigScreen = ({ navigation }: IAuthProps) => {
  return <CoachContainer goNext={() => navigation.push('Challenge')} />;
};

export default CoachConfigScreen;
