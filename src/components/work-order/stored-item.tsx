import { useState } from 'react';
import { Space, Button } from 'antd';
import { ModalForm, ProForm, ProFormDigit } from '@ant-design/pro-components';

const StoredItem = (props: any) => {
  const { onCreate, record } = props;

  const [form] = ProForm.useForm();
  const [modalVisible, setModalVisible] = useState(false);

  const initialValues = {
    workOrderUuid: record.uuid,
    storedQty: record.producedQty - record.storedQty,
  };

  const onFinish = async (values: any) => {
    const request = {
      workOrderUuid: record.uuid,
      storedQty: values.storedQty,
    };

    await onCreate(request);
    setModalVisible(false);
  };

  return (
    <>
      <Button
        size="small"
        type="link"
        onClick={() => {
          setModalVisible(true);
        }}
      >
        成品入库
      </Button>

      <ModalForm
        form={form}
        initialValues={initialValues}
        modalProps={{
          destroyOnClose: true,
        }}
        width={'70%'}
        onOpenChange={setModalVisible}
        title={<Space>成品入库</Space>}
        submitTimeout={2000}
        autoFocusFirstInput
        open={modalVisible}
        onFinish={onFinish}
      >
        <ProForm.Group>
          <ProFormDigit
            width="sm"
            name="storedQty"
            label="入库数量"
            fieldProps={{
              precision: 0,
              max: record.producedQty - record.storedQty,
            }}
            placeholder="请输入入库数量"
            rules={[{ required: true, message: '请输入入库数量' }]}
          />
        </ProForm.Group>
      </ModalForm>
    </>
  );
};

export default StoredItem;
