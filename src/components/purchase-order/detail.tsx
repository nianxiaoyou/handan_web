import { useEffect, useState } from 'react';
import { Drawer, TabsProps, Tabs } from 'antd';
import { ProDescriptions, ProCard, ProTable } from '@ant-design/pro-components';
import size from 'lodash.size';

// locale
import { usePurchaseOrderLazyQuery } from '@/gql';
import { onError } from '@/utils';

const PurchaseOrderDetail = ({ uuid, visible, record, onClose }: any) => {
  const [entry, setEntry] = useState<any>({});

  useEffect(() => {
    if (!uuid) {
      return;
    }
    fetchPurchaseOrder({ variables: { request: { purchaseOrderUuid: uuid } } });
  }, [uuid]); // eslint-disable-line

  const [fetchPurchaseOrder] = usePurchaseOrderLazyQuery({
    fetchPolicy: 'no-cache',
    onCompleted: (data: any) => {
      setEntry(data.purchaseOrder);
    },
    onError,
  });

  const purchaseOrderItemColumns = [
    {
      title: '商品名称',
      dataIndex: 'itemName',
      key: 'itemName',
    },
    {
      title: '数量',
      dataIndex: 'orderedQty',
      key: 'orderedQty',
    },
    {
      title: '单价',
      dataIndex: 'unitPrice',
      valueType: 'money',
      key: 'unitPrice',
    },
    {
      title: '金额',
      dataIndex: 'amount',
      valueType: 'money',
      key: 'amount',
    },
  ];

  const receiptNoteColumns = [
    {
      title: 'id',
      dataIndex: 'uuid',
      key: 'uuid',
    },
    {
      title: '入库数量',
      dataIndex: 'totalQty',
      key: 'totalQty',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
    },
  ];

  const purchaseInvoiceColumins = [
    {
      title: 'id',
      dataIndex: 'uuid',
      key: 'uuid',
    },
    {
      title: '金额',
      valueType: 'money',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
    },
  ];

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `商品信息(${size(entry?.items)})`,
      children: (
        <ProTable
          columns={purchaseOrderItemColumns}
          dataSource={entry?.items}
          size="small"
          bordered={true}
          search={false}
          pagination={false}
          options={false}
        />
      ),
    },
    {
      key: '2',
      label: `入库凭证(${size(entry?.receiptNotes)})`,
      children: (
        <ProTable
          columns={receiptNoteColumns}
          dataSource={entry?.receiptNotes}
          size="small"
          bordered={true}
          search={false}
          pagination={false}
          options={false}
        />
      ),
    },
    {
      key: '3',
      label: `付款凭证(${size(entry?.purchaseInvoices)})`,
      children: (
        <ProTable
          columns={purchaseInvoiceColumins}
          dataSource={entry?.purchaseInvoices}
          size="small"
          bordered={true}
          search={false}
          pagination={false}
          options={false}
        />
      ),
    },
  ];

  console.log('entry', entry);

  return (
    <Drawer width={'60%'} title={entry?.uuid} onClose={onClose} open={visible} style={{ backgroundColor: '#f7f8fa' }}>
      <ProCard title="基本信息" style={{ marginTop: '10px' }}>
        <ProDescriptions column={3} size="small">
          <ProDescriptions.Item label="供应商名称">{entry?.supplierName}</ProDescriptions.Item>
          <ProDescriptions.Item label="状态">{entry.status}</ProDescriptions.Item>
          <ProDescriptions.Item label="入库状态">{entry.receiptStatus}</ProDescriptions.Item>
          <ProDescriptions.Item label="付款状态">{entry.billingStatus}</ProDescriptions.Item>
        </ProDescriptions>
      </ProCard>

      <ProCard style={{ marginTop: '10px' }}>
        <Tabs defaultActiveKey="1" items={items} />
      </ProCard>
    </Drawer>
  );
};

export default PurchaseOrderDetail;
