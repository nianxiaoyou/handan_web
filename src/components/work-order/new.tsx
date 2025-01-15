import { useState } from 'react';
import { Space, Button } from 'antd';
import { ModalForm, ProForm, ProFormDigit, ProFormSelect, ProFormDateTimePicker } from '@ant-design/pro-components';

// locale
import { getUTCTime } from '@/utils';
import { fetchWarehouses, fetchBoms } from '@/utils/api';

const WorkOrderNew = (props: any) => {
  const { onCreate } = props;

  const [form] = ProForm.useForm();
  const [modalVisible, setModalVisible] = useState(false);

  const onFinish = async (values: any) => {
    const request = {
      warehouseUuid: values.warehouseUuid,
      bomUuid: values.bomUuid,
      plannedQty: values.plannedQty,
      startTime: getUTCTime(values.startTime),
      endTime: getUTCTime(values.endTime),
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
        新增工单
      </Button>

      <ModalForm
        form={form}
        modalProps={{
          destroyOnClose: true,
        }}
        width={'70%'}
        onOpenChange={setModalVisible}
        title={<Space>新增工单</Space>}
        submitTimeout={2000}
        autoFocusFirstInput
        open={modalVisible}
        onFinish={onFinish}
      >
        <ProForm.Group>
          <ProFormSelect
            width="sm"
            name="warehouseUuid"
            label="库房"
            request={async (e) => fetchWarehouses(e)}
            placeholder="请选择库房"
            rules={[{ required: true, message: '请选择库存' }]}
          />

          <ProFormSelect
            width="sm"
            name="bomUuid"
            label="产品"
            request={async (e) => fetchBoms(e)}
            placeholder="请选择产品"
            rules={[{ required: true, message: '请选择产品' }]}
          />

          <ProFormDigit
            width="sm"
            name="plannedQty"
            label="计划数量"
            fieldProps={{
              precision: 0,
            }}
            placeholder="请输入计划数量"
            rules={[{ required: true, message: '请输入计划数量' }]}
          />

          <ProFormDateTimePicker
            name="startTime"
            label="开始时间"
            rules={[{ required: true, message: '请输入开始时间' }]}
          />
          <ProFormDateTimePicker
            name="endTime"
            label="结束时间"
            rules={[{ required: true, message: '请输入结束时间' }]}
          />
        </ProForm.Group>
      </ModalForm>
    </>
  );
};

export default WorkOrderNew;
