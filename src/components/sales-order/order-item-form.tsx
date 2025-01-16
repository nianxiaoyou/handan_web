import { useRef, useState } from 'react';
import { Form, message } from 'antd';
import { EditableProTable } from '@ant-design/pro-components';
import type { ProColumns } from '@ant-design/pro-components';

// locale
import { useItemsLazyQuery } from '@/gql';
import { onError } from '@/utils';

const OrderItemForm = (props: any) => {
  const { onCallback } = props;
  const actionRef = useRef(null);
  const [form] = Form.useForm();

  const [items, setItems] = useState(false);
  const [dataSource, setDataSource] = useState<any>([]);
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>([]);

  const waitTime = (time: number = 100) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
  };

  const [fetch, { loading }] = useItemsLazyQuery({
    onCompleted: (data: any) => {
      setItems(data.items);
    },
    onError,
  });

  const handleAdjustDataSourceAndAmount = (values: any) => {
    const updatedData = values.map((item: any) => {
      const { unitPrice, orderedQty } = item;
      const amount = parseFloat(unitPrice) * parseInt(orderedQty);
      return { ...item, amount };
    });

    setDataSource(updatedData);

    // callback
    onCallback && onCallback(updatedData);
  };

  const columns: ProColumns<any>[] = [
    {
      title: '商品名称',
      dataIndex: 'name',
      valueType: 'select',
      align: 'center',
      fieldProps: (form, { rowKey, rowIndex }) => {
        return {
          showSearch: true,
          style: { width: '100%' },
          defaultActiveFirstOption: false,
          placeholder: '请输入内容搜索',
          suffixIcon: null,
          onSearch: (value: any) => {
            fetch({ variables: {} });
          },
          onChange: (value: any) => {
            if (value) {
              const item = JSON.parse(value);
              form.setFieldsValue({
                [rowKey]: {
                  item,
                  name: item.name,
                  stockUoms: item.stockUoms,
                  stockUomUuid: null,
                  unitPrice: item.sellingPrice,
                },
              });
            }
          },
          options: (items || []).map((d) => ({
            value: JSON.stringify(d),
            label: d.name,
          })),
        };
      },
      formItemProps: () => {
        return {
          rules: [{ required: true, message: '此项为必填项' }],
        };
      },
      width: '30%',
    },
    {
      title: '单位',
      dataIndex: 'uomName',
      valueType: 'select',
      align: 'center',
      fieldProps: (form, { rowKey, rowIndex }) => {
        return {
          style: { width: '100%' },
          defaultActiveFirstOption: false,
          suffixIcon: null,
          onChange: (value: any) => {
            if (value) {
              const stockUOM = JSON.parse(value);
              const item = form.getFieldValue([rowKey, 'item']);

              if (item && stockUOM) {
                const unitPrice = parseFloat(stockUOM.conversionFactor) * parseFloat(item.sellingPrice);
                form.setFieldsValue({
                  [rowKey]: {
                    uomName: stockUOM.uomName,
                    stockUOM,
                    unitPrice,
                  },
                });
              } else {
                message.error('请选择商品和单位');
                return false;
              }
            }
          },
          options: ((form && form.getFieldValue([rowKey, 'stockUoms'])) || []).map((d) => ({
            value: JSON.stringify(d),
            label: d.uomName,
          })),
        };
      },
      formItemProps: () => {
        return {
          rules: [{ required: true, message: '此项为必填项' }],
        };
      },
      width: '15%',
    },
    {
      title: '销售价',
      dataIndex: 'unitPrice',
      formItemProps: () => {
        return {
          rules: [{ required: true, message: '此项为必填项' }],
        };
      },
      valueType: 'digit',
      // width: '15%',
    },
    {
      title: '数量',
      dataIndex: 'orderedQty',
      valueType: 'digit',
      formItemProps: () => {
        return {
          rules: [{ required: true, message: '此项为必填项' }],
        };
      },
      // width: '15%',
    },
    {
      title: '金额',
      dataIndex: 'amount',
      readonly: true,
    },
    {
      title: '操作',
      valueType: 'option',
      render: (text, record, _, action) => [
        <a
          style={{ color: '#1677ff' }}
          key="editable"
          onClick={() => {
            action?.startEditable?.(record.uuid);
          }}
        >
          编辑
        </a>,
        <a
          style={{ color: '#ff4d4f' }}
          key="delete"
          onClick={() => {
            setDataSource(dataSource.filter((item: any) => item.uuid !== record.uuid));
          }}
        >
          删除
        </a>,
      ],
    },
  ];

  return (
    <EditableProTable
      actionRef={actionRef}
      rowKey="uuid"
      size="small"
      maxLength={20}
      controlled
      recordCreatorProps={{
        position: 'bottom',
        record: () => ({ uuid: (Math.random() * 1000000).toFixed(0) }),
      }}
      loading={false}
      columns={columns}
      value={dataSource}
      onChange={(values) => handleAdjustDataSourceAndAmount(values)}
      editable={{
        type: 'multiple',
        form: form,
        editableKeys,
        onSave: async (rowKey, data, row) => {
          await waitTime(1000);
        },
        onChange: setEditableRowKeys,
      }}
    />
  );
};

export default OrderItemForm;
