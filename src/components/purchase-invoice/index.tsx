import { useRef } from 'react';
import { useRouter } from 'next/router';
import { ProTable } from '@ant-design/pro-components';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { Popconfirm } from 'antd';

// locale
import { useMessageContext } from '@/components/common/message-context';
import client from '@/gql/apollo';
import { useConfirmPurchaseInvoiceMutation, PurchaseInvoicesDocument } from '@/gql';
import { onError } from '@/utils';

const PurchaseInvoiceList: React.FC = () => {
  const { messageApi } = useMessageContext();
  const router = useRouter();

  const [confirmPurchaseInvoice] = useConfirmPurchaseInvoiceMutation({
    onCompleted: () => {
      messageApi?.success('采购发票提交成功');
      handleReloadTable();
    },
    onError,
  });

  const actionRef = useRef<ActionType | null>(null);

  const handleReloadTable = () => {
    actionRef.current?.reload();
  };

  const handleConfirmPurchaseInvoice = async (values: any) => {
    const request = {
      purchaseOrderUuid: values.purchaseOrderUuid,
      purchaseInvoiceUuid: values.uuid,
    };

    await confirmPurchaseInvoice({ variables: { request } });
  };

  const columns: ProColumns<any>[] = [
    {
      title: '供应商名称',
      dataIndex: 'supplierName',
    },
    {
      title: '金额',
      dataIndex: 'amount',
      valueType: 'money',
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
              onConfirm={() => handleConfirmPurchaseInvoice(record)}
              okText="是"
              cancelText="否"
            >
              <a key="link2">提交</a>
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
          query: PurchaseInvoicesDocument,
          variables: {
            request: {},
          },
        });

        return {
          data: data.purchaseInvoices,
          total: data.purchaseInvoices.length,
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

export default PurchaseInvoiceList;
