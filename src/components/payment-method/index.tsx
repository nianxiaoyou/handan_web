import { useRef } from 'react';
import { useRouter } from 'next/router';
import { ProTable } from '@ant-design/pro-components';
import type { ActionType, ProColumns } from '@ant-design/pro-components';

// locale
import client from '@/gql/apollo';
import { PaymentMethodsDocument, useCreatePaymentMethodMutation } from '@/gql';
import { onError } from '@/utils';

import PaymentMethodNew from './new';

const PaymentMethodList: React.FC = () => {
  const router = useRouter();

  const [createPaymentMethod] = useCreatePaymentMethodMutation({
    onCompleted: () => {
      handleReloadTable();
    },
    onError,
  });

  const actionRef = useRef<ActionType | null>(null);

  const handleReloadTable = () => {
    actionRef.current?.reload();
  };

  const handleCreate = async (request: any) => {
    await createPaymentMethod({ variables: { request } });
  };

  const columns: ProColumns<any>[] = [
    {
      title: '名称',
      key: 'name',
      width: 200,
      dataIndex: 'name',
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
          query: PaymentMethodsDocument,
          variables: {
            request: {},
          },
        });

        return {
          data: data.paymentMethods,
          total: data.paymentMethods.length,
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
      toolBarRender={() => [
        <PaymentMethodNew key="payment-method-new" onCreate={(values: any) => handleCreate(values)} />,
      ]}
    />
  );
};

export default PaymentMethodList;
