import React, { useCallback } from 'react';
import styled from '@emotion/native';

import { ReportCard } from './ReportCard';

export const ReportList = () => {
  const _renderItem = useCallback(
    (index) => <ReportCard key={`key-${index}`} />,
    [],
  );
  return (
    <Container>
      <Title>디즈니덕후 님의 데일리 챌린지 히스토리</Title>
      <List>{new Array(10).fill(0).map((_, index) => _renderItem(index))}</List>
    </Container>
  );
};

const Container = styled.ScrollView`
  flex: 1;
  background-color: ${(props) => props.theme.color.white};
`;

const Title = styled.Text`
  padding: 24px 16px;
`;

const List = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0px 16px;
  padding-bottom: 24px;
`;
