import { useEffect, useState } from 'react';
import { Drawer } from 'antd';
import { ProDescriptions, ProCard, ProTable } from '@ant-design/pro-components';

// locale
import { useWorkOrderLazyQuery } from '@/gql';
import { onError } from '@/utils';

const WorkOrderDetail = ({ uuid, visible, record, onClose }: any) => {
  const [entry, setEntry] = useState<any>({});

  useEffect(() => {
    if (!uuid) {
      return;
    }
    fetchWorkOrder({ variables: { request: { uuid } } });
  }, [uuid]); // eslint-disable-line

  const [fetchWorkOrder] = useWorkOrderLazyQuery({
    fetchPolicy: 'no-cache',
    onCompleted: (data: any) => {
      setEntry(data.workOrder);
    },
    onError,
  });

  const workOrderItemColumns = [
    {
      title: '名称',
      dataIndex: 'itemName',
      key: 'itemName',
    },
    {
      title: '工艺名称',
      dataIndex: 'processName',
      key: 'processName',
    },
    {
      title: '数量',
      dataIndex: 'requiredQty',
      key: 'requiredQty',
    },
    {
      title: '已完成数量',
      dataIndex: 'producedQty',
      key: 'producedQty',
    },
    {
      title: '顺序',
      dataIndex: 'position',
      key: 'position',
    },
  ];

  const materialRequestColumns = [
    {
      title: '物料名称',
      dataIndex: 'itemName',
      key: 'itemName',
    },
    {
      title: '实际数量',
      dataIndex: 'actualQty',
      key: 'actualQty',
    },
    {
      title: '已接收数量',
      dataIndex: 'receivedQty',
      key: 'receivedQty',
    },
    {
      title: '还需要数量',
      dataIndex: 'remainingQty',
      key: 'remainingQty',
    },
  ];

  return (
    <Drawer width={'60%'} title={entry?.code} onClose={onClose} open={visible} style={{ backgroundColor: '#f7f8fa' }}>
      <ProCard title="基本信息" style={{ marginTop: '10px' }}>
        <ProDescriptions column={3} size="small">
          <ProDescriptions.Item label="生产产品">{entry.itemName}</ProDescriptions.Item>
          <ProDescriptions.Item label="状态">{entry.status}</ProDescriptions.Item>
          <ProDescriptions.Item label="开始时间" valueType="dateTime">
            {entry.startTime}
          </ProDescriptions.Item>
          <ProDescriptions.Item label="结束时间" valueType="dateTime">
            {entry.endTime}
          </ProDescriptions.Item>
        </ProDescriptions>
      </ProCard>

      <ProCard title="工单信息" style={{ marginTop: '10px' }}>
        <ProTable
          columns={workOrderItemColumns}
          dataSource={entry?.items}
          size="small"
          bordered={true}
          search={false}
          pagination={false}
          options={false}
        />
      </ProCard>
      <ProCard title="物料需求" style={{ marginTop: '10px' }}>
        <ProTable
          columns={materialRequestColumns}
          dataSource={entry?.materialRequests}
          size="small"
          bordered={true}
          search={false}
          pagination={false}
          options={false}
        />
      </ProCard>
    </Drawer>
  );
};

export default WorkOrderDetail;
