import { useRef, useState } from 'react';
import { Button, Popconfirm } from 'antd';
import { ProTable } from '@ant-design/pro-components';
import type { ActionType, ProColumns } from '@ant-design/pro-components';

// locale
import { useMessageContext } from '@/components/common/message-context';
import client from '@/gql/apollo';
import {
  WorkOrdersDocument,
  useCreateWorkOrderMutation,
  useStoreFinishItemMutation,
  useScheduleWorkOrderMutation,
} from '@/gql';
import { onError } from '@/utils';

import WorkOrderNew from './new';
import WorkOrderDetail from './detail';
import StoredItem from './stored-item';

const WorkOrderList: React.FC = () => {
  const { messageApi } = useMessageContext();

  const [detailVisible, setDetailVisible] = useState(false);
  const [record, setRecord] = useState<any>(null);

  const [storeFinishItem] = useStoreFinishItemMutation({
    onCompleted: () => {
      messageApi?.success('入库成功');
      handleReloadTable();
    },
    onError,
  });

  const [createWorkOrder] = useCreateWorkOrderMutation({
    onCompleted: () => {
      messageApi?.success('创建工单成功');
      handleReloadTable();
    },
    onError,
  });

  const [scheduleWorkOrder] = useScheduleWorkOrderMutation({
    onCompleted: () => {
      messageApi?.success('排产成功');
      handleReloadTable();
    },
    onError,
  });

  const actionRef = useRef<ActionType | null>(null);

  const handleReloadTable = () => {
    actionRef.current?.reload();
  };

  const handleCreate = async (values: any) => {
    await createWorkOrder({ variables: { request: values } });
  };

  const handleDetail = (record: any) => {
    setDetailVisible(true);
    setRecord(record);
  };

  const handleStoredItem = async (values: any) => {
    // console.log(values);
    await storeFinishItem({ variables: { request: values } });
  };

  const handleScheduleWorkOrder = async (values: any) => {
    const request = {
      workOrderUuid: values.uuid,
    };

    await scheduleWorkOrder({ variables: { request } });
  };

  const columns: ProColumns<any>[] = [
    {
      title: '单号',
      key: 'code',
      width: 200,
      dataIndex: 'code',
      render: (text, record) => (
        <Button type="link" onClick={() => handleDetail(record)}>
          {text}
        </Button>
      ),
    },
    {
      title: '产品名称',
      key: 'itemName',
      dataIndex: 'itemName',
    },
    {
      title: '状态',
      key: 'status',
      dataIndex: 'status',
    },
    {
      title: '计划生产数量',
      dataIndex: 'plannedQty',
    },
    {
      title: '已生产数量',
      dataIndex: 'producedQty',
    },
    {
      title: '已入库数量',
      dataIndex: 'storedQty',
    },
    {
      title: '开始时间',
      dataIndex: 'startTime',
      valueType: 'date',
    },
    {
      title: '结束时间',
      dataIndex: 'endTime',
      valueType: 'date',
    },
    {
      title: '操作',
      width: 180,
      key: 'option',
      valueType: 'option',
      render: (item: any, record: any) => [
        <>
          {record.producedQty > record.storedQty && (
            <StoredItem key="link2" record={record} onCreate={handleStoredItem} />
          )}
        </>,
        <>
          {record.status === 'draft' && (
            <Popconfirm
              key="link2"
              title="确定排产吗？"
              onConfirm={() => handleScheduleWorkOrder(record)}
              okText="是"
              cancelText="否"
            >
              <a style={{ color: '#1677ff' }} key="link2">
                开始排产
              </a>
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
            query: WorkOrdersDocument,
            variables: {
              request: {},
            },
          });

          return {
            data: data.workOrders,
            total: data.workOrders.length,
            success: true,
          };
        }}
        rowKey="uuid"
        pagination={{
          showQuickJumper: true,
        }}
        search={false}
        // search={{
        //   layout: 'vertical',
        //   defaultCollapsed: true,
        // }}
        dateFormatter="string"
        toolBarRender={() => [<WorkOrderNew key="work-order-new" onCreate={(values: any) => handleCreate(values)} />]}
      />
      <WorkOrderDetail
        uuid={record?.uuid}
        visible={detailVisible}
        record={record}
        onClose={() => setDetailVisible(false)}
      />
    </>
  );
};

export default WorkOrderList;
