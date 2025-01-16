import { ProForm, ProFormText } from '@ant-design/pro-components';
import { Popover } from 'antd';
import { useState } from 'react';

const PurchaseInvoiceNew = (props: any) => {
  const { record, onCallback } = props;
  const [visible, setVisible] = useState(false);

  const onFinish = (values: any) => {
    const request = {
      purchaseOrderUuid: values.purchaseOrderUuid,
      amount: parseFloat(values.amount),
    };

    onCallback && onCallback(request);
    setVisible(false);
  };

  return (
    <div>
      <a onClick={() => setVisible(true)}>添加付款凭证</a>
      <Popover
        title="添加付款凭证"
        overlayInnerStyle={{ width: '200px' }}
        content={
          <ProForm onFinish={onFinish} initialValues={{ purchaseOrderUuid: record.uuid }}>
            <ProFormText name="purchaseOrderUuid" hidden />
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

export default PurchaseInvoiceNew;
