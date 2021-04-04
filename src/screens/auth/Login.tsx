import React, { useState } from 'react';
import GuideContainer from '../../containers/auth/Guide';
import LoginContainer from '../../containers/auth/Login';

const LoginScreen = () => {
  const [currIndex, setCurrIndex] = useState(0);
  return (
    <>
      <GuideContainer currIndex={currIndex} setCurrIndex={setCurrIndex} />
      {currIndex === 2 && <LoginContainer />}
    </>
  );
};

export default LoginScreen;
