import { useState } from 'react';
import { Space, Button } from 'antd';
import {
  ModalForm,
  ProForm,
  ProFormText,
  ProFormSelect,
  ProColumns,
  EditableProTable,
  ProCard,
} from '@ant-design/pro-components';
import size from 'lodash.size';

// locale
import { useMessageContext } from '@/components/common/message-context';
import { fetchItems } from '@/utils/api';
import { useProcessesLazyQuery, useItemsLazyQuery } from '@/gql';
import { onError } from '@/utils';

const BOMNew = (props: any) => {
  const { messageApi } = useMessageContext();

  const [form] = ProForm.useForm();
  const { onCreate } = props;
  const [modalVisible, setModalVisible] = useState(false);
  const [items, setItems] = useState<any>([]);
  const [processes, setProcesses] = useState<any>([]);
  const [bomItems, setBomItems] = useState<any>([]);
  const [bomProcesses, setBomProcesses] = useState<any>([]);

  const [fetchItems2] = useItemsLazyQuery({
    onCompleted: (data: any) => {
      setItems(data.items);
    },
    onError,
  });

  const [fetchProcesses] = useProcessesLazyQuery({
    onCompleted: (data: any) => {
      setProcesses(data.processes);
    },
    onError,
  });

  const onFinish = async (values: any) => {
    const updatedBomItems = bomItems.map((entry: any) => {
      const { item, qty } = entry;
      return {
        itemUuid: item.uuid,
        qty: qty,
      };
    });

    const updatedBomProcesses = bomProcesses.map((entry: any) => {
      const { process, position } = entry;
      return {
        processUuid: process.uuid,
        position: position,
      };
    });

    if (size(updatedBomItems) == 0) {
      messageApi?.error('请添加或核实商品项');
      return false;
    }

    if (size(updatedBomProcesses) == 0) {
      messageApi?.error('请添加或核实工序项');
      return false;
    }

    const request = {
      itemUuid: values.itemUuid,
      name: values.name,
      bomItems: updatedBomItems,
      bomProcesses: updatedBomProcesses,
    };

    await onCreate(request);
    setModalVisible(false);
  };

  const handleSelctItem = (value: any, opt: any) => {
    form.setFieldValue('name', opt.label);
  };

  const itemColumns: ProColumns<any>[] = [
    {
      title: '工序名称',
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
            fetchItems2({ variables: {} });
          },
          onChange: (value: any) => {
            if (value) {
              const item = JSON.parse(value);
              form.setFieldsValue({
                [rowKey]: {
                  item,
                  name: item.name,
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
    },
    {
      title: '数量',
      dataIndex: 'qty',
      valueType: 'digit',
      align: 'center',
      formItemProps: () => {
        return {
          rules: [{ required: true, message: '此项为必填项' }],
        };
      },
      width: '15%',
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
      ],
    },
  ];

  const processColumns: ProColumns<any>[] = [
    {
      title: '工序名称',
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
            fetchProcesses({ variables: {} });
          },
          onChange: (value: any) => {
            if (value) {
              const process = JSON.parse(value);
              form.setFieldsValue({
                [rowKey]: {
                  process,
                  name: process.name,
                },
              });
            }
          },
          options: (processes || []).map((d) => ({
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
    },
    {
      title: '顺序',
      dataIndex: 'position',
      valueType: 'digit',
      align: 'center',
      formItemProps: () => {
        return {
          rules: [{ required: true, message: '此项为必填项' }],
        };
      },
      width: '15%',
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
      ],
    },
  ];

  const handleAdjustBomItems = (values: any) => {
    setBomItems(values);
  };

  const handleAdjustBomProcesses = (values: any) => {
    setBomProcesses(values);
  };

  return (
    <>
      <Button
        size="small"
        onClick={() => {
          setModalVisible(true);
        }}
      >
        新增BOM
      </Button>

      <ModalForm
        form={form}
        modalProps={{
          destroyOnClose: true,
        }}
        width={'70%'}
        onOpenChange={setModalVisible}
        title={<Space>新增BOM</Space>}
        submitTimeout={2000}
        autoFocusFirstInput
        open={modalVisible}
        onFinish={onFinish}
      >
        <ProForm.Group>
          <ProFormSelect
            width="sm"
            name="itemUuid"
            label="选择商品"
            fieldProps={{
              onSelect: (value, opt) => handleSelctItem(value, opt),
            }}
            request={async (e) => fetchItems(e)}
            rules={[{ required: true, message: '请选择商品' }]}
            placeholder="请选择商品"
          />

          <ProFormText
            width="sm"
            name="name"
            label="BOM名称"
            placeholder="请输入BOM名称"
            rules={[{ required: true, message: '请输入BOM名称' }]}
          />
        </ProForm.Group>

        <ProCard title="BOM商品" extra="BOM商品" headerBordered>
          <EditableProTable
            key="bomItems"
            rowKey="uuid"
            size="small"
            maxLength={20}
            controlled
            recordCreatorProps={{
              position: 'bottom',
              record: () => ({ uuid: (Math.random() * 1000000).toFixed(0) }),
            }}
            loading={false}
            columns={itemColumns}
            value={bomItems}
            onChange={(values) => handleAdjustBomItems(values)}
          />
        </ProCard>
        <ProCard title="BOM工序" extra="BOM工序" headerBordered>
          <EditableProTable
            key="bomProcesses"
            rowKey="uuid"
            size="small"
            maxLength={20}
            controlled
            recordCreatorProps={{
              position: 'bottom',
              record: () => ({ uuid: (Math.random() * 1000000).toFixed(0) }),
            }}
            loading={false}
            columns={processColumns}
            value={bomProcesses}
            onChange={(values) => handleAdjustBomProcesses(values)}
          />
        </ProCard>
      </ModalForm>
    </>
  );
};

export default BOMNew;
