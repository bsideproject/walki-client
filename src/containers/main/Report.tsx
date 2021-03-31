import React from 'react';
import styled from '@emotion/native';
import { SafeLayout } from '../../layouts/SafeLayout';
import { Header } from '../../components/Report/Header';
import { Graph } from '../../components/Report/Graph';
import { ReportList } from '../../components/Report/ReportList';

const ReportContainer = () => {
  return (
    <SafeLayout>
      <Container>
        <Header />
        <Graph />
        <ReportList />
      </Container>
    </SafeLayout>
  );
};

export default ReportContainer;

const Container = styled.View`
  flex: 1;
`;