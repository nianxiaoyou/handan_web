export const salesOrderStatusEnum = {
  draft: {
    text: '草稿',
    status: 'Processing',
  },
  to_deliver_and_bill: {
    text: '已审核',
    status: 'Processing',
  },
  to_bill: {
    text: '已发货',
    status: 'Processing',
  },
  to_deliver: {
    text: '已入库',
    status: 'Processing',
  },
  completed: {
    text: '已收款',
    status: 'Processing',
  },
  cancelled: {
    text: '已完成',
    status: 'Success',
  },
};

export const salesOrderBillingStatusEnum = {
  not_billed: {
    text: '未收款',
    status: 'Processing',
  },
  fully_billed: {
    text: '已收款',
    status: 'Success',
  },
  partly_billed: {
    text: '部分收款',
    status: 'Processing',
  },
  closed: {
    text: '已关闭',
    status: 'Success',
  },
};

export const salesOrderDeliveryStatusEnum = {
  not_delivered: {
    text: '未发货',
    status: 'Processing',
  },
  fully_delivered: {
    text: '已发货',
    status: 'Success',
  },
  partly_delivered: {
    text: '部分发货',
    status: 'Processing',
  },
  closed: {
    text: '已关闭',
    status: 'Success',
  },
};

export const purchaseOrderStatusEnum = {
  draft: {
    text: '草稿',
    status: 'Processing',
  },
};

export const purchaseOrderBillingStatusEnum = {
  unpaid: {
    text: '未收款',
    status: 'Processing',
  },
};

export const purchaseOrderReceiptStatusEnum = {
  notShipped: {
    text: '未收货',
    status: 'Processing',
  },
};

export const workOrderStatusEnum = {
  draft: {
    text: '草稿',
    status: 'Processing',
  },
};
