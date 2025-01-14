import { useRef } from 'react';
import { useRouter } from 'next/router';
import { ProTable } from '@ant-design/pro-components';
import type { ActionType, ProColumns } from '@ant-design/pro-components';

// locale
import { useMessageContext } from '@/components/common/message-context';
import client from '@/gql/apollo';
import { SuppliersDocument, useCreateSupplierMutation } from '@/gql';
import { onError } from '@/utils';
import SupplierNew from './new';

const SupplierList: React.FC = () => {
  const { messageApi } = useMessageContext();
  const router = useRouter();

  const [createSupplier] = useCreateSupplierMutation({
    onCompleted: () => {
      messageApi?.success('供应商创建成功');
      handleReloadTable();
    },
    onError,
  });

  const actionRef = useRef<ActionType | null>(null);

  const handleReloadTable = () => {
    actionRef.current?.reload();
  };

  const handleCreate = async (values: any) => {
    await createSupplier({ variables: { request: values } });
  };

  const columns: ProColumns<any>[] = [
    {
      title: '名称',
      key: 'name',
      dataIndex: 'name',
    },
    {
      title: '地址',
      key: 'address',
      search: false,
      dataIndex: 'address',
    },
    {
      title: '创建时间',
      dataIndex: 'insertedAt',
      search: false,
      valueType: 'dateTime',
    },
  ];

  return (
    <ProTable
      actionRef={actionRef}
      columns={columns}
      request={async (params, sorter, filter) => {
        const { data } = await client.query({
          query: SuppliersDocument,
          variables: {
            request: {},
          },
        });

        return {
          data: data.suppliers,
          total: data.suppliers.length,
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
      toolBarRender={() => [<SupplierNew key="supplier-new" onCreate={(values: any) => handleCreate(values)} />]}
    />
  );
};

export default SupplierList;
