'use client';

import MainLayout from '@/layouts/MainLayout';
import Page from '@/modules/todo';

const BVMPage = () => {
  return (
    <MainLayout
      headerProps={{
        color: 'black',
      }}
    >
      <Page />
    </MainLayout>
  );
};

export default BVMPage;
