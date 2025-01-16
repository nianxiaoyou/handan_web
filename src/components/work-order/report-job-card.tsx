import { useState } from 'react';
import { Space, Button } from 'antd';
import { ModalForm, ProForm, ProFormDateTimePicker, ProFormDigit, ProFormSelect } from '@ant-design/pro-components';

// locale
import { fetchStaff } from '@/utils/api';
import { getUTCTime } from '@/utils';

const ReportJobCard = (props: any) => {
  const [form] = ProForm.useForm();
  const { onCreate, record } = props;
  const [modalVisible, setModalVisible] = useState(false);

  const initialValues = {
    workOrderUuid: record.workOrderUuid,
    workOrderItemUuid: record.uuid,
    producedQty: record.requiredQty - record.producedQty,
    defectiveQty: 0,
  };

  const onFinish = async (values: any) => {
    const request = {
      workOrderUuid: record.workOrderUuid,
      workOrderItemUuid: record.uuid,
      operatorStaffUuid: values.staffUuid,
      producedQty: values.producedQty,
      defectiveQty: 0,
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
        生产报工
      </Button>

      <ModalForm
        form={form}
        initialValues={initialValues}
        modalProps={{
          destroyOnClose: true,
        }}
        width={'70%'}
        onOpenChange={setModalVisible}
        title={<Space>生产报工</Space>}
        submitTimeout={2000}
        autoFocusFirstInput
        open={modalVisible}
        onFinish={onFinish}
      >
        <ProForm.Group>
          <ProFormSelect
            width="sm"
            name="staffUuid"
            label="员工"
            request={async (e) => fetchStaff(e)}
            placeholder="请选择员工"
            rules={[{ required: true, message: '请选择员工' }]}
          />

          <ProFormDigit
            width="sm"
            name="producedQty"
            label="生产数量"
            fieldProps={{
              precision: 0,
            }}
            placeholder="请输入生产数量"
            rules={[{ required: true, message: '请输入生产数量' }]}
          />

          {/* <ProFormDigit
            width="sm"
            name="defectiveQty"
            label="缺陷数量"
            fieldProps={{
              precision: 0,
            }}
            placeholder="请输入缺陷数量"
            rules={[{ required: true, message: '请输入缺陷数量' }]}
          /> */}

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

export default ReportJobCard;
