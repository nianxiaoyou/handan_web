import { useState, useEffect } from 'react';
import { Space, Button } from 'antd';
import {
  ModalForm,
  ProForm,
  ProFormText,
  ProFormDigit,
  ProFormSelect,
  EditableProTable,
} from '@ant-design/pro-components';
import type { ProColumns } from '@ant-design/pro-components';

// locale
import { useUoMsLazyQuery, useWarehousesLazyQuery } from '@/gql';
import { onError } from '@/utils';

const ItemNew = (props: any) => {
  const { onCreate } = props;

  const [form] = ProForm.useForm();
  const [modalVisible, setModalVisible] = useState(false);
  const [uoms, setUoms] = useState([]);
  const [warehouses, setWarehouses] = useState([]);
  const [stockItems, setStockItems] = useState([]);

  const waitTime = (time: number = 100) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
  };

  const [fetchUoMs] = useUoMsLazyQuery({
    fetchPolicy: 'no-cache',
    variables: {},
    onCompleted: (data: any) => {
      const result = data?.uoms?.map((item: any) => {
        return {
          value: item.uuid,
          label: item.name,
        };
      });

      setUoms(result);
    },
    onError,
  });

  const [fetchWarehouses] = useWarehousesLazyQuery({
    fetchPolicy: 'no-cache',
    variables: {},
    onCompleted: (data: any) => {
      const result = data?.warehouses?.map((item: any) => {
        return {
          ...item,
          qty: 0,
        };
      });

      setStockItems(result);
    },
    onError,
  });

  useEffect(() => {
    fetchUoMs();
    fetchWarehouses();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleAdjustDataSource = (values: any) => {
    setStockItems(values);
  };

  const onFinish = async (values: any) => {
    const stockUoms = [
      {
        uomUuid: values.uomUuid,
        conversionFactor: 1,
        sequence: 1,
      },
    ];

    const openingStocks = stockItems.map((item: any) => {
      return {
        warehouseUuid: item.uuid,
        qty: item.qty,
      };
    });

    const request = {
      name: values.name,
      sellingPrice: parseFloat(values.sellingPrice),
      spec: values.spec,
      stockUoms,
      openingStocks,
    };

    await onCreate(request);

    setModalVisible(false);
  };

  const columns: ProColumns<any>[] = [
    {
      title: '仓库',
      dataIndex: 'name',
      valueType: 'select',
      align: 'center',
      readonly: true,
    },
    {
      title: '数量',
      dataIndex: 'qty',
      valueType: 'digit',
      fieldProps: {
        defaultValue: 0,
      },
      formItemProps: () => {
        return {
          rules: [{ required: true, message: '此项为必填项' }],
        };
      },
    },
    {
      title: '操作',
      valueType: 'option',
      render: (text, record, _, action) => [
        <a
          key="editable"
          onClick={() => {
            action?.startEditable?.(record.uuid);
          }}
        >
          编辑
        </a>,
      ],
    },
  ];

  return (
    <>
      <Button
        size="small"
        onClick={() => {
          setModalVisible(true);
        }}
      >
        新增商品
      </Button>

      <ModalForm
        form={form}
        modalProps={{
          destroyOnClose: true,
        }}
        width={'70%'}
        onOpenChange={setModalVisible}
        title={<Space>新增商品</Space>}
        submitTimeout={2000}
        autoFocusFirstInput
        open={modalVisible}
        onFinish={onFinish}
      >
        <ProForm.Group>
          <ProFormText
            width="sm"
            name="name"
            label="名称"
            placeholder="请输入名称"
            rules={[{ required: true, message: '请输入名称' }]}
          />

          <ProFormText width="sm" name="spec" label="规格" placeholder="没有可以不填" />

          <ProFormDigit
            width="sm"
            name="sellingPrice"
            label="销售价"
            fieldProps={{
              precision: 2,
              addonAfter: '元',
            }}
            placeholder="请输入销售价"
            rules={[{ required: true, message: '请输入销售价' }]}
          />

          <ProFormSelect
            width="sm"
            name="uomUuid"
            label="单位"
            options={uoms}
            placeholder="请选择单位"
            fieldProps={{
              showSearch: true,
              filterOption: true,
            }}
          />
        </ProForm.Group>

        <EditableProTable
          rowKey="uuid"
          size="small"
          maxLength={20}
          controlled
          recordCreatorProps={false}
          loading={false}
          columns={columns}
          value={stockItems}
          onChange={(values) => handleAdjustDataSource(values)}
          editable={{
            actionRender: (row, config, defaultDom) => [defaultDom.save, defaultDom.cancel],
          }}
        />
      </ModalForm>
    </>
  );
};

export default ItemNew;
