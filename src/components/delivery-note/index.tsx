import { useRef } from 'react';
import { useRouter } from 'next/router';
import { ProTable } from '@ant-design/pro-components';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { Popconfirm } from 'antd';

// locale
import { useMessageContext } from '@/components/common/message-context';
import client from '@/gql/apollo';
import { useCreateDeliveryNoteMutation, useConfirmDeliveryNoteMutation, DeliveryNotesDocument } from '@/gql';
import { onError } from '@/utils';
import { fetchWarehouses } from '@/utils/api';

const DeliveryNoteList: React.FC = () => {
  const { messageApi } = useMessageContext();
  const router = useRouter();

  const [createDeliveryNote] = useCreateDeliveryNoteMutation({
    onCompleted: () => {
      messageApi?.success('出库凭证创建成功');
      handleReloadTable();
    },
    onError,
  });

  const [confirmDeliveryNote] = useConfirmDeliveryNoteMutation({
    onCompleted: () => {
      messageApi?.success('出库凭证审核成功');
      handleReloadTable();
    },
    onError,
  });

  const actionRef = useRef<ActionType | null>(null);

  const handleReloadTable = () => {
    actionRef.current?.reload();
  };

  const handleConfirmDeliveryNote = async (values: any) => {
    const request = {
      salesOrderUuid: values.salesOrderUuid,
      deliveryNoteUuid: values.uuid,
    };

    await confirmDeliveryNote({ variables: { request } });
  };

  const columns: ProColumns<any>[] = [
    {
      title: '仓库名称',
      key: 'warehouseUuid',
      dataIndex: 'warehouseName',
      valueType: 'select',
      request: () => fetchWarehouses({}),
    },
    {
      title: '客户名称',
      dataIndex: 'customerName',
    },
    {
      title: '总数量',
      dataIndex: 'totalQty',
    },
    {
      title: '状态',
      dataIndex: 'status',
    },
    {
      title: '创建时间',
      dataIndex: 'insertedAt',
      valueType: 'dateTime',
    },
    {
      title: '操作',
      width: 180,
      key: 'option',
      valueType: 'option',
      render: (item: any, record: any) => [
        <>
          {record.status === 'draft' && (
            <Popconfirm
              key="link2"
              title="确定提交吗？"
              onConfirm={() => handleConfirmDeliveryNote(record)}
              okText="是"
              cancelText="否"
            >
              <a key="link2">审核</a>
            </Popconfirm>
          )}
        </>,
      ],
    },
  ];

  return (
    <ProTable
      actionRef={actionRef}
      columns={columns}
      request={async (params, sorter, filter) => {
        const { data } = await client.query({
          query: DeliveryNotesDocument,
          variables: {
            request: {},
          },
        });

        return {
          data: data.deliveryNotes,
          total: data.deliveryNotes.length,
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

export default DeliveryNoteList;
