import { ProTable } from '@ant-design/pro-components';
import type { ProColumns } from '@ant-design/pro-components';

// locale
import client from '@/gql/apollo';
import { WarehousesDocument } from '@/gql';

const WarehouseList: React.FC = () => {
  const columns: ProColumns<any>[] = [
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
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
          query: WarehousesDocument,
          variables: {
            request: {},
          },
        });

        return {
          data: data.warehouses,
          total: data.warehouses.length,
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

export default WarehouseList;
