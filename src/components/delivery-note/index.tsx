import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { ProTable } from '@ant-design/pro-components';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { Popconfirm, Button } from 'antd';

// locale
import { useMessageContext } from '@/components/common/message-context';
import client from '@/gql/apollo';
import { useConfirmDeliveryNoteMutation, useCompleteDeliveryNoteMutation, DeliveryNotesDocument } from '@/gql';
import { onError } from '@/utils';
import { fetchWarehouses } from '@/utils/api';

import DeliveryNoteDetail from './detail';

const DeliveryNoteList: React.FC = () => {
  const { messageApi } = useMessageContext();
  const router = useRouter();

  const [detailVisible, setDetailVisible] = useState(false);
  const [record, setRecord] = useState<any>({});

  const [confirmDeliveryNote] = useConfirmDeliveryNoteMutation({
    onCompleted: () => {
      messageApi?.success('出库凭证提交成功');
      handleReloadTable();
    },
    onError,
  });

  const [completeDeliveryNote] = useCompleteDeliveryNoteMutation({
    onCompleted: () => {
      messageApi?.success('出库凭证完成成功');
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

  const handleCompleteDeliveryNote = async (values: any) => {
    const request = {
      salesOrderUuid: values.salesOrderUuid,
      deliveryNoteUuid: values.uuid,
    };

    await completeDeliveryNote({ variables: { request } });
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
      search: false,
      render: (text, record) => (
        <Button type="link" onClick={() => handleDetail(record)}>
          {text}
        </Button>
      ),
    },
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
              <a key="link2">确定</a>
            </Popconfirm>
          )}
        </>,
        <>
          {record.status === 'to_deliver' && (
            <Popconfirm
              key="link2"
              title="确定完成吗？"
              onConfirm={() => handleCompleteDeliveryNote(record)}
              okText="是"
              cancelText="否"
            >
              <a key="link2">出库</a>
            </Popconfirm>
          )}
        </>,
      ],
    },
  ];

  return (
    <>
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

      <DeliveryNoteDetail
        uuid={record?.uuid}
        visible={detailVisible}
        record={record}
        onClose={() => setDetailVisible(false)}
      />
    </>
  );
};

export default DeliveryNoteList;
