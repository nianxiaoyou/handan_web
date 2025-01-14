import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'antd';
import { ProTable } from '@ant-design/pro-components';
import type { ActionType, ProColumns } from '@ant-design/pro-components';

// locale
import { useMessageContext } from '../common/message-context';
import client from '@/gql/apollo';
import { BomsDocument, useCreateBomMutation } from '@/gql';
import { onError } from '@/utils';

import BOMNew from './new';
import BOMDetail from './detail';

const BOMList: React.FC = () => {
  const router = useRouter();
  const { messageApi } = useMessageContext();

  const [detailVisible, setDetailVisible] = useState(false);
  const [record, setRecord] = useState<any>({});

  const [createBOM] = useCreateBomMutation({
    onCompleted: () => {
      messageApi?.success('创建成功');
      handleReloadTable();
    },
    onError,
  });

  const actionRef = useRef<ActionType | null>(null);

  const handleReloadTable = () => {
    actionRef.current?.reload();
  };

  const handleCreate = async (values: any) => {
    await createBOM({ variables: { request: values } });
  };

  const handleDetail = (record: any) => {
    setDetailVisible(true);
    setRecord(record);
  };

  const columns: ProColumns<any>[] = [
    {
      title: 'uuid',
      key: 'uuid',
      dataIndex: 'uuid',
      render: (text, record) => (
        <Button type="link" onClick={() => handleDetail(record)}>
          {text}
        </Button>
      ),
    },
    {
      title: '名称',
      key: 'name',
      dataIndex: 'name',
    },
    {
      title: '创建时间',
      dataIndex: 'insertedAt',
      valueType: 'dateTime',
    },
  ];

  return (
    <>
      <ProTable
        actionRef={actionRef}
        columns={columns}
        request={async (params, sorter, filter) => {
          const { data } = await client.query({
            query: BomsDocument,
            variables: {
              request: {},
            },
          });

          return {
            data: data.boms,
            total: data.boms.length,
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
        toolBarRender={() => [<BOMNew key="bom-new" onCreate={(values: any) => handleCreate(values)} />]}
      />

      <BOMDetail uuid={record?.uuid} visible={detailVisible} record={record} onClose={() => setDetailVisible(false)} />
    </>
  );
};

export default BOMList;
