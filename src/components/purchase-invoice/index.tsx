import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { ProTable } from '@ant-design/pro-components';
import { Button } from 'antd';
import type { ActionType, ProColumns } from '@ant-design/pro-components';

// locale
import { useMessageContext } from '@/components/common/message-context';
import client from '@/gql/apollo';
import { PurchaseInvoicesDocument } from '@/gql';

import PaymentEntryNew from '@/components/payment-entry/new';

const PurchaseInvoiceList: React.FC = () => {
  const { messageApi } = useMessageContext();
  const [detailVisible, setDetailVisible] = useState(false);
  const [record, setRecord] = useState(null);

  const router = useRouter();

  const actionRef = useRef<ActionType | null>(null);

  const handleEntryNew = (record: any) => {
    setRecord(record);
    setDetailVisible(true);
  };

  const handleClose = () => {
    setRecord(null);
    setDetailVisible(false);
    handleReloadTable();
  };

  const handleReloadTable = () => {
    actionRef.current?.reload();
  };

  const columns: ProColumns<any>[] = [
    {
      title: '单号',
      width: 200,
      dataIndex: 'code',
    },
    {
      title: '供应商名称',
      dataIndex: 'supplierName',
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
          {record.status === 'unpaid' && (
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
            query: PurchaseInvoicesDocument,
            variables: {
              request: {},
            },
          });

          return {
            data: data.purchaseInvoices,
            total: data.purchaseInvoices.length,
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

      <PaymentEntryNew visible={detailVisible} purchaseInvoice={record} onClose={() => handleClose()} />
    </>
  );
};

export default PurchaseInvoiceList;
