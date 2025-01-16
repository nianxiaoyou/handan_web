import { useState, useEffect } from 'react';
import { Space, Button, Divider } from 'antd';
import { ModalForm, ProForm, ProFormText, ProFormSelect, EditableProTable } from '@ant-design/pro-components';
import type { ProColumns } from '@ant-design/pro-components';

// locale
import { useMessageContext } from '@/components/common/message-context';
import {
  useCreatePaymentEntryMutation,
  useUnpaidPurchaseInvoicesBySupplierLazyQuery,
  useUnpaidSalesInvoicesByCustomerLazyQuery,
} from '@/gql';
import { onError } from '@/utils';
import { fetchCustomers, fetchPaymentMethods, fetchSuppliers } from '@/utils/api';

const PaymentEntryNew = (props: any) => {
  const { saleInvoice, purchaseInvoice, visible, onClose } = props;
  const { messageApi } = useMessageContext();

  const [form] = ProForm.useForm();

  const [createPaymentEntry] = useCreatePaymentEntryMutation({
    onCompleted: () => {
      messageApi?.success('创建成功');
      onClose && onClose();
    },
    onError,
  });

  const [party, setParty] = useState({ type: 'customer', uuid: null });
  const [lines, setLines] = useState<any>([]);
  const [invoices, setInvoices] = useState<any>([]);
  const [amount, setAmount] = useState({
    lineItemTotal: 0,
    lineItemTotalWithTax: 0,
    total: 0,
  });

  useEffect(() => {
    if (saleInvoice) {
      form.setFieldsValue({
        partyUuid: saleInvoice.customerUuid,
        partyType: 'customer',
        partyName: saleInvoice.customerName,
        type: 'sales_invoice',
      });

      setParty({ type: 'customer', uuid: saleInvoice.customerUuid });
      setLines([
        {
          lineUuid: saleInvoice.uuid,
          amount: saleInvoice.amount,
        },
      ]);

      setAmount({
        lineItemTotal: saleInvoice.amount,
        lineItemTotalWithTax: saleInvoice.amount,
        total: saleInvoice.amount,
      });
    }

    if (purchaseInvoice) {
      form.setFieldsValue({
        partyUuid: purchaseInvoice.supplierUuid,
        partyType: 'supplier',
        partyName: purchaseInvoice.supplierName,
        type: 'purchase_invoice',
      });

      setParty({ type: 'supplier', uuid: purchaseInvoice.supplierUuid });
      setLines([
        {
          lineUuid: purchaseInvoice.uuid,
          amount: purchaseInvoice.amount,
        },
      ]);

      setAmount({
        lineItemTotal: purchaseInvoice.amount,
        lineItemTotalWithTax: purchaseInvoice.amount,
        total: purchaseInvoice.amount,
      });
    }
  }, [saleInvoice, purchaseInvoice]); // eslint-disable-line react-hooks/exhaustive-deps

  const [fetchPurchaseInvoices] = useUnpaidPurchaseInvoicesBySupplierLazyQuery({
    fetchPolicy: 'no-cache',
    onCompleted: (data: any) => {
      const result = data?.unpaidPurchaseInvoicesBySupplier?.map((item: any) => {
        return {
          value: item.uuid,
          label: item.uuid,
          amount: item.amount,
        };
      });

      setInvoices(result);
    },
    onError,
  });

  const [fetchSalesInvoices] = useUnpaidSalesInvoicesByCustomerLazyQuery({
    fetchPolicy: 'no-cache',
    onCompleted: (data: any) => {
      const result = data?.unpaidSalesInvoicesByCustomer?.map((item: any) => {
        return {
          value: item.uuid,
          label: item.uuid,
          amount: item.amount,
        };
      });

      setInvoices(result);
    },
    onError,
  });

  const handleAdjustAmountAndLines = (values: any) => {
    const amount = values.reduce((acc: any, item: any) => acc + parseFloat(item.amount), 0);
    setLines(values);
    setAmount({
      lineItemTotal: amount,
      lineItemTotalWithTax: amount,
      total: amount,
    });
  };

  const handleSelctParty = (value: any, opt: any) => {
    handleAdjustAmountAndLines([]);
  };

  const onFinish = async (values: any) => {
    const invoiceIds = lines.map((item: any) => item.lineUuid);
    const { salesInvoiceIds, purchaseInvoiceIds } =
      values.partyType === 'customer'
        ? { salesInvoiceIds: invoiceIds, purchaseInvoiceIds: [] }
        : { salesInvoiceIds: [], purchaseInvoiceIds: invoiceIds };

    const request = {
      partyUuid: values.partyUuid,
      partyType: values.partyType,
      paymentMethodUuid: values.paymentMethodUuid,
      type: values.type,
      salesInvoiceIds: salesInvoiceIds,
      purchaseInvoiceIds: purchaseInvoiceIds,
    };

    await createPaymentEntry({ variables: { request } });
  };

  const columns: ProColumns<any>[] = [
    {
      title: '单号',
      dataIndex: 'lineUuid',
      valueType: 'select',
      align: 'center',
      width: '300px',
      fieldProps: (form, { rowKey, rowIndex }) => {
        return {
          showSearch: true,
          style: { width: '100%' },
          defaultActiveFirstOption: false,
          placeholder: '请输入内容搜索',
          suffixIcon: null,
          onSearch: (value: any) => {
            if (party.type === 'customer') {
              fetchSalesInvoices({ variables: { request: { uuid: party.uuid } } });
            } else {
              fetchPurchaseInvoices({ variables: { request: { uuid: party.uuid } } });
            }
          },
          onChange: (value: any) => {
            if (value) {
              const item = JSON.parse(value);
              form.setFieldsValue({
                [rowKey]: {
                  lineUuid: item.value,
                  amount: item.amount,
                },
              });
            }
          },
          options: (invoices || []).map((d) => ({
            value: JSON.stringify(d),
            label: d.uuid,
          })),
        };
      },
      formItemProps: () => {
        return {
          rules: [{ required: true, message: '此项为必填项' }],
        };
      },
    },
    {
      title: '金额',
      dataIndex: 'amount',
      valueType: 'digit',
      fieldProps: {
        defaultValue: 0,
      },
      readonly: true,
    },
    {
      title: '操作',
      valueType: 'option',
      render: (text, record, _, action) => [
        <a
          style={{ color: '#1677ff' }}
          key="editable"
          onClick={() => {
            action?.startEditable?.(record.uuid);
          }}
        >
          编辑
        </a>,
      ],
    },
  ];

  return (
    <>
      <ModalForm
        title={<Space>新增支付记录</Space>}
        form={form}
        modalProps={{
          destroyOnClose: true,
          onCancel: () => onClose(),
        }}
        width={'70%'}
        submitTimeout={2000}
        autoFocusFirstInput
        open={visible}
        onFinish={onFinish}
        submitter={{
          render: (props, doms) => {
            return [
              <div key="lineItemTotal" style={{ marginRight: '10px' }}>
                金额： <span style={{ fontSize: '20px', color: '#ab956d' }}>¥ {amount.lineItemTotal}</span>
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
          <ProFormText name="partyType" hidden />
          <ProFormText name="type" hidden />

          {party.type === 'customer' && (
            <ProFormSelect
              width="sm"
              name="partyUuid"
              label="客户"
              fieldProps={{
                onSelect: (value, opt) => handleSelctParty(value, opt),
              }}
              request={async (e) => fetchCustomers(e)}
              rules={[{ required: true, message: '请选择客户' }]}
              placeholder="请选择客户"
            />
          )}

          {party.type === 'supplier' && (
            <ProFormSelect
              width="sm"
              name="partyUuid"
              label="供应商"
              fieldProps={{
                onSelect: (value, opt) => handleSelctParty(value, opt),
              }}
              request={async (e) => fetchSuppliers(e)}
              rules={[{ required: true, message: '请选择客户' }]}
              placeholder="请选择客户"
            />
          )}

          <ProFormSelect
            width="sm"
            name="paymentMethodUuid"
            label="支付方式"
            request={async (e) => fetchPaymentMethods(e)}
            rules={[{ required: true, message: '请选择支付方式' }]}
            placeholder="请选择支付方式"
          />
        </ProForm.Group>

        <EditableProTable
          rowKey="uuid"
          size="small"
          maxLength={20}
          controlled
          recordCreatorProps={{
            position: 'bottom',
            record: () => ({ uuid: (Math.random() * 1000000).toFixed(0) }),
          }}
          loading={false}
          columns={columns}
          value={lines}
          onChange={(values) => handleAdjustAmountAndLines(values)}
        />
      </ModalForm>
    </>
  );
};

export default PaymentEntryNew;
