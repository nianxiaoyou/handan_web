import { useRef } from 'react';
import { useRouter } from 'next/router';
import { ProTable } from '@ant-design/pro-components';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { Tag } from 'antd';

// locale
import client from '@/gql/apollo';
import { useCreateSalesOrderMutation, SalesOrdersDocument } from '@/gql';
import { onError } from '@/utils';
import { fetchCustomers } from '@/utils/api';

import SalesOrderNew from './new';

const SalesOrderList: React.FC = () => {
  const router = useRouter();

  const [createSalesOrder] = useCreateSalesOrderMutation({
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
    await createSalesOrder({ variables: { request: values } });
  };

  const columns: ProColumns<any>[] = [
    {
      title: '客户名称',
      key: 'customerUuid',
      dataIndex: 'customerName',
      valueType: 'select',
      request: () => fetchCustomers({}),
    },
    {
      title: '状态',
      dataIndex: 'status',
    },
    {
      title: '发货状态',
      dataIndex: 'deliveryStatus',
    },
    {
      title: '支付状态',
      dataIndex: 'billingStatus',
    },
    {
      title: '待支付/总额',
      dataIndex: 'pendingPayAmount',
      search: false,
      render: (item: any, record: any) => (
        <>
          <Tag color="red">{record.remainingAmount}</Tag>
          <Tag>{record.totalAmount}</Tag>
        </>
      ),
    },
    {
      title: '创建时间',
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
          query: SalesOrdersDocument,
          variables: {
            request: {},
          },
        });

        return {
          data: data.salesOrders,
          total: data.salesOrders.length,
          success: true,
        };
      }}
      rowKey="uuid"
      pagination={{
        showQuickJumper: true,
      }}
      search={{
        span: 6,
        layout: 'vertical',
        defaultCollapsed: true,
      }}
      dateFormatter="string"
      toolBarRender={() => [<SalesOrderNew key="sales-order-new" onCreate={(values: any) => handleCreate(values)} />]}
    />
  );
};

export default SalesOrderList;
