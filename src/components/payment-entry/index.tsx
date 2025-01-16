import { useRef } from 'react';
import { useRouter } from 'next/router';
import { ProTable } from '@ant-design/pro-components';
import type { ActionType, ProColumns } from '@ant-design/pro-components';

// locale
import client from '@/gql/apollo';
import { PaymentEntriesDocument } from '@/gql';

const PaymentEntryList: React.FC = () => {
  const router = useRouter();
  const actionRef = useRef<ActionType | null>(null);

  const handleReloadTable = () => {
    actionRef.current?.reload();
  };

  const columns: ProColumns<any>[] = [
    {
      title: '单号',
      key: 'code',
      dataIndex: 'code',
    },
    {
      title: '类型',
      dataIndex: 'type',
    },
    {
      title: '合作伙伴',
      dataIndex: 'partyName',
    },
    {
      title: '金额',
      valueType: 'money',
      dataIndex: 'totalAmount',
    },
    {
      title: '支付方式',
      dataIndex: ['paymentMethod', 'name'],
    },
    {
      title: '创建时间',
      valueType: 'dateTime',
      dataIndex: 'insertedAt',
    },
  ];

  return (
    <ProTable
      actionRef={actionRef}
      columns={columns}
      request={async (params, sorter, filter) => {
        const { data } = await client.query({
          query: PaymentEntriesDocument,
          variables: {
            request: {},
          },
        });

        return {
          data: data.paymentEntries,
          total: data.paymentEntries.length,
          success: true,
        };
      }}
      rowKey="uuid"
      pagination={{
        showQuickJumper: true,
      }}
      search={false}
      // search={{
      //   layout: 'vertical',
      //   defaultCollapsed: true,
      // }}
      dateFormatter="string"
    />
  );
};

export default PaymentEntryList;
