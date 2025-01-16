import { useRef, useState } from 'react';
import { Button } from 'antd';
import { ProTable } from '@ant-design/pro-components';
import type { ActionType, ProColumns } from '@ant-design/pro-components';

// locale
import client from '@/gql/apollo';
import { SalesInvoicesDocument } from '@/gql';

import PaymentEntryNew from '@/components/payment-entry/new';

const SalesInvoiceList: React.FC = () => {
  const actionRef = useRef<ActionType | null>(null);

  const [detailVisible, setDetailVisible] = useState(false);
  const [record, setRecord] = useState<any>(null);

  const handleReloadTable = () => {
    actionRef.current?.reload();
  };

  const handleEntryNew = (record: any) => {
    setRecord(record);
    setDetailVisible(true);
  };

  const handleClose = () => {
    setRecord(null);
    setDetailVisible(false);
    handleReloadTable();
  };

  const columns: ProColumns<any>[] = [
    {
      title: '单号',
      width: 200,
      dataIndex: 'code',
    },
    {
      title: '客户名称',
      dataIndex: 'customerName',
    },
    {
      title: '金额',
      dataIndex: 'amount',
      valueType: 'money',
    },
    {
      title: '状态',
      dataIndex: 'status',
    },
    {
      title: '创建时间',
      dataIndex: 'insertedAt',
      valueType: 'dateTime',
    },
    {
      title: '操作',
      width: 180,
      key: 'option',
      valueType: 'option',
      render: (item: any, record: any) => [
        <>
          {record.status === 'submitted' && (
            <Button size="small" type="link" onClick={() => handleEntryNew(record)}>
              支付
            </Button>
          )}
        </>,
      ],
    },
  ];

  return (
    <>
      <ProTable
        actionRef={actionRef}
        columns={columns}
        request={async (params, sorter, filter) => {
          const { data } = await client.query({
            query: SalesInvoicesDocument,
            variables: {
              request: {},
            },
          });

          return {
            data: data.salesInvoices,
            total: data.salesInvoices.length,
            success: true,
          };
        }}
        rowKey="uuid"
        pagination={{
          showQuickJumper: true,
        }}
        search={false}
        // search={{
        //   span: 6,
        //   layout: 'vertical',
        //   defaultCollapsed: true,
        // }}
        dateFormatter="string"
      />

      <PaymentEntryNew visible={detailVisible} saleInvoice={record} onClose={() => handleClose()} />
    </>
  );
};

export default SalesInvoiceList;
