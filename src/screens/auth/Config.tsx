import React from 'react';

import ConfigContainer from '../../containers/auth/Config';
import { IAuthProps } from '../../navigators/AuthStackNavi';

/**
 * 초기설정
 * @param goNext
 */
const ConfigScreen = ({ navigation }: IAuthProps) => {
  return <ConfigContainer goNext={() => navigation.push('Coach')} />;
};

export default ConfigScreen;
