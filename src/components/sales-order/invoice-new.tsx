import { ProForm, ProFormText } from '@ant-design/pro-components';
import { Popover } from 'antd';
import { useState } from 'react';

const SalesInvoiceNew = (props: any) => {
  const { record, onCallback } = props;
  const [visible, setVisible] = useState(false);

  const onFinish = (values: any) => {
    const request = {
      salesOrderUuid: values.salesOrderUuid,
      amount: parseFloat(values.amount),
    };

    onCallback && onCallback(request);
    setVisible(false);
  };

  return (
    <div>
      <a onClick={() => setVisible(true)}>添加收款凭证</a>
      <Popover
        title="添加收款凭证"
        overlayInnerStyle={{ width: '200px' }}
        content={
          <ProForm onFinish={onFinish} initialValues={{ salesOrderUuid: record.uuid }}>
            <ProFormText name="salesOrderUuid" hidden />
            <ProFormText
              width="sm"
              name="amount"
              label="收款金额"
              placeholder="请输入金额"
              rules={[{ required: true, message: '请输入金额' }]}
            />
          </ProForm>
        }
        trigger="click"
        open={visible}
        onOpenChange={() => setVisible(!visible)}
      />
    </div>
  );
};

export default SalesInvoiceNew;
