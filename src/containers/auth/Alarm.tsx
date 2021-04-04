import React from 'react';
import { Button } from '../../components/Button';
import { SafeLayout } from '../../layouts/SafeLayout';

import { INaviProps } from '../../navigators/AuthStackNavi';
/**
 * 알람설정
 * @param goNext
 */
const AlarmContainer = ({ goNext }: INaviProps) => {
  return (
    <SafeLayout>
      <Button
        text="다음"
        onPress={() => {
          // TODO: 알림 입력 데이터 저장
          if (typeof goNext === 'function') goNext();
        }}
        type="secondary"
      />
    </SafeLayout>
  );
};

export default AlarmContainer;
