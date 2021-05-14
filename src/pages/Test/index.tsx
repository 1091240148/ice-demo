import React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import PageHeader from '@/components/PageHeader';

const { Cell } = ResponsiveGrid;

const Test = () => {
  return (
    <ResponsiveGrid gap={20}>
      <Cell colSpan={12}>
        <PageHeader
          title="分级表单"
          description="分级表单分级表单分级表单分级表单分级表单分级表单分级表单"
          breadcrumbs={[{ name: '表单页面' }, { name: '分级表单' }]}
        />
      </Cell>

      <Cell colSpan={12} />
    </ResponsiveGrid>
  );
};

export default Test;
