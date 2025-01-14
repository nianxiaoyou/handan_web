import { ProTable } from '@ant-design/pro-components';
import type { ProColumns } from '@ant-design/pro-components';

// locale
import client from '@/gql/apollo';
import { UoMsDocument } from '@/gql';

const UomList: React.FC = () => {
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
      columns={columns}
      request={async (params, sorter, filter) => {
        const { data } = await client.query({
          query: UoMsDocument,
          variables: {
            request: {},
          },
        });

        return {
          data: data.uoms,
          total: data.uoms.length,
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

export default UomList;
