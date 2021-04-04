import React from 'react';
import { Button } from '../../components/Button';
import { SafeLayout } from '../../layouts/SafeLayout';

import { INaviProps } from '../../navigators/AuthStackNavi';
/**
 * 초기설정
 * @param goNext
 */
const ConfigContainer = ({ goNext }: INaviProps) => {
  return (
    <SafeLayout>
      <Button
        text="설정 진행하러 가기"
        onPress={() => {
          if (typeof goNext === 'function') goNext();
        }}
        type="secondary"
      />
    </SafeLayout>
  );
};

export default ConfigContainer;
