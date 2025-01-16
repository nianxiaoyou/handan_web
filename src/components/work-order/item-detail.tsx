import { useEffect, useState } from 'react';
import { Drawer } from 'antd';
import { ProDescriptions, ProCard, ProTable } from '@ant-design/pro-components';

// locale
import { useWorkOrderItemLazyQuery } from '@/gql';
import { onError } from '@/utils';

const WorkOrderDetail = ({ uuid, visible, record, onClose }: any) => {
  const [entry, setEntry] = useState<any>({});

  useEffect(() => {
    if (!uuid) {
      return;
    }
    fetchWorkOrderItem({ variables: { request: { uuid } } });
  }, [uuid]); // eslint-disable-line

  const [fetchWorkOrderItem] = useWorkOrderItemLazyQuery({
    fetchPolicy: 'no-cache',
    onCompleted: (data: any) => {
      setEntry(data.workOrderItem);
    },
    onError,
  });

  const jobCardColumns = [
    {
      title: '操作员',
      key: 'operatorStaffUuid',
      dataIndex: ['operatorStaff', 'email'],
    },
    {
      title: '生产数量',
      dataIndex: 'producedQty',
      key: 'producedQty',
    },
    {
      title: '开始时间',
      dataIndex: 'startTime',
      valueType: 'dateTime',
      key: 'startTime',
    },
    {
      title: '结束时间',
      dataIndex: 'endTime',
      valueType: 'dateTime',
      key: 'endTime',
    },
  ];

  return (
    <Drawer width={'60%'} title={entry?.uuid} onClose={onClose} open={visible} style={{ backgroundColor: '#f7f8fa' }}>
      <ProCard title="基本信息" style={{ marginTop: '10px' }}>
        <ProDescriptions column={3} size="small">
          <ProDescriptions.Item label="产品名称">{entry.itemName}</ProDescriptions.Item>
          <ProDescriptions.Item label="工艺名称">{entry.processName}</ProDescriptions.Item>
          <ProDescriptions.Item label="顺序">{entry.position}</ProDescriptions.Item>
          <ProDescriptions.Item label="数量">{entry.requiredQty}</ProDescriptions.Item>
          {/* <ProDescriptions.Item label="缺陷数量">{entry.defectiveQty}</ProDescriptions.Item> */}
          <ProDescriptions.Item label="生产数量">{entry.producedQty}</ProDescriptions.Item>
        </ProDescriptions>
      </ProCard>

      <ProCard title="生产报工" style={{ marginTop: '10px' }}>
        <ProTable
          columns={jobCardColumns}
          dataSource={entry?.jobCards}
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
