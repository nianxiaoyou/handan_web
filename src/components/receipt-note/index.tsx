import { useRef, useState } from 'react';
import { ProTable } from '@ant-design/pro-components';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { Popconfirm, Button } from 'antd';
import size from 'lodash.size';

// locale
import { useMessageContext } from '@/components/common/message-context';
import client from '@/gql/apollo';
import { useCompleteReceiptNoteMutation, ReceiptNotesDocument } from '@/gql';
import { onError } from '@/utils';

import DeliveryNoteDetail from './detail';

const ReceiptNoteList: React.FC = () => {
  const { messageApi } = useMessageContext();

  const [detailVisible, setDetailVisible] = useState(false);
  const [record, setRecord] = useState<any>({});

  const [completeReceiptNote] = useCompleteReceiptNoteMutation({
    onCompleted: () => {
      messageApi?.success('入库凭证完成成功');
      handleReloadTable();
    },
    onError,
  });

  const actionRef = useRef<ActionType | null>(null);

  const handleReloadTable = () => {
    actionRef.current?.reload();
  };

  const handleCompleteReceiptNote = async (values: any) => {
    const request = {
      purchaseOrderUuid: values.purchaseOrderUuid,
      receiptNoteUuid: values.uuid,
    };

    await completeReceiptNote({ variables: { request } });
  };

  const handleDetail = (record: any) => {
    setDetailVisible(true);
    setRecord(record);
  };

  const columns: ProColumns<any>[] = [
    {
      title: '单号',
      width: 200,
      dataIndex: 'code',
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
      dataIndex: ['warehouse', 'name'],
    },
    {
      title: '供应商名称',
      dataIndex: 'supplierName',
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
          {record.status === 'to_receive' && (
            <Popconfirm
              key="link2"
              title="确定入库吗？"
              onConfirm={() => handleCompleteReceiptNote(record)}
              okText="是"
              cancelText="否"
            >
              <a key="link2">入库</a>
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
            query: ReceiptNotesDocument,
            variables: {
              request: {},
            },
          });

          return {
            data: data.receiptNotes,
            total: size(data.receiptNotes),
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

export default ReceiptNoteList;
