import { useEffect, useState } from 'react';
import { Drawer, TabsProps, Tabs } from 'antd';
import { ProDescriptions, ProCard, ProTable } from '@ant-design/pro-components';
import size from 'lodash.size';

// locale
import { useReceiptNoteLazyQuery } from '@/gql';
import { onError } from '@/utils';

const ReceiptNoteDetail = ({ uuid, visible, record, onClose }: any) => {
  const [entry, setEntry] = useState<any>({});

  useEffect(() => {
    if (!uuid) {
      return;
    }
    fetchReceiptNote({ variables: { request: { receiptNoteUuid: uuid } } });
  }, [uuid]); // eslint-disable-line

  const [fetchReceiptNote] = useReceiptNoteLazyQuery({
    fetchPolicy: 'no-cache',
    onCompleted: (data: any) => {
      setEntry(data.receiptNote);
    },
    onError,
  });

  const receiptNoteItemColumns = [
    {
      title: '商品名称',
      dataIndex: 'itemName',
      key: 'itemName',
    },
    {
      title: '数量',
      dataIndex: 'actualQty',
      key: 'actualQty',
      render: (text: any, record: any) => (
        <span>
          {record.actualQty} {record.uomName}
        </span>
      ),
    },
    {
      title: '单价',
      dataIndex: 'unitPrice',
      valueType: 'money',
      key: 'unitPrice',
    },
    {
      title: '金额',
      valueType: 'money',
      dataIndex: 'amount',
      key: 'amount',
    },
  ];

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `商品信息(${size(entry?.items)})`,
      children: (
        <ProTable
          columns={receiptNoteItemColumns}
          dataSource={entry?.items}
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
          <ProDescriptions.Item label="仓库名称">{entry.warehouseName}</ProDescriptions.Item>
        </ProDescriptions>
      </ProCard>

      <ProCard style={{ marginTop: '10px' }}>
        <Tabs defaultActiveKey="1" items={items} />
      </ProCard>
    </Drawer>
  );
};

export default ReceiptNoteDetail;
