import { useRouter } from 'next/router';
import { ProTable } from '@ant-design/pro-components';
import type { ProColumns } from '@ant-design/pro-components';

// locale
import { useMessageContext } from '@/components/common/message-context';
import client from '@/gql/apollo';
import { InventoryEntriesDocument } from '@/gql';

const InventoryEntryList: React.FC = () => {
  const { messageApi } = useMessageContext();
  const router = useRouter();

  const columns: ProColumns<any>[] = [
    {
      title: '物品',
      search: false,
      dataIndex: ['item', 'name'],
    },
    {
      title: '转移数量',
      dataIndex: 'actualQty',
      search: false,
    },
    {
      title: '转移后库存',
      search: false,
      dataIndex: 'qtyAfterTransaction',
    },
    {
      title: '类型',
      dataIndex: 'type',
    },
    {
      title: '仓库',
      dataIndex: ['warehouse', 'name'],
      search: false,
    },
    {
      title: '库存单位',
      dataIndex: ['stockUom', 'uomName'],
      search: false,
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
      columns={columns}
      request={async (params, sorter, filter) => {
        const { data } = await client.query({
          query: InventoryEntriesDocument,
          variables: {
            request: {},
          },
        });

        console.log('data:', data);

        return {
          data: data.inventoryEntries,
          total: data.inventoryEntries.length,
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
    />
  );
};

export default InventoryEntryList;
