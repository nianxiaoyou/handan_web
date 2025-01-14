import { useState } from 'react';
import { Space, Button, Divider } from 'antd';
import { ModalForm, ProForm, ProFormText, ProFormSelect, ProFormDatePicker } from '@ant-design/pro-components';
import round from 'lodash.round';
import size from 'lodash.size';

// locale
import { useMessageContext } from '@/components/common/message-context';
import { fetchWarehouses, fetchSuppliers } from '@/utils/api';
import OrderItemForm from '@/components/sales-order/order-item-form';

const PurchaseOrderNew = (props: any) => {
  const { messageApi } = useMessageContext();

  const [form] = ProForm.useForm();
  const { onCreate } = props;
  const [modalVisible, setModalVisible] = useState(false);
  const [lines, setLines] = useState<any>([]);

  const [amount, setAmount] = useState({
    lineItemTotal: 0,
    lineItemTotalWithTax: 0,
    total: 0,
  });

  const onFinish = async (values: any) => {
    const updatedLineItems = lines
      .map(({ item, unitPrice, orderedQty, stockUOM }: any) => {
        return {
          itemUuid: item.uuid,
          stockUomUuid: stockUOM.uuid,
          uomName: stockUOM.uomName,
          unitPrice: parseFloat(unitPrice),
          orderedQty: parseInt(orderedQty),
        };
      })
      .filter((item: any) => item.orderedQty > 0);

    if (size(updatedLineItems) == 0) {
      messageApi?.error('请添加或核实商品项');
      return false;
    }

    const request = {
      supplierUuid: values.supplierUuid,
      warehouseUuid: values.warehouseUuid,
      // supplierAddress: values.supplierAddress,
      purchase_items: updatedLineItems,
    };

    await onCreate(request);
    setModalVisible(false);
  };

  const handleAdjustAmount = (values: any) => {
    setLines(values);

    const updatedLineItemTotal = values.reduce((acc: any, { unitPrice, orderedQty }: any) => {
      return acc + unitPrice * orderedQty;
    }, 0);

    setAmount({
      ...amount,
      lineItemTotal: round(updatedLineItemTotal, 2),
      total: round(updatedLineItemTotal, 2),
    });
  };

  const handleSelctSupplier = (value: any, opt: any) => {
    form.setFieldValue('supplierAddress', opt.address);
  };

  return (
    <>
      <Button
        size="small"
        onClick={() => {
          setModalVisible(true);
        }}
      >
        新增采购订单
      </Button>

      <ModalForm
        form={form}
        modalProps={{
          destroyOnClose: true,
        }}
        width={'70%'}
        onOpenChange={setModalVisible}
        title={<Space>新增采购订单</Space>}
        submitTimeout={2000}
        autoFocusFirstInput
        open={modalVisible}
        onFinish={onFinish}
        submitter={{
          render: (props, doms) => {
            return [
              <div key="lineItemTotal" style={{ marginRight: '10px' }}>
                商品金额： <span style={{ fontSize: '20px', color: '#ab956d' }}>¥ {amount.lineItemTotal}</span>{' '}
              </div>,
              <Divider key="divider1" type="vertical" />,
              <div key="total" style={{ marginRight: '10px' }}>
                应付金额： <span style={{ fontSize: '20px', color: '#ab956d' }}>¥ {amount.total}</span>{' '}
              </div>,
              <Divider key="divider4" type="vertical" />,
              <Button type="primary" key="submit" onClick={() => props.form?.submit()}>
                提交
              </Button>,
            ];
          },
        }}
      >
        <ProForm.Group>
          <ProFormSelect
            width="sm"
            name="supplierUuid"
            label="供应商"
            fieldProps={{
              onSelect: (value, opt) => handleSelctSupplier(value, opt),
            }}
            request={async (e) => fetchSuppliers(e)}
            rules={[{ required: true, message: '请选择供应商' }]}
            placeholder="请选择供应商"
          />

          <ProFormText width="sm" name="customerAddress" label="供应商地址" placeholder="请输入供应商地址" />

          <ProFormSelect
            width="sm"
            name="warehouseUuid"
            label="库房"
            request={async (e) => fetchWarehouses(e)}
            placeholder="请选择库房"
            rules={[{ required: true, message: '请选择库存' }]}
          />

          <ProFormDatePicker name="endTime" label="交货日期" />
        </ProForm.Group>

        <OrderItemForm onCallback={(values: any) => handleAdjustAmount(values)} />
      </ModalForm>
    </>
  );
};

export default PurchaseOrderNew;
