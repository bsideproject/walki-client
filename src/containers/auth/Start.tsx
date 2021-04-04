import React from 'react';
import { Button } from '../../components/Button';
import { SafeLayout } from '../../layouts/SafeLayout';

import { INaviProps } from '../../navigators/AuthStackNavi';
/**
 * 알람설정
 * @param goNext
 */
const StartContainer = ({ goNext }: INaviProps) => {
  return (
    <SafeLayout>
      <Button
        text="그럼 이제 시작해 볼까요?"
        onPress={() => {
          // TODO: 알림 입력 데이터 저장
          if (typeof goNext === 'function') goNext();
        }}
        type="secondary"
      />
    </SafeLayout>
  );
};

export default StartContainer;
