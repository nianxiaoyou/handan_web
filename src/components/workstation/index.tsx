import { useRef } from 'react';
import { useRouter } from 'next/router';
import { ProTable } from '@ant-design/pro-components';
import type { ActionType, ProColumns } from '@ant-design/pro-components';

// locale
import client from '@/gql/apollo';
import { WorkstationsDocument } from '@/gql';

const WorkstationList: React.FC = () => {
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
          query: WorkstationsDocument,
          variables: {
            request: {},
          },
        });

        return {
          data: data.workstations,
          total: data.workstations.length,
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

export default WorkstationList;
