import { useRef, useState } from 'react';
import { ProTable } from '@ant-design/pro-components';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { Button } from 'antd';

// locale
import { useMessageContext } from '../common/message-context';
import client from '@/gql/apollo';
import { WorkOrderItemsDocument, useReportJobCardMutation } from '@/gql';
import { onError } from '@/utils';

import ReportJobCard from './report-job-card';
import ItemDetail from './item-detail';

const WorkOrderItems: React.FC = () => {
  const { messageApi } = useMessageContext();

  const [detailVisible, setDetailVisible] = useState(false);
  const [record, setRecord] = useState<any>({});

  const [reportJobCard] = useReportJobCardMutation({
    onCompleted: () => {
      messageApi?.success('生产报工成功');
      handleReloadTable();
    },
    onError,
  });

  const actionRef = useRef<ActionType | null>(null);

  const handleReloadTable = () => {
    actionRef.current?.reload();
  };

  const handleReportJob = async (values: any) => {
    await reportJobCard({ variables: { request: values } });
  };

  const handleDetail = (record: any) => {
    setDetailVisible(true);
    setRecord(record);
  };

  const columns: ProColumns<any>[] = [
    // {
    //   title: 'uuid',
    //   width: 200,
    //   dataIndex: 'workOrderUuid',
    // },
    {
      title: '产品名称',
      key: 'itemName',
      width: 200,
      dataIndex: 'itemName',
      render: (text, record) => (
        <Button type="link" onClick={() => handleDetail(record)}>
          {text}
        </Button>
      ),
    },
    {
      title: '工艺名称',
      dataIndex: 'processName',
    },
    {
      title: '需求数量',
      dataIndex: 'requiredQty',
    },
    {
      title: '已生产数量',
      dataIndex: 'producedQty',
    },
    // {
    //   title: '缺陷数量',
    //   dataIndex: 'defectiveQty',
    // },
    {
      title: '顺序',
      dataIndex: 'position',
    },
    {
      title: '操作',
      width: 180,
      key: 'option',
      valueType: 'option',
      render: (item: any, record: any) => [
        <>
          {record.producedQty < record.requiredQty && (
            <ReportJobCard key="link2" record={record} onCreate={handleReportJob} />
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
            query: WorkOrderItemsDocument,
            variables: {
              request: {},
            },
          });

          return {
            data: data.workOrderItems,
            total: data.workOrderItems.length,
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
      />

      <ItemDetail uuid={record?.uuid} visible={detailVisible} record={record} onClose={() => setDetailVisible(false)} />
    </>
  );
};

export default WorkOrderItems;
