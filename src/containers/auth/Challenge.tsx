import React from 'react';
import { Button } from '../../components/Button';
import { SafeLayout } from '../../layouts/SafeLayout';

import { INaviProps } from '../../navigators/AuthStackNavi';
/**
 * 챌린지설정
 * @param goNext
 */
const ChallengeContainer = ({ goNext }: INaviProps) => {
  return (
    <SafeLayout>
      <Button
        text="다음"
        onPress={() => {
          // TODO: 챌린지 입력 데이터 저장
          if (typeof goNext === 'function') goNext();
        }}
        type="secondary"
      />
    </SafeLayout>
  );
};

export default ChallengeContainer;
