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
      title: '名称',
      key: 'name',
      width: 200,
      dataIndex: 'name',
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
