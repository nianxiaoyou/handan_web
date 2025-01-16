import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { ProTable } from '@ant-design/pro-components';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { Popconfirm, Button, Tag } from 'antd';

// locale
import { useMessageContext } from '@/components/common/message-context';
import client from '@/gql/apollo';
import {
  useCreatePurchaseOrderMutation,
  useCreateReceiptNoteMutation,
  useCreatePurchaseInvoiceMutation,
  PurchaseOrdersDocument,
} from '@/gql';
import { onError } from '@/utils';

import PurchaseOrderNew from './new';
import PurchaseOrderDetail from './detail';
import PurchaseInvoiceNew from './invoice-new';

const PurchaseOrderList: React.FC = () => {
  const { messageApi } = useMessageContext();
  const router = useRouter();

  const [detailVisible, setDetailVisible] = useState(false);
  const [record, setRecord] = useState<any>(null);

  const [createPurchaseOrder] = useCreatePurchaseOrderMutation({
    onCompleted: () => {
      messageApi?.success('采购订单创建成功');
      handleReloadTable();
    },
    onError,
  });

  const [createReceiptNote] = useCreateReceiptNoteMutation({
    onCompleted: () => {
      messageApi?.success('收货凭证创建成功');
      handleReloadTable();
    },
    onError,
  });

  const [createPurchaseInvoice] = useCreatePurchaseInvoiceMutation({
    onCompleted: () => {
      messageApi?.success('采购发票创建成功');
      handleReloadTable();
    },
    onError,
  });

  const handleDetail = (record: any) => {
    setDetailVisible(true);
    setRecord(record);
  };

  const actionRef = useRef<ActionType | null>(null);

  const handleReloadTable = () => {
    actionRef.current?.reload();
  };

  const handleCreate = async (values: any) => {
    await createPurchaseOrder({ variables: { request: values } });
  };

  const handleReceiptNote = async (values: any) => {
    const receiptItems = values.items.map((item: any) => ({
      purchaseOrderItemUuid: item.uuid,
      actualQty: item.orderedQty,
    }));

    const request = {
      purchaseOrderUuid: values.uuid,
      receiptItems,
    };

    await createReceiptNote({ variables: { request } });
  };

  const handleInvoice = async (request: any) => {
    await createPurchaseInvoice({ variables: { request } });
  };

  const columns: ProColumns<any>[] = [
    {
      title: '单号',
      dataIndex: 'code',
      render: (text, record) => (
        <Button type="link" onClick={() => handleDetail(record)}>
          {text}
        </Button>
      ),
    },
    {
      title: '供应商名称',
      key: 'supplierName',
      dataIndex: 'supplierName',
    },
    {
      title: '状态',
      dataIndex: 'status',
    },
    {
      title: '入库状态',
      dataIndex: 'receiptStatus',
    },
    {
      title: '付款状态',
      dataIndex: 'billingStatus',
    },
    {
      title: '待支付/已支付/总额',
      dataIndex: 'totalAmount',
      search: false,
      width: 200,
      render: (item: any, record: any) => (
        <>
          <Tag color="red">{record.remainingAmount}</Tag>
          <Tag color="green">{record.paidAmount}</Tag>
          <Tag>{record.totalAmount}</Tag>
        </>
      ),
    },
    {
      title: '仓库',
      dataIndex: 'warehouseName',
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
          {record.status !== 'draft' && record.billingStatus != 'fully_billed' && (
            <PurchaseInvoiceNew key="purchase-invoice-new" record={record} onCallback={handleInvoice} />
          )}
        </>,
        <>
          {record.status !== 'draft' && record.receiptStatus != 'fully_received' && (
            <Popconfirm
              key="link2"
              title="确定入库吗？"
              onConfirm={() => handleReceiptNote(record)}
              okText="是"
              cancelText="否"
            >
              <a style={{ color: '#1677ff' }} key="link2">
                添加入库凭证
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
            query: PurchaseOrdersDocument,
            variables: {
              request: {},
            },
          });

          return {
            data: data.purchaseOrders,
            total: data.purchaseOrders.length,
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
        toolBarRender={() => [
          <PurchaseOrderNew key="purchase-order-new" onCreate={(values: any) => handleCreate(values)} />,
        ]}
      />
      <PurchaseOrderDetail
        uuid={record?.uuid}
        visible={detailVisible}
        record={record}
        onClose={() => setDetailVisible(false)}
      />
    </>
  );
};

export default PurchaseOrderList;
