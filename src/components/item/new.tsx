import { useState, useEffect } from 'react';
import { Space, Button } from 'antd';
import { ModalForm, ProForm, ProFormText, ProFormDigit, ProFormSelect } from '@ant-design/pro-components';

// locale
import { useUoMsLazyQuery } from '@/gql';
import { onError } from '@/utils';

const ItemNew = (props: any) => {
  const [form] = ProForm.useForm();
  const { onCreate } = props;
  const [modalVisible, setModalVisible] = useState(false);
  const [uoms, setUoms] = useState([]);

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

  useEffect(() => {
    fetchUoMs();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onFinish = async (values: any) => {
    console.log('values:', values);
    const request = {
      name: values.name,
      sellingPrice: parseFloat(values.sellingPrice),
      spec: values.spec,
      stockUoms: [
        {
          uomUuid: values.uomUuid,
          conversionFactor: 1,
          sequence: 1,
        },
      ],
    };

    await onCreate(request);
    setModalVisible(false);
  };

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
      </ModalForm>
    </>
  );
};

export default ItemNew;
