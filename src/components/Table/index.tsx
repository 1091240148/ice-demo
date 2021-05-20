import React from 'react';
import { Table, Pagination } from '@alifd/next';
import { PaginationProps } from '@alifd/next/types/pagination';
import { ColumnProps, BaseTableProps } from '@alifd/next/types/table';

interface MyPaginationProps extends PaginationProps {
  location?: 'left' | 'center' | 'right';
}
export interface ITable {
  column: ColumnProps[];
  table: BaseTableProps;
  pagination?: MyPaginationProps;
}
function ThatTable(props: ITable) {
  const { column, table, pagination = {} } = props;
  const { location = 'center', current = 0, pageSize = 10 } = pagination;
  column.map((item) => (item.align = 'center'));
  return (
    <div>
      <Table {...table}>
        {column.map((item, i) => (
          <Table.Column key={i + current * pageSize} {...item} />
        ))}
      </Table>
      {props.pagination && (
        <div style={{ textAlign: location }}>
          <Pagination {...pagination} style={{ marginTop: 20 }} />
        </div>
      )}
    </div>
  );
}
export default ThatTable;
