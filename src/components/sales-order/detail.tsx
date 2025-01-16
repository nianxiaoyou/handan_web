import { useEffect, useState } from 'react';
import { Drawer, TabsProps, Tabs } from 'antd';
import { ProDescriptions, ProCard, ProTable } from '@ant-design/pro-components';
import size from 'lodash.size';

// locale
import { useSalesOrderLazyQuery } from '@/gql';
import { onError } from '@/utils';

const SalesOrderDetail = ({ uuid, visible, record, onClose }: any) => {
  const [entry, setEntry] = useState<any>({});

  useEffect(() => {
    if (!uuid) {
      return;
    }
    fetchSalesOrder({ variables: { request: { salesOrderUuid: uuid } } });
  }, [uuid]); // eslint-disable-line

  const [fetchSalesOrder] = useSalesOrderLazyQuery({
    fetchPolicy: 'no-cache',
    onCompleted: (data: any) => {
      setEntry(data.salesOrder);
    },
    onError,
  });

  const salesOrderItemColumns = [
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
      key: 'unitPrice',
    },
    {
      title: '金额',
      dataIndex: 'amount',
      key: 'amount',
    },
  ];

  const deliveryNoteColumns = [
    {
      title: '单号',
      dataIndex: 'code',
      width: '100px',
      key: 'code',
    },
    {
      title: '出库数量',
      dataIndex: 'totalQty',
      key: 'totalQty',
    },
    // {
    //   title: '商品名称',
    //   dataIndex: 'itemName',
    //   key: 'itemName',
    // },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
    },
  ];

  const salesInvoiceColumins = [
    {
      title: '单号',
      dataIndex: 'code',
      width: '100px',
      key: 'code',
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
          columns={salesOrderItemColumns}
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
      label: `出库凭证(${size(entry?.deliveryNotes)})`,
      children: (
        <ProTable
          columns={deliveryNoteColumns}
          dataSource={entry?.deliveryNotes}
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
      label: `收款凭证(${size(entry?.salesInvoices)})`,
      children: (
        <ProTable
          columns={salesInvoiceColumins}
          dataSource={entry?.salesInvoices}
          size="small"
          bordered={true}
          search={false}
          pagination={false}
          options={false}
        />
      ),
    },
  ];

  return (
    <Drawer width={'60%'} title={entry?.code} onClose={onClose} open={visible} style={{ backgroundColor: '#f7f8fa' }}>
      <ProCard title="基本信息" style={{ marginTop: '10px' }}>
        <ProDescriptions column={3} size="small">
          <ProDescriptions.Item label="客户名称">{entry?.customerName}</ProDescriptions.Item>
          <ProDescriptions.Item label="状态">{entry.status}</ProDescriptions.Item>
          <ProDescriptions.Item label="支付状态">{entry.billingStatus}</ProDescriptions.Item>
          <ProDescriptions.Item label="发货状态">{entry.deliveryStatus}</ProDescriptions.Item>
        </ProDescriptions>
      </ProCard>

      <ProCard style={{ marginTop: '10px' }}>
        <Tabs defaultActiveKey="1" items={items} />
      </ProCard>
    </Drawer>
  );
};

export default SalesOrderDetail;
