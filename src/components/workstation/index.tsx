import { useRef } from 'react';
import { ProTable } from '@ant-design/pro-components';
import type { ActionType, ProColumns } from '@ant-design/pro-components';

// locale
import { useMessageContext } from '@/components/common/message-context';
import client from '@/gql/apollo';
import { WorkstationsDocument, useCreateWorkstationMutation } from '@/gql';
import { onError } from '@/utils';
import WorkstationNew from './new';

const WorkstationList: React.FC = () => {
  const { messageApi } = useMessageContext();
  const actionRef = useRef<ActionType | null>(null);

  const [createWorkstation] = useCreateWorkstationMutation({
    onCompleted: () => {
      messageApi?.success('工作站创建成功');
      handleReloadTable();
    },
    onError,
  });

  const handleCreate = async (values: any) => {
    await createWorkstation({ variables: { request: values } });
  };

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
      search={false}
      // search={{
      //   span: 6,
      //   layout: 'vertical',
      //   defaultCollapsed: true,
      // }}
      dateFormatter="string"
      toolBarRender={() => [<WorkstationNew key="workstation-new" onCreate={(values: any) => handleCreate(values)} />]}
    />
  );
};

export default WorkstationList;
