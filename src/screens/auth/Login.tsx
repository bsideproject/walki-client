import React, { useState } from 'react';
import GuideContainer from '../../containers/auth/Guide';
import LoginContainer from '../../containers/auth/Login';
import { IAuthProps } from '../../navigators/AuthStackNavi';

const LoginScreen = ({ navigation }: IAuthProps) => {
  const [currIndex, setCurrIndex] = useState(0);
  return (
    <>
      <GuideContainer currIndex={currIndex} setCurrIndex={setCurrIndex} />
      {currIndex === 2 && (
        <LoginContainer goNext={() => navigation.push('Config')} />
      )}
    </>
  );
};

export default LoginScreen;
