import React from 'react';
import { Select, DatePicker, Form, Input, Card } from '@alifd/next';
import store from '@/pages/Test/store';

const FormItem = Form.Item;

function Search(props) {
  const [tableModel, tableDispatchers] = store.useModel('list');
  const { messageTypeArr = [] } = tableModel;
  let field = '';

  return (
    <div>
      <Card free>
        <Card.Content>
          <Form className="filter-form" responsive fullWidth field={field}>
            <FormItem colSpan={3} label="信息类型">
              <Select name="status" dataSource={messageTypeArr} />
            </FormItem>
            <FormItem colSpan={3} label="发布时间">
              <DatePicker.RangePicker name="date" />
            </FormItem>
            <FormItem colSpan={3} label="标题">
              <Input name="aa" placeholder="请输入标签"></Input>
            </FormItem>
            <FormItem
              colSpan={3}
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Form.Submit type="primary" validate style={{ marginRight: '20px' }}>
                提交
              </Form.Submit>
              <Form.Reset>重置</Form.Reset>
            </FormItem>
          </Form>
        </Card.Content>
      </Card>
    </div>
  );
}

export default Search;
