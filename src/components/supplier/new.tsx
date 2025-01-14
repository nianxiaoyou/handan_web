import { useState } from 'react';
import { Space, Button } from 'antd';
import { ModalForm, ProForm, ProFormText } from '@ant-design/pro-components';

const SupplierNew = (props: any) => {
  const [form] = ProForm.useForm();
  const { onCreate } = props;
  const [modalVisible, setModalVisible] = useState(false);

  const onFinish = async (values: any) => {
    console.log('values:', values);
    await onCreate(values);
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
        新增供应商
      </Button>

      <ModalForm
        form={form}
        modalProps={{
          destroyOnClose: true,
        }}
        width={'70%'}
        onOpenChange={setModalVisible}
        title={<Space>新增供应商</Space>}
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

          <ProFormText
            width="sm"
            name="address"
            label="地址"
            placeholder="请输入地址"
            rules={[{ required: true, message: '请输入地址' }]}
          />
        </ProForm.Group>
      </ModalForm>
    </>
  );
};

export default SupplierNew;
