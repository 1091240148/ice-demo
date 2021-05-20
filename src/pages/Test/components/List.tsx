import React, { useState, useEffect } from 'react';
import Table, { ITable } from '@/components/Table';
import store from '@/pages/Test/store';

function List(props) {
  const [state, setState] = useState({
    current: 1,
    tableLoading: true,
  });

  const [tableModel, tableDispatchers] = store.useModel('list');
  const { messageTypeArr = [] } = tableModel;

  //直接在页面中做异步操作。
  const getData = async (obj = {}) => {
    await setState({
      ...state,
      tableLoading: true,
    });
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        setState({
          ...state,
          tableLoading: false,
          ...obj,
        });
        resolve(true);
      }, 600);
    });
  };

  const handlePageChange = (current: number) => getData({ current });

  const table: ITable = {
    column: [
      {
        title: '标题',
        width: '600px',
        align: 'left',
        dataIndex: 'title',
      },
      {
        title: '信息类型',
        dataIndex: 'messageType',
        cell: (value) => {
          let str = '';
          messageTypeArr.find((item) => {
            if (item.value === value) {
              str = item.label;
              return true;
            }
          });
          return str;
        },
      },
      {
        title: '添加/发布时间',
        dataIndex: 'changeTime',
      },
      {
        title: '发布人',
        dataIndex: 'createMan',
      },
    ],
    table: {
      loading: state.tableLoading,
      dataSource: [
        {
          title: '这是一个标题',
          messageType: '1',
          changeTime: '2020-10-01 10:22:22',
          createMan: '张旭豪',
        },
      ],
    },
    pagination: {
      current: state.current,
      onChange: handlePageChange,
      total: 66,
    },
  };

  useEffect(() => {
    getData();
    tableDispatchers.getTask({ a: '234' });
  }, []);

  return (
    <div>
      <Table {...table}></Table>
    </div>
  );
}

export default List;
