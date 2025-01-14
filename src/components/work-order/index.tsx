import { useRef } from 'react';
import { useRouter } from 'next/router';
import { ProTable } from '@ant-design/pro-components';
import type { ActionType, ProColumns } from '@ant-design/pro-components';

// locale
import client from '@/gql/apollo';
import { WorkOrdersDocument } from '@/gql';
// import SalesOrderNew from './new';

const WorkOrderList: React.FC = () => {
  const router = useRouter();
  const actionRef = useRef<ActionType | null>(null);

  const handleReloadTable = () => {
    actionRef.current?.reload();
  };

  const columns: ProColumns<any>[] = [
    {
      title: '产品名称',
      key: 'itemName',
      width: 200,
      dataIndex: 'itemName',
    },
    {
      title: 'plannedQty',
      dataIndex: 'plannedQty',
    },
    {
      title: '开始时间',
      dataIndex: 'startTime',
      valueType: 'date',
    },
    {
      title: '结束时间',
      dataIndex: 'endTime',
      valueType: 'date',
    },
  ];

  return (
    <ProTable
      actionRef={actionRef}
      columns={columns}
      request={async (params, sorter, filter) => {
        const { data } = await client.query({
          query: WorkOrdersDocument,
          variables: {
            request: {},
          },
        });

        return {
          data: data.workOrders,
          total: data.workOrders.length,
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
    />
  );
};

export default WorkOrderList;
