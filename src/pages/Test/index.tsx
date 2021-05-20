import React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import List from './components/List';
import Search from './components/Search';

const { Cell } = ResponsiveGrid;

const Test = () => {
  return (
    <ResponsiveGrid gap={20}>
      <Cell colSpan={12}>
        <Search></Search>
      </Cell>

      <Cell colSpan={12}>
        <List></List>
      </Cell>
    </ResponsiveGrid>
  );
};

export default Test;
