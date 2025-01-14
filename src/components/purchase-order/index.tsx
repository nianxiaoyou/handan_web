import { useRef } from 'react';
import { useRouter } from 'next/router';
import { ProTable } from '@ant-design/pro-components';
import type { ActionType, ProColumns } from '@ant-design/pro-components';

// locale
import client from '@/gql/apollo';
import { useCreatePurchaseOrderMutation, PurchaseOrdersDocument } from '@/gql';
import { onError } from '@/utils';

const PurchaseOrderList: React.FC = () => {
  const router = useRouter();

  const [createPurchaseOrder] = useCreatePurchaseOrderMutation({
    onCompleted: () => {
      console.log('onCompleted');
      handleReloadTable();
    },
    onError,
  });

  const actionRef = useRef<ActionType | null>(null);

  const handleReloadTable = () => {
    actionRef.current?.reload();
  };

  const handleCreate = async (values: any) => {
    await createPurchaseOrder({ variables: { request: values } });
  };

  const columns: ProColumns<any>[] = [
    {
      title: '',
      key: 'supplierName',
      width: 200,
      dataIndex: 'supplierName',
    },
    {
      title: '',
      search: false,
      valueType: 'money',
      dataIndex: 'totalAmount',
    },
    {
      title: '',
      dataIndex: 'insertedAt',
      valueType: 'dateTime',
    },
  ];

  return (
    <ProTable
      actionRef={actionRef}
      columns={columns}
      request={async (params, sorter, filter) => {
        const { data } = await client.query({
          query: PurchaseOrdersDocument,
          variables: {
            request: {},
          },
        });

        return {
          data: data.purchaseOrders,
          total: data.purchaseOrders.length,
          success: true,
        };
      }}
      rowKey="uuid"
      pagination={{
        showQuickJumper: true,
      }}
      search={{
        layout: 'vertical',
        defaultCollapsed: true,
      }}
      dateFormatter="string"
      // toolBarRender={() => [<PurchaseOrderNew key="purchase-order-new" onCreate={(values: any) => handleCreate(values)} />]}
    />
  );
};

export default PurchaseOrderList;
