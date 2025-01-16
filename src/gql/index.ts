import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Decimal: { input: any; output: any; }
};

export type Bom = {
  __typename?: 'Bom';
  bomItems?: Maybe<Array<Maybe<BomItem>>>;
  bomProcesses?: Maybe<Array<Maybe<BomProcess>>>;
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  item?: Maybe<Item>;
  itemName?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  uuid?: Maybe<Scalars['ID']['output']>;
};

export type BomItem = {
  __typename?: 'BomItem';
  bom?: Maybe<Bom>;
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  item?: Maybe<Item>;
  itemName?: Maybe<Scalars['String']['output']>;
  qty?: Maybe<Scalars['Int']['output']>;
  stockUom?: Maybe<StockUom>;
  stockUomUuid?: Maybe<Scalars['ID']['output']>;
  uomName?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  uuid?: Maybe<Scalars['ID']['output']>;
};

export type BomItemArg = {
  itemUuid?: InputMaybe<Scalars['ID']['input']>;
  qty?: InputMaybe<Scalars['Int']['input']>;
};

export type BomProcess = {
  __typename?: 'BomProcess';
  bom?: Maybe<Bom>;
  position?: Maybe<Scalars['Int']['output']>;
  process?: Maybe<Process>;
  processName?: Maybe<Scalars['String']['output']>;
  toolRequired?: Maybe<Scalars['String']['output']>;
  uuid?: Maybe<Scalars['ID']['output']>;
};

export type BomProcessArg = {
  position?: InputMaybe<Scalars['Int']['input']>;
  processUuid?: InputMaybe<Scalars['ID']['input']>;
};

export type Company = {
  __typename?: 'Company';
  description?: Maybe<Scalars['String']['output']>;
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  uuid?: Maybe<Scalars['ID']['output']>;
};

export type CreateBomRequest = {
  bomItems?: InputMaybe<Array<InputMaybe<BomItemArg>>>;
  bomProcesses?: InputMaybe<Array<InputMaybe<BomProcessArg>>>;
  itemUuid?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CreateCompanyRequest = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CreateCustomerRequest = {
  address: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateDeliveryNoteRequest = {
  deliveryItems?: InputMaybe<Array<InputMaybe<DeliveryNoteItemArg>>>;
  salesOrderUuid?: InputMaybe<Scalars['ID']['input']>;
};

export type CreateItemRequest = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  openingStocks?: InputMaybe<Array<InputMaybe<OpeningStockArg>>>;
  sellingPrice: Scalars['Decimal']['input'];
  spec?: InputMaybe<Scalars['String']['input']>;
  stockUoms: Array<InputMaybe<StockUomArg>>;
};

export type CreatePaymentEntryRequest = {
  attachments?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  memo?: InputMaybe<Scalars['String']['input']>;
  partyName?: InputMaybe<Scalars['String']['input']>;
  partyType?: InputMaybe<Scalars['String']['input']>;
  partyUuid?: InputMaybe<Scalars['ID']['input']>;
  paymentMethodUuid?: InputMaybe<Scalars['ID']['input']>;
  purchaseInvoiceIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  salesInvoiceIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  totalAmount?: InputMaybe<Scalars['Float']['input']>;
};

export type CreatePaymentMethodRequest = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CreateProcessRequest = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePurchaseInvoiceRequest = {
  amount?: InputMaybe<Scalars['Decimal']['input']>;
  purchaseOrderUuid?: InputMaybe<Scalars['ID']['input']>;
};

export type CreatePurchaseOrderRequest = {
  purchaseItems?: InputMaybe<Array<InputMaybe<PurchaseOrderItemArg>>>;
  supplierUuid?: InputMaybe<Scalars['ID']['input']>;
  warehouseUuid?: InputMaybe<Scalars['ID']['input']>;
};

export type CreateReceiptNoteRequest = {
  purchaseOrderUuid?: InputMaybe<Scalars['ID']['input']>;
  receiptItems?: InputMaybe<Array<InputMaybe<ReceiptNoteItemArg>>>;
};

export type CreateSalesInvoiceRequest = {
  amount?: InputMaybe<Scalars['Decimal']['input']>;
  salesOrderUuid?: InputMaybe<Scalars['ID']['input']>;
};

export type CreateSalesOrderRequest = {
  customerAddress?: InputMaybe<Scalars['String']['input']>;
  customerUuid?: InputMaybe<Scalars['ID']['input']>;
  salesItems?: InputMaybe<Array<InputMaybe<SalesOrderItemArg>>>;
  warehouseUuid?: InputMaybe<Scalars['ID']['input']>;
};

export type CreateSupplierRequest = {
  address: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateWorkOrderRequest = {
  bomUuid?: InputMaybe<Scalars['ID']['input']>;
  endTime?: InputMaybe<Scalars['DateTime']['input']>;
  plannedQty?: InputMaybe<Scalars['Decimal']['input']>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
  warehouseUuid?: InputMaybe<Scalars['ID']['input']>;
};

export type CreateWorkstationRequest = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Customer = {
  __typename?: 'Customer';
  address?: Maybe<Scalars['String']['output']>;
  balance?: Maybe<Scalars['Decimal']['output']>;
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  uuid?: Maybe<Scalars['ID']['output']>;
};

export type DeliveryNote = {
  __typename?: 'DeliveryNote';
  code?: Maybe<Scalars['String']['output']>;
  customer?: Maybe<Customer>;
  customerName?: Maybe<Scalars['String']['output']>;
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  items?: Maybe<Array<Maybe<DeliveryNoteItem>>>;
  salesOrder?: Maybe<SalesOrder>;
  salesOrderUuid?: Maybe<Scalars['ID']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalAmount?: Maybe<Scalars['Decimal']['output']>;
  totalQty?: Maybe<Scalars['Decimal']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  uuid?: Maybe<Scalars['ID']['output']>;
  warehouse?: Maybe<Warehouse>;
};

export type DeliveryNoteItem = {
  __typename?: 'DeliveryNoteItem';
  actualQty?: Maybe<Scalars['Decimal']['output']>;
  amount?: Maybe<Scalars['Decimal']['output']>;
  deliveryNote?: Maybe<DeliveryNote>;
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  item?: Maybe<Item>;
  itemName?: Maybe<Scalars['String']['output']>;
  salesOrder?: Maybe<SalesOrder>;
  salesOrderItem?: Maybe<SalesOrderItem>;
  stockUomUuid?: Maybe<Scalars['ID']['output']>;
  unitPrice?: Maybe<Scalars['Decimal']['output']>;
  uomName?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  uuid?: Maybe<Scalars['ID']['output']>;
};

export type DeliveryNoteItemArg = {
  actualQty?: InputMaybe<Scalars['Decimal']['input']>;
  salesOrderItemUuid?: InputMaybe<Scalars['ID']['input']>;
};

export type DeliveryNoteRequest = {
  deliveryNoteUuid?: InputMaybe<Scalars['ID']['input']>;
  salesOrderUuid?: InputMaybe<Scalars['ID']['input']>;
};

export type IdRequest = {
  uuid?: InputMaybe<Scalars['ID']['input']>;
};

export type InventoryEntry = {
  __typename?: 'InventoryEntry';
  actualQty?: Maybe<Scalars['Decimal']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  item?: Maybe<Item>;
  qtyAfterTransaction?: Maybe<Scalars['Decimal']['output']>;
  stockUom?: Maybe<StockUom>;
  stockUomUuid?: Maybe<Scalars['ID']['output']>;
  threadType?: Maybe<Scalars['String']['output']>;
  threadUuid?: Maybe<Scalars['ID']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  uuid?: Maybe<Scalars['ID']['output']>;
  warehouse?: Maybe<Warehouse>;
};

export type Item = {
  __typename?: 'Item';
  bom?: Maybe<Bom>;
  defaultStockUomName?: Maybe<Scalars['String']['output']>;
  defaultStockUomUuid?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sellingPrice?: Maybe<Scalars['Decimal']['output']>;
  spec?: Maybe<Scalars['String']['output']>;
  stockItems?: Maybe<Array<Maybe<StockItem>>>;
  stockUoms?: Maybe<Array<Maybe<StockUom>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  uuid?: Maybe<Scalars['ID']['output']>;
};

export type JobCard = {
  __typename?: 'JobCard';
  defectiveQty?: Maybe<Scalars['Decimal']['output']>;
  endTime?: Maybe<Scalars['DateTime']['output']>;
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  operatorStaff?: Maybe<Staff>;
  operatorStaffUuid?: Maybe<Scalars['ID']['output']>;
  producedQty?: Maybe<Scalars['Decimal']['output']>;
  startTime?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  uuid?: Maybe<Scalars['ID']['output']>;
  workOrder?: Maybe<WorkOrder>;
  workOrderItem?: Maybe<WorkOrderItem>;
  workOrderItemUuid?: Maybe<Scalars['ID']['output']>;
  workOrderUuid?: Maybe<Scalars['ID']['output']>;
};

export type LoginRequest = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type OpeningStockArg = {
  qty?: InputMaybe<Scalars['Float']['input']>;
  warehouseUuid?: InputMaybe<Scalars['ID']['input']>;
};

export type PaymentEntry = {
  __typename?: 'PaymentEntry';
  attachments?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  code?: Maybe<Scalars['String']['output']>;
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  memo?: Maybe<Scalars['String']['output']>;
  partyName?: Maybe<Scalars['String']['output']>;
  partyType?: Maybe<Scalars['String']['output']>;
  partyUuid?: Maybe<Scalars['ID']['output']>;
  paymentMethod?: Maybe<PaymentMethod>;
  purchaseInvoiceIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  salesInvoiceIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  totalAmount?: Maybe<Scalars['Decimal']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  uuid?: Maybe<Scalars['ID']['output']>;
};

export type PaymentMethod = {
  __typename?: 'PaymentMethod';
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  uuid?: Maybe<Scalars['ID']['output']>;
};

export type Process = {
  __typename?: 'Process';
  code?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  uuid?: Maybe<Scalars['ID']['output']>;
};

export type PurchaseInvoice = {
  __typename?: 'PurchaseInvoice';
  amount?: Maybe<Scalars['Decimal']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  purchaseOrderUuid?: Maybe<Scalars['ID']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  supplierName?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  uuid?: Maybe<Scalars['ID']['output']>;
};

export type PurchaseInvoiceRequest = {
  purchaseInvoiceUuid?: InputMaybe<Scalars['ID']['input']>;
  purchaseOrderUuid?: InputMaybe<Scalars['ID']['input']>;
};

export type PurchaseOrder = {
  __typename?: 'PurchaseOrder';
  billingStatus?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  items?: Maybe<Array<Maybe<PurchaseOrderItem>>>;
  paidAmount?: Maybe<Scalars['Decimal']['output']>;
  purchaseInvoices?: Maybe<Array<Maybe<PurchaseInvoice>>>;
  receiptNotes?: Maybe<Array<Maybe<ReceiptNote>>>;
  receiptStatus?: Maybe<Scalars['String']['output']>;
  receivedQty?: Maybe<Scalars['Decimal']['output']>;
  remainingAmount?: Maybe<Scalars['Decimal']['output']>;
  remainingQty?: Maybe<Scalars['Decimal']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  supplier?: Maybe<Supplier>;
  supplierAddress?: Maybe<Scalars['String']['output']>;
  supplierName?: Maybe<Scalars['String']['output']>;
  supplierUuid?: Maybe<Scalars['ID']['output']>;
  totalAmount?: Maybe<Scalars['Decimal']['output']>;
  totalQty?: Maybe<Scalars['Decimal']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  uuid?: Maybe<Scalars['ID']['output']>;
  warehouse?: Maybe<Warehouse>;
  warehouseName?: Maybe<Scalars['String']['output']>;
  warehouseUuid?: Maybe<Scalars['ID']['output']>;
};

export type PurchaseOrderItem = {
  __typename?: 'PurchaseOrderItem';
  amount?: Maybe<Scalars['Decimal']['output']>;
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  itemName?: Maybe<Scalars['String']['output']>;
  orderedQty?: Maybe<Scalars['Decimal']['output']>;
  receivedQty?: Maybe<Scalars['Decimal']['output']>;
  remainingQty?: Maybe<Scalars['Decimal']['output']>;
  stockUomUuid?: Maybe<Scalars['ID']['output']>;
  unitPrice?: Maybe<Scalars['Decimal']['output']>;
  uomName?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  uuid?: Maybe<Scalars['ID']['output']>;
};

export type PurchaseOrderItemArg = {
  itemUuid?: InputMaybe<Scalars['ID']['input']>;
  orderedQty?: InputMaybe<Scalars['Decimal']['input']>;
  stockUomUuid?: InputMaybe<Scalars['ID']['input']>;
  unitPrice?: InputMaybe<Scalars['Decimal']['input']>;
  uomName?: InputMaybe<Scalars['String']['input']>;
};

export type PurchaseOrderRequest = {
  purchaseOrderUuid?: InputMaybe<Scalars['ID']['input']>;
};

export type ReceiptNote = {
  __typename?: 'ReceiptNote';
  code?: Maybe<Scalars['String']['output']>;
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  items?: Maybe<Array<Maybe<ReceiptNoteItem>>>;
  purchaseOrderUuid?: Maybe<Scalars['ID']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  supplierName?: Maybe<Scalars['String']['output']>;
  totalAmount?: Maybe<Scalars['Decimal']['output']>;
  totalQty?: Maybe<Scalars['Decimal']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  uuid?: Maybe<Scalars['ID']['output']>;
  warehouse?: Maybe<Warehouse>;
};

export type ReceiptNoteItem = {
  __typename?: 'ReceiptNoteItem';
  actualQty?: Maybe<Scalars['Decimal']['output']>;
  amount?: Maybe<Scalars['Decimal']['output']>;
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  itemName?: Maybe<Scalars['String']['output']>;
  stockUomUuid?: Maybe<Scalars['ID']['output']>;
  unitPrice?: Maybe<Scalars['Decimal']['output']>;
  uomName?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  uuid?: Maybe<Scalars['ID']['output']>;
};

export type ReceiptNoteItemArg = {
  actualQty?: InputMaybe<Scalars['Decimal']['input']>;
  purchaseOrderItemUuid?: InputMaybe<Scalars['ID']['input']>;
};

export type ReceiptNoteRequest = {
  purchaseOrderUuid?: InputMaybe<Scalars['ID']['input']>;
  receiptNoteUuid?: InputMaybe<Scalars['ID']['input']>;
};

export type ReportJobCardRequest = {
  defectiveQty?: InputMaybe<Scalars['Decimal']['input']>;
  endTime?: InputMaybe<Scalars['DateTime']['input']>;
  operatorStaffUuid?: InputMaybe<Scalars['ID']['input']>;
  producedQty?: InputMaybe<Scalars['Decimal']['input']>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
  workOrderItemUuid?: InputMaybe<Scalars['ID']['input']>;
  workOrderUuid?: InputMaybe<Scalars['ID']['input']>;
};

/** the root of mutaion. */
export type RootMutationType = {
  __typename?: 'RootMutationType';
  /** complete delivery note */
  completeDeliveryNote?: Maybe<DeliveryNote>;
  /** complete receipt note */
  completeReceiptNote?: Maybe<ReceiptNote>;
  /** create bom */
  createBom?: Maybe<Bom>;
  createCompany?: Maybe<Company>;
  /** create customer */
  createCustomer?: Maybe<Customer>;
  /** create delivery note */
  createDeliveryNote?: Maybe<DeliveryNote>;
  /** create item */
  createItem?: Maybe<Item>;
  /** create payment entry */
  createPaymentEntry?: Maybe<PaymentEntry>;
  /** create payment method */
  createPaymentMethod?: Maybe<PaymentMethod>;
  /** create process */
  createProcess?: Maybe<Process>;
  /** create purchase invoice */
  createPurchaseInvoice?: Maybe<PurchaseInvoice>;
  /** create purchase order */
  createPurchaseOrder?: Maybe<PurchaseOrder>;
  /** create receipt note */
  createReceiptNote?: Maybe<ReceiptNote>;
  /** create sales invoice */
  createSalesInvoice?: Maybe<SalesInvoice>;
  /** create sales order */
  createSalesOrder?: Maybe<SalesOrder>;
  /** create supplier */
  createSupplier?: Maybe<Supplier>;
  /** create work order */
  createWorkOrder?: Maybe<WorkOrder>;
  /** create :workstation */
  createWorkstation?: Maybe<Workstation>;
  /** login */
  login?: Maybe<User>;
  /** register */
  register?: Maybe<User>;
  /** report job card */
  reportJobCard?: Maybe<WorkOrder>;
  /** schedule work order */
  scheduleWorkOrder?: Maybe<WorkOrder>;
  /** store finish item */
  storeFinishItem?: Maybe<WorkOrder>;
};


/** the root of mutaion. */
export type RootMutationTypeCompleteDeliveryNoteArgs = {
  request: DeliveryNoteRequest;
};


/** the root of mutaion. */
export type RootMutationTypeCompleteReceiptNoteArgs = {
  request: ReceiptNoteRequest;
};


/** the root of mutaion. */
export type RootMutationTypeCreateBomArgs = {
  request: CreateBomRequest;
};


/** the root of mutaion. */
export type RootMutationTypeCreateCompanyArgs = {
  request: CreateCompanyRequest;
};


/** the root of mutaion. */
export type RootMutationTypeCreateCustomerArgs = {
  request: CreateCustomerRequest;
};


/** the root of mutaion. */
export type RootMutationTypeCreateDeliveryNoteArgs = {
  request: CreateDeliveryNoteRequest;
};


/** the root of mutaion. */
export type RootMutationTypeCreateItemArgs = {
  request: CreateItemRequest;
};


/** the root of mutaion. */
export type RootMutationTypeCreatePaymentEntryArgs = {
  request: CreatePaymentEntryRequest;
};


/** the root of mutaion. */
export type RootMutationTypeCreatePaymentMethodArgs = {
  request: CreatePaymentMethodRequest;
};


/** the root of mutaion. */
export type RootMutationTypeCreateProcessArgs = {
  request: CreateProcessRequest;
};


/** the root of mutaion. */
export type RootMutationTypeCreatePurchaseInvoiceArgs = {
  request: CreatePurchaseInvoiceRequest;
};


/** the root of mutaion. */
export type RootMutationTypeCreatePurchaseOrderArgs = {
  request: CreatePurchaseOrderRequest;
};


/** the root of mutaion. */
export type RootMutationTypeCreateReceiptNoteArgs = {
  request: CreateReceiptNoteRequest;
};


/** the root of mutaion. */
export type RootMutationTypeCreateSalesInvoiceArgs = {
  request: CreateSalesInvoiceRequest;
};


/** the root of mutaion. */
export type RootMutationTypeCreateSalesOrderArgs = {
  request: CreateSalesOrderRequest;
};


/** the root of mutaion. */
export type RootMutationTypeCreateSupplierArgs = {
  request: CreateSupplierRequest;
};


/** the root of mutaion. */
export type RootMutationTypeCreateWorkOrderArgs = {
  request: CreateWorkOrderRequest;
};


/** the root of mutaion. */
export type RootMutationTypeCreateWorkstationArgs = {
  request: CreateWorkstationRequest;
};


/** the root of mutaion. */
export type RootMutationTypeLoginArgs = {
  request: LoginRequest;
};


/** the root of mutaion. */
export type RootMutationTypeReportJobCardArgs = {
  request: ReportJobCardRequest;
};


/** the root of mutaion. */
export type RootMutationTypeScheduleWorkOrderArgs = {
  request: WorkOrderRequest;
};


/** the root of mutaion. */
export type RootMutationTypeStoreFinishItemArgs = {
  request: StoreFinishItemRequest;
};

/** the root of query. */
export type RootQueryType = {
  __typename?: 'RootQueryType';
  /** get bom */
  bom?: Maybe<Bom>;
  /** list boms */
  boms?: Maybe<Array<Maybe<Bom>>>;
  /** get current company */
  company?: Maybe<Company>;
  currentUser?: Maybe<User>;
  /** get customer */
  customer?: Maybe<Customer>;
  /** list customers */
  customers?: Maybe<Array<Maybe<Customer>>>;
  /** get delivery note */
  deliveryNote?: Maybe<DeliveryNote>;
  /** delivery notes */
  deliveryNotes?: Maybe<Array<Maybe<DeliveryNote>>>;
  /** list inventory entries */
  inventoryEntries?: Maybe<Array<Maybe<InventoryEntry>>>;
  /** get item by uuid */
  item?: Maybe<Item>;
  /** list items */
  items?: Maybe<Array<Maybe<Item>>>;
  /** list staff */
  listStaff?: Maybe<Array<Maybe<Staff>>>;
  /** list payment entries */
  paymentEntries?: Maybe<Array<Maybe<PaymentEntry>>>;
  /** get payment entry */
  paymentEntry?: Maybe<PaymentEntry>;
  /** get payment method */
  paymentMethod?: Maybe<PaymentMethod>;
  /** list payment methods */
  paymentMethods?: Maybe<Array<Maybe<PaymentMethod>>>;
  /** get process */
  process?: Maybe<Process>;
  /** list processes */
  processes?: Maybe<Array<Maybe<Process>>>;
  /** get purchase invoice */
  purchaseInvoice?: Maybe<PurchaseInvoice>;
  /** list purchase invoices */
  purchaseInvoices?: Maybe<Array<Maybe<PurchaseInvoice>>>;
  /** get purchase order */
  purchaseOrder?: Maybe<PurchaseOrder>;
  /** list purchase orders */
  purchaseOrders?: Maybe<Array<Maybe<PurchaseOrder>>>;
  /** get receipt note */
  receiptNote?: Maybe<ReceiptNote>;
  /** list receipt notes */
  receiptNotes?: Maybe<Array<Maybe<ReceiptNote>>>;
  /** get sales invoice */
  salesInvoice?: Maybe<SalesInvoice>;
  /** sales invoices */
  salesInvoices?: Maybe<Array<Maybe<SalesInvoice>>>;
  /** get sales order */
  salesOrder?: Maybe<SalesOrder>;
  /** list sales orders */
  salesOrders?: Maybe<Array<Maybe<SalesOrder>>>;
  /** list stock items */
  stockItems?: Maybe<Array<Maybe<StockItem>>>;
  /** get supplier */
  supplier?: Maybe<Supplier>;
  /** list suppliers */
  suppliers?: Maybe<Array<Maybe<Supplier>>>;
  /** list uoms */
  uoms?: Maybe<Array<Maybe<Uom>>>;
  /** list warehouses */
  warehouses?: Maybe<Array<Maybe<Warehouse>>>;
  /** get work order */
  workOrder?: Maybe<WorkOrder>;
  /** get work order item */
  workOrderItem?: Maybe<WorkOrderItem>;
  /** list work order items */
  workOrderItems?: Maybe<Array<Maybe<WorkOrderItem>>>;
  /** list work orders */
  workOrders?: Maybe<Array<Maybe<WorkOrder>>>;
  /** get workstation */
  workstation?: Maybe<Workstation>;
  /** list workstations */
  workstations?: Maybe<Array<Maybe<Workstation>>>;
};


/** the root of query. */
export type RootQueryTypeBomArgs = {
  request: IdRequest;
};


/** the root of query. */
export type RootQueryTypeCustomerArgs = {
  request: IdRequest;
};


/** the root of query. */
export type RootQueryTypeDeliveryNoteArgs = {
  request: DeliveryNoteRequest;
};


/** the root of query. */
export type RootQueryTypeItemArgs = {
  request: IdRequest;
};


/** the root of query. */
export type RootQueryTypePaymentEntryArgs = {
  request: IdRequest;
};


/** the root of query. */
export type RootQueryTypePaymentMethodArgs = {
  request: IdRequest;
};


/** the root of query. */
export type RootQueryTypeProcessArgs = {
  request: IdRequest;
};


/** the root of query. */
export type RootQueryTypePurchaseInvoiceArgs = {
  request: PurchaseInvoiceRequest;
};


/** the root of query. */
export type RootQueryTypePurchaseOrderArgs = {
  request: PurchaseOrderRequest;
};


/** the root of query. */
export type RootQueryTypeReceiptNoteArgs = {
  request: ReceiptNoteRequest;
};


/** the root of query. */
export type RootQueryTypeSalesInvoiceArgs = {
  request: SalesInvoiceRequest;
};


/** the root of query. */
export type RootQueryTypeSalesOrderArgs = {
  request: SalesOrderRequest;
};


/** the root of query. */
export type RootQueryTypeSupplierArgs = {
  request: IdRequest;
};


/** the root of query. */
export type RootQueryTypeWorkOrderArgs = {
  request: IdRequest;
};


/** the root of query. */
export type RootQueryTypeWorkOrderItemArgs = {
  request: IdRequest;
};


/** the root of query. */
export type RootQueryTypeWorkstationArgs = {
  request: IdRequest;
};

export type SalesInvoice = {
  __typename?: 'SalesInvoice';
  amount?: Maybe<Scalars['Decimal']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  customer?: Maybe<Customer>;
  customerName?: Maybe<Scalars['String']['output']>;
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  salesOrder?: Maybe<SalesOrder>;
  salesOrderUuid?: Maybe<Scalars['ID']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  uuid?: Maybe<Scalars['ID']['output']>;
};

export type SalesInvoiceRequest = {
  salesInvoiceUuid?: InputMaybe<Scalars['ID']['input']>;
  salesOrderUuid?: InputMaybe<Scalars['ID']['input']>;
};

export type SalesOrder = {
  __typename?: 'SalesOrder';
  billingStatus?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  customer?: Maybe<Customer>;
  customerName?: Maybe<Scalars['String']['output']>;
  customerUuid?: Maybe<Scalars['ID']['output']>;
  deliveredQty?: Maybe<Scalars['Decimal']['output']>;
  deliveryNotes?: Maybe<Array<Maybe<DeliveryNote>>>;
  deliveryStatus?: Maybe<Scalars['String']['output']>;
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  items?: Maybe<Array<Maybe<SalesOrderItem>>>;
  paidAmount?: Maybe<Scalars['Decimal']['output']>;
  remainingAmount?: Maybe<Scalars['Decimal']['output']>;
  remainingQty?: Maybe<Scalars['Decimal']['output']>;
  salesInvoices?: Maybe<Array<Maybe<SalesInvoice>>>;
  status?: Maybe<Scalars['String']['output']>;
  totalAmount?: Maybe<Scalars['Decimal']['output']>;
  totalQty?: Maybe<Scalars['Decimal']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  uuid?: Maybe<Scalars['ID']['output']>;
  warehouse?: Maybe<Warehouse>;
  warehouseName?: Maybe<Scalars['String']['output']>;
  warehouseUuid?: Maybe<Scalars['ID']['output']>;
};

export type SalesOrderItem = {
  __typename?: 'SalesOrderItem';
  amount?: Maybe<Scalars['Decimal']['output']>;
  deliveredQty?: Maybe<Scalars['Decimal']['output']>;
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  item?: Maybe<Item>;
  itemName?: Maybe<Scalars['String']['output']>;
  itemUuid?: Maybe<Scalars['ID']['output']>;
  orderedQty?: Maybe<Scalars['Decimal']['output']>;
  remainingQty?: Maybe<Scalars['Decimal']['output']>;
  salesOrder?: Maybe<SalesOrder>;
  stockUomUuid?: Maybe<Scalars['ID']['output']>;
  unitPrice?: Maybe<Scalars['Decimal']['output']>;
  uomName?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  uuid?: Maybe<Scalars['ID']['output']>;
};

export type SalesOrderItemArg = {
  itemUuid?: InputMaybe<Scalars['ID']['input']>;
  orderedQty?: InputMaybe<Scalars['Float']['input']>;
  stockUomUuid?: InputMaybe<Scalars['ID']['input']>;
  unitPrice?: InputMaybe<Scalars['Float']['input']>;
  uomName?: InputMaybe<Scalars['String']['input']>;
};

export type SalesOrderRequest = {
  salesOrderUuid?: InputMaybe<Scalars['ID']['input']>;
};

export type Staff = {
  __typename?: 'Staff';
  company?: Maybe<Company>;
  email?: Maybe<Scalars['String']['output']>;
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
  uuid?: Maybe<Scalars['ID']['output']>;
};

export type StockItem = {
  __typename?: 'StockItem';
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  item?: Maybe<Item>;
  stockUom?: Maybe<StockUom>;
  totalOnHand?: Maybe<Scalars['Decimal']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  uuid?: Maybe<Scalars['ID']['output']>;
  warehouse?: Maybe<Warehouse>;
};

export type StockUom = {
  __typename?: 'StockUom';
  conversionFactor?: Maybe<Scalars['Int']['output']>;
  item?: Maybe<Item>;
  sequence?: Maybe<Scalars['Int']['output']>;
  uomName?: Maybe<Scalars['String']['output']>;
  uuid?: Maybe<Scalars['ID']['output']>;
};

export type StockUomArg = {
  conversionFactor?: InputMaybe<Scalars['Int']['input']>;
  sequence?: InputMaybe<Scalars['Int']['input']>;
  uomUuid?: InputMaybe<Scalars['ID']['input']>;
};

export type StoreFinishItemRequest = {
  storedQty?: InputMaybe<Scalars['Decimal']['input']>;
  workOrderUuid?: InputMaybe<Scalars['ID']['input']>;
};

export type Supplier = {
  __typename?: 'Supplier';
  address?: Maybe<Scalars['String']['output']>;
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  uuid?: Maybe<Scalars['ID']['output']>;
};

export type Uom = {
  __typename?: 'Uom';
  description?: Maybe<Scalars['String']['output']>;
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  uuid?: Maybe<Scalars['ID']['output']>;
};

export type User = {
  __typename?: 'User';
  accessToken?: Maybe<Scalars['String']['output']>;
  avatarUrl?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  uuid?: Maybe<Scalars['ID']['output']>;
};

export type Warehouse = {
  __typename?: 'Warehouse';
  address?: Maybe<Scalars['String']['output']>;
  area?: Maybe<Scalars['String']['output']>;
  contactEmail?: Maybe<Scalars['String']['output']>;
  contactName?: Maybe<Scalars['String']['output']>;
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  isDefault?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  uuid?: Maybe<Scalars['ID']['output']>;
};

export type WorkOrder = {
  __typename?: 'WorkOrder';
  bom?: Maybe<Bom>;
  bomUuid?: Maybe<Scalars['ID']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  endTime?: Maybe<Scalars['DateTime']['output']>;
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  item?: Maybe<Item>;
  itemName?: Maybe<Scalars['String']['output']>;
  itemUuid?: Maybe<Scalars['ID']['output']>;
  items?: Maybe<Array<Maybe<WorkOrderItem>>>;
  materialRequests?: Maybe<Array<Maybe<WorkOrderMaterialRequest>>>;
  plannedQty?: Maybe<Scalars['Decimal']['output']>;
  producedQty?: Maybe<Scalars['Decimal']['output']>;
  salesOrderUuid?: Maybe<Scalars['ID']['output']>;
  scrapedQty?: Maybe<Scalars['Decimal']['output']>;
  startTime?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  stockUomUuid?: Maybe<Scalars['ID']['output']>;
  storedQty?: Maybe<Scalars['Decimal']['output']>;
  supplierName?: Maybe<Scalars['String']['output']>;
  supplierUuid?: Maybe<Scalars['ID']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  uomName?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  uuid?: Maybe<Scalars['ID']['output']>;
  warehouse?: Maybe<Warehouse>;
};

export type WorkOrderItem = {
  __typename?: 'WorkOrderItem';
  defectiveQty?: Maybe<Scalars['Decimal']['output']>;
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  itemName?: Maybe<Scalars['String']['output']>;
  jobCards?: Maybe<Array<Maybe<JobCard>>>;
  position?: Maybe<Scalars['Int']['output']>;
  processName?: Maybe<Scalars['String']['output']>;
  producedQty?: Maybe<Scalars['Decimal']['output']>;
  requiredQty?: Maybe<Scalars['Decimal']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  uuid?: Maybe<Scalars['ID']['output']>;
  workOrder?: Maybe<WorkOrder>;
  workOrderUuid?: Maybe<Scalars['ID']['output']>;
};

export type WorkOrderMaterialRequest = {
  __typename?: 'WorkOrderMaterialRequest';
  actualQty?: Maybe<Scalars['Decimal']['output']>;
  bomUuid?: Maybe<Scalars['ID']['output']>;
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  item?: Maybe<Item>;
  itemName?: Maybe<Scalars['String']['output']>;
  itemUuid?: Maybe<Scalars['ID']['output']>;
  receivedQty?: Maybe<Scalars['Decimal']['output']>;
  remainingQty?: Maybe<Scalars['Decimal']['output']>;
  stockUom?: Maybe<StockUom>;
  stockUomUuid?: Maybe<Scalars['ID']['output']>;
  uomName?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  uuid?: Maybe<Scalars['ID']['output']>;
  warehouse?: Maybe<Warehouse>;
  warehouseUuid?: Maybe<Scalars['ID']['output']>;
  workOrder?: Maybe<WorkOrder>;
  workOrderUuid?: Maybe<Scalars['ID']['output']>;
};

export type WorkOrderRequest = {
  workOrderUuid?: InputMaybe<Scalars['ID']['input']>;
};

export type Workstation = {
  __typename?: 'Workstation';
  adminUuid?: Maybe<Scalars['String']['output']>;
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  members?: Maybe<Array<Maybe<Staff>>>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  uuid?: Maybe<Scalars['ID']['output']>;
};

export type BomFieldsFragment = { __typename?: 'Bom', uuid?: string | null, name?: string | null, insertedAt?: any | null, updatedAt?: any | null };

export type CustomerFieldsFragment = { __typename?: 'Customer', uuid?: string | null, name?: string | null, address?: string | null, insertedAt?: any | null, updatedAt?: any | null };

export type DeliveryNoteFieldsFragment = { __typename?: 'DeliveryNote', uuid?: string | null, code?: string | null, status?: string | null, customerName?: string | null, totalAmount?: any | null, totalQty?: any | null, salesOrderUuid?: string | null, insertedAt?: any | null, updatedAt?: any | null };

export type DeliveryNoteItemFieldsFragment = { __typename?: 'DeliveryNoteItem', uuid?: string | null, itemName?: string | null, actualQty?: any | null, unitPrice?: any | null, amount?: any | null, uomName?: string | null, insertedAt?: any | null, updatedAt?: any | null };

export type ItemFieldsFragment = { __typename?: 'Item', uuid?: string | null, name?: string | null, spec?: string | null, sellingPrice?: any | null, defaultStockUomUuid?: string | null, defaultStockUomName?: string | null, insertedAt?: any | null, updatedAt?: any | null };

export type JobCardFieldsFragment = { __typename?: 'JobCard', uuid?: string | null, startTime?: any | null, endTime?: any | null, status?: string | null, defectiveQty?: any | null, producedQty?: any | null, workOrderItemUuid?: string | null, workOrderUuid?: string | null, operatorStaff?: { __typename?: 'Staff', email?: string | null } | null };

export type MaterialRequestFieldsFragment = { __typename?: 'WorkOrderMaterialRequest', uuid?: string | null, itemName?: string | null, actualQty?: any | null, remainingQty?: any | null, receivedQty?: any | null, uomName?: string | null, stockUomUuid?: string | null, bomUuid?: string | null, warehouseUuid?: string | null, itemUuid?: string | null, workOrderUuid?: string | null, warehouse?: { __typename?: 'Warehouse', name?: string | null } | null };

export type PaymentMethodsFieldsFragment = { __typename?: 'PaymentMethod', uuid?: string | null, name?: string | null, insertedAt?: any | null, updatedAt?: any | null };

export type ProcessFieldsFragment = { __typename?: 'Process', uuid?: string | null, name?: string | null, description?: string | null, insertedAt?: any | null, updatedAt?: any | null };

export type PurchaseInvoiceFieldsFragment = { __typename?: 'PurchaseInvoice', uuid?: string | null, code?: string | null, status?: string | null, amount?: any | null, supplierName?: string | null, purchaseOrderUuid?: string | null, insertedAt?: any | null, updatedAt?: any | null };

export type PurchaseOrderFieldsFragment = { __typename?: 'PurchaseOrder', uuid?: string | null, code?: string | null, status?: string | null, receiptStatus?: string | null, billingStatus?: string | null, supplierUuid?: string | null, supplierName?: string | null, supplierAddress?: string | null, totalAmount?: any | null, paidAmount?: any | null, remainingAmount?: any | null, totalQty?: any | null, receivedQty?: any | null, remainingQty?: any | null, warehouseName?: string | null, insertedAt?: any | null, updatedAt?: any | null };

export type PurchaseOrderItemFieldsFragment = { __typename?: 'PurchaseOrderItem', uuid?: string | null, itemName?: string | null, uomName?: string | null, unitPrice?: any | null, orderedQty?: any | null, receivedQty?: any | null, amount?: any | null };

export type ReceiptNoteFieldsFragment = { __typename?: 'ReceiptNote', uuid?: string | null, code?: string | null, status?: string | null, supplierName?: string | null, totalAmount?: any | null, totalQty?: any | null, purchaseOrderUuid?: string | null, insertedAt?: any | null, updatedAt?: any | null };

export type ReceiptNoteItemFieldsFragment = { __typename?: 'ReceiptNoteItem', uuid?: string | null, itemName?: string | null, uomName?: string | null, unitPrice?: any | null, actualQty?: any | null, amount?: any | null };

export type SalesInvoiceFieldsFragment = { __typename?: 'SalesInvoice', uuid?: string | null, code?: string | null, status?: string | null, amount?: any | null, customerName?: string | null, salesOrderUuid?: string | null, insertedAt?: any | null, updatedAt?: any | null };

export type SalesOrderFieldsFragment = { __typename?: 'SalesOrder', uuid?: string | null, code?: string | null, status?: string | null, billingStatus?: string | null, deliveryStatus?: string | null, customerName?: string | null, totalAmount?: any | null, paidAmount?: any | null, remainingAmount?: any | null, totalQty?: any | null, deliveredQty?: any | null, remainingQty?: any | null, warehouseName?: string | null, insertedAt?: any | null, updatedAt?: any | null };

export type SalesOrderItemFieldsFragment = { __typename?: 'SalesOrderItem', uuid?: string | null, itemUuid?: string | null, itemName?: string | null, amount?: any | null, unitPrice?: any | null, orderedQty?: any | null, deliveredQty?: any | null, remainingQty?: any | null };

export type StaffFieldsFragment = { __typename?: 'Staff', uuid?: string | null, email?: string | null, name?: string | null };

export type SupplierFieldsFragment = { __typename?: 'Supplier', uuid?: string | null, name?: string | null, address?: string | null };

export type UomFieldsFragment = { __typename?: 'Uom', uuid?: string | null, name?: string | null, insertedAt?: any | null, updatedAt?: any | null };

export type WarehouseFieldsFragment = { __typename?: 'Warehouse', uuid?: string | null, name?: string | null, address?: string | null, insertedAt?: any | null, updatedAt?: any | null };

export type WorkOrderFieldsFragment = { __typename?: 'WorkOrder', uuid?: string | null, code?: string | null, title?: string | null, startTime?: any | null, endTime?: any | null, type?: string | null, status?: string | null, plannedQty?: any | null, storedQty?: any | null, producedQty?: any | null, scrapedQty?: any | null, itemUuid?: string | null, itemName?: string | null, uomName?: string | null, supplierName?: string | null, supplierUuid?: string | null, salesOrderUuid?: string | null, stockUomUuid?: string | null, insertedAt?: any | null, updatedAt?: any | null };

export type WorkOrderItemFieldsFragment = { __typename?: 'WorkOrderItem', uuid?: string | null, workOrderUuid?: string | null, itemName?: string | null, processName?: string | null, position?: number | null, requiredQty?: any | null, defectiveQty?: any | null, producedQty?: any | null, insertedAt?: any | null, updatedAt?: any | null };

export type WorkstationFieldsFragment = { __typename?: 'Workstation', uuid?: string | null, name?: string | null, insertedAt?: any | null, updatedAt?: any | null };

export type CompleteDeliveryNoteMutationVariables = Exact<{
  request: DeliveryNoteRequest;
}>;


export type CompleteDeliveryNoteMutation = { __typename?: 'RootMutationType', completeDeliveryNote?: { __typename?: 'DeliveryNote', status?: string | null, uuid?: string | null } | null };

export type CompleteReceiptNoteMutationVariables = Exact<{
  request: ReceiptNoteRequest;
}>;


export type CompleteReceiptNoteMutation = { __typename?: 'RootMutationType', completeReceiptNote?: { __typename?: 'ReceiptNote', status?: string | null, uuid?: string | null } | null };

export type CreateBomMutationVariables = Exact<{
  request: CreateBomRequest;
}>;


export type CreateBomMutation = { __typename?: 'RootMutationType', createBom?: { __typename?: 'Bom', name?: string | null } | null };

export type CreateCustomerMutationVariables = Exact<{
  request: CreateCustomerRequest;
}>;


export type CreateCustomerMutation = { __typename?: 'RootMutationType', createCustomer?: { __typename?: 'Customer', uuid?: string | null, name?: string | null, address?: string | null } | null };

export type CreateDeliveryNoteMutationVariables = Exact<{
  request: CreateDeliveryNoteRequest;
}>;


export type CreateDeliveryNoteMutation = { __typename?: 'RootMutationType', createDeliveryNote?: { __typename?: 'DeliveryNote', salesOrderUuid?: string | null, totalQty?: any | null, status?: string | null, items?: Array<{ __typename?: 'DeliveryNoteItem', itemName?: string | null } | null> | null } | null };

export type CreateItemMutationVariables = Exact<{
  request: CreateItemRequest;
}>;


export type CreateItemMutation = { __typename?: 'RootMutationType', createItem?: { __typename?: 'Item', name?: string | null } | null };

export type CreatePaymentEntryMutationVariables = Exact<{
  request: CreatePaymentEntryRequest;
}>;


export type CreatePaymentEntryMutation = { __typename?: 'RootMutationType', createPaymentEntry?: { __typename?: 'PaymentEntry', uuid?: string | null } | null };

export type CreatePaymentMethodMutationVariables = Exact<{
  request: CreatePaymentMethodRequest;
}>;


export type CreatePaymentMethodMutation = { __typename?: 'RootMutationType', createPaymentMethod?: { __typename?: 'PaymentMethod', uuid?: string | null } | null };

export type CreateProcessMutationVariables = Exact<{
  request: CreateProcessRequest;
}>;


export type CreateProcessMutation = { __typename?: 'RootMutationType', createProcess?: { __typename?: 'Process', name?: string | null } | null };

export type CreatePurchaseInvoiceMutationVariables = Exact<{
  request: CreatePurchaseInvoiceRequest;
}>;


export type CreatePurchaseInvoiceMutation = { __typename?: 'RootMutationType', createPurchaseInvoice?: { __typename?: 'PurchaseInvoice', status?: string | null, amount?: any | null } | null };

export type CreatePurchaseOrderMutationVariables = Exact<{
  request: CreatePurchaseOrderRequest;
}>;


export type CreatePurchaseOrderMutation = { __typename?: 'RootMutationType', createPurchaseOrder?: { __typename?: 'PurchaseOrder', supplierUuid?: string | null, status?: string | null, items?: Array<{ __typename?: 'PurchaseOrderItem', itemName?: string | null } | null> | null } | null };

export type CreateReceiptNoteMutationVariables = Exact<{
  request: CreateReceiptNoteRequest;
}>;


export type CreateReceiptNoteMutation = { __typename?: 'RootMutationType', createReceiptNote?: { __typename?: 'ReceiptNote', purchaseOrderUuid?: string | null, totalQty?: any | null, status?: string | null, items?: Array<{ __typename?: 'ReceiptNoteItem', itemName?: string | null } | null> | null } | null };

export type CreateSalesInvoiceMutationVariables = Exact<{
  request: CreateSalesInvoiceRequest;
}>;


export type CreateSalesInvoiceMutation = { __typename?: 'RootMutationType', createSalesInvoice?: { __typename?: 'SalesInvoice', status?: string | null, amount?: any | null } | null };

export type CreateSalesOrderMutationVariables = Exact<{
  request: CreateSalesOrderRequest;
}>;


export type CreateSalesOrderMutation = { __typename?: 'RootMutationType', createSalesOrder?: { __typename?: 'SalesOrder', customerUuid?: string | null, items?: Array<{ __typename?: 'SalesOrderItem', itemName?: string | null } | null> | null } | null };

export type CreateSupplierMutationVariables = Exact<{
  request: CreateSupplierRequest;
}>;


export type CreateSupplierMutation = { __typename?: 'RootMutationType', createSupplier?: { __typename?: 'Supplier', uuid?: string | null, name?: string | null, address?: string | null } | null };

export type CreateWorkOrderMutationVariables = Exact<{
  request: CreateWorkOrderRequest;
}>;


export type CreateWorkOrderMutation = { __typename?: 'RootMutationType', createWorkOrder?: { __typename?: 'WorkOrder', itemUuid?: string | null, status?: string | null } | null };

export type CreateWorkstationMutationVariables = Exact<{
  request: CreateWorkstationRequest;
}>;


export type CreateWorkstationMutation = { __typename?: 'RootMutationType', createWorkstation?: { __typename?: 'Workstation', name?: string | null } | null };

export type LoginMutationVariables = Exact<{
  request: LoginRequest;
}>;


export type LoginMutation = { __typename?: 'RootMutationType', login?: { __typename?: 'User', uuid?: string | null, email?: string | null, accessToken?: string | null } | null };

export type ReportJobCardMutationVariables = Exact<{
  request: ReportJobCardRequest;
}>;


export type ReportJobCardMutation = { __typename?: 'RootMutationType', reportJobCard?: { __typename?: 'WorkOrder', status?: string | null, uuid?: string | null } | null };

export type StoreFinishItemMutationVariables = Exact<{
  request: StoreFinishItemRequest;
}>;


export type StoreFinishItemMutation = { __typename?: 'RootMutationType', storeFinishItem?: { __typename?: 'WorkOrder', status?: string | null, uuid?: string | null } | null };

export type BomQueryVariables = Exact<{
  request: IdRequest;
}>;


export type BomQuery = { __typename?: 'RootQueryType', bom?: { __typename?: 'Bom', uuid?: string | null, name?: string | null, itemName?: string | null, bomItems?: Array<{ __typename?: 'BomItem', uuid?: string | null, itemName?: string | null, uomName?: string | null, qty?: number | null } | null> | null, bomProcesses?: Array<{ __typename?: 'BomProcess', uuid?: string | null, position?: number | null, processName?: string | null } | null> | null } | null };

export type BomsQueryVariables = Exact<{ [key: string]: never; }>;


export type BomsQuery = { __typename?: 'RootQueryType', boms?: Array<{ __typename?: 'Bom', uuid?: string | null, name?: string | null, insertedAt?: any | null, updatedAt?: any | null } | null> | null };

export type CompanyQueryVariables = Exact<{ [key: string]: never; }>;


export type CompanyQuery = { __typename?: 'RootQueryType', company?: { __typename?: 'Company', uuid?: string | null, name?: string | null } | null };

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { __typename?: 'RootQueryType', currentUser?: { __typename?: 'User', email?: string | null, uuid?: string | null } | null };

export type CustomerQueryVariables = Exact<{
  request: IdRequest;
}>;


export type CustomerQuery = { __typename?: 'RootQueryType', customer?: { __typename?: 'Customer', uuid?: string | null, name?: string | null, address?: string | null, insertedAt?: any | null, updatedAt?: any | null } | null };

export type CustomersQueryVariables = Exact<{ [key: string]: never; }>;


export type CustomersQuery = { __typename?: 'RootQueryType', customers?: Array<{ __typename?: 'Customer', uuid?: string | null, name?: string | null, address?: string | null, insertedAt?: any | null, updatedAt?: any | null } | null> | null };

export type DeliveryNoteQueryVariables = Exact<{
  request: DeliveryNoteRequest;
}>;


export type DeliveryNoteQuery = { __typename?: 'RootQueryType', deliveryNote?: { __typename?: 'DeliveryNote', uuid?: string | null, code?: string | null, status?: string | null, customerName?: string | null, totalAmount?: any | null, totalQty?: any | null, salesOrderUuid?: string | null, insertedAt?: any | null, updatedAt?: any | null, items?: Array<{ __typename?: 'DeliveryNoteItem', uuid?: string | null, itemName?: string | null, actualQty?: any | null, unitPrice?: any | null, amount?: any | null, uomName?: string | null, insertedAt?: any | null, updatedAt?: any | null } | null> | null } | null };

export type DeliveryNotesQueryVariables = Exact<{ [key: string]: never; }>;


export type DeliveryNotesQuery = { __typename?: 'RootQueryType', deliveryNotes?: Array<{ __typename?: 'DeliveryNote', uuid?: string | null, code?: string | null, status?: string | null, customerName?: string | null, totalAmount?: any | null, totalQty?: any | null, salesOrderUuid?: string | null, insertedAt?: any | null, updatedAt?: any | null, warehouse?: { __typename?: 'Warehouse', name?: string | null } | null } | null> | null };

export type InventoryEntriesQueryVariables = Exact<{ [key: string]: never; }>;


export type InventoryEntriesQuery = { __typename?: 'RootQueryType', inventoryEntries?: Array<{ __typename?: 'InventoryEntry', code?: string | null, actualQty?: any | null, type?: string | null, qtyAfterTransaction?: any | null, threadType?: string | null, stockUomUuid?: string | null, insertedAt?: any | null, updatedAt?: any | null, item?: { __typename?: 'Item', uuid?: string | null, name?: string | null, spec?: string | null, sellingPrice?: any | null, defaultStockUomUuid?: string | null, defaultStockUomName?: string | null, insertedAt?: any | null, updatedAt?: any | null } | null, warehouse?: { __typename?: 'Warehouse', uuid?: string | null, name?: string | null, address?: string | null, insertedAt?: any | null, updatedAt?: any | null } | null, stockUom?: { __typename?: 'StockUom', uuid?: string | null, uomName?: string | null } | null } | null> | null };

export type ItemQueryVariables = Exact<{
  request: IdRequest;
}>;


export type ItemQuery = { __typename?: 'RootQueryType', item?: { __typename?: 'Item', uuid?: string | null, name?: string | null, description?: string | null, sellingPrice?: any | null } | null };

export type ItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type ItemsQuery = { __typename?: 'RootQueryType', items?: Array<{ __typename?: 'Item', uuid?: string | null, name?: string | null, spec?: string | null, sellingPrice?: any | null, defaultStockUomUuid?: string | null, defaultStockUomName?: string | null, insertedAt?: any | null, updatedAt?: any | null, stockUoms?: Array<{ __typename?: 'StockUom', uuid?: string | null, conversionFactor?: number | null, uomName?: string | null } | null> | null } | null> | null };

export type ListStaffQueryVariables = Exact<{ [key: string]: never; }>;


export type ListStaffQuery = { __typename?: 'RootQueryType', listStaff?: Array<{ __typename?: 'Staff', uuid?: string | null, email?: string | null, name?: string | null } | null> | null };

export type PaymentEntriesQueryVariables = Exact<{ [key: string]: never; }>;


export type PaymentEntriesQuery = { __typename?: 'RootQueryType', paymentEntries?: Array<{ __typename?: 'PaymentEntry', uuid?: string | null, partyUuid?: string | null, memo?: string | null } | null> | null };

export type PaymentEntryQueryVariables = Exact<{
  request: IdRequest;
}>;


export type PaymentEntryQuery = { __typename?: 'RootQueryType', paymentEntry?: { __typename?: 'PaymentEntry', uuid?: string | null } | null };

export type PaymentMethodQueryVariables = Exact<{
  request: IdRequest;
}>;


export type PaymentMethodQuery = { __typename?: 'RootQueryType', paymentMethod?: { __typename?: 'PaymentMethod', uuid?: string | null, name?: string | null, insertedAt?: any | null, updatedAt?: any | null } | null };

export type PaymentMethodsQueryVariables = Exact<{ [key: string]: never; }>;


export type PaymentMethodsQuery = { __typename?: 'RootQueryType', paymentMethods?: Array<{ __typename?: 'PaymentMethod', uuid?: string | null, name?: string | null, insertedAt?: any | null, updatedAt?: any | null } | null> | null };

export type ProcessQueryVariables = Exact<{
  request: IdRequest;
}>;


export type ProcessQuery = { __typename?: 'RootQueryType', process?: { __typename?: 'Process', uuid?: string | null } | null };

export type ProcessesQueryVariables = Exact<{ [key: string]: never; }>;


export type ProcessesQuery = { __typename?: 'RootQueryType', processes?: Array<{ __typename?: 'Process', uuid?: string | null, name?: string | null, description?: string | null, insertedAt?: any | null, updatedAt?: any | null } | null> | null };

export type PurchaseInvoiceQueryVariables = Exact<{
  request: PurchaseInvoiceRequest;
}>;


export type PurchaseInvoiceQuery = { __typename?: 'RootQueryType', purchaseInvoice?: { __typename?: 'PurchaseInvoice', uuid?: string | null, code?: string | null, status?: string | null, amount?: any | null, supplierName?: string | null, purchaseOrderUuid?: string | null, insertedAt?: any | null, updatedAt?: any | null } | null };

export type PurchaseInvoicesQueryVariables = Exact<{ [key: string]: never; }>;


export type PurchaseInvoicesQuery = { __typename?: 'RootQueryType', purchaseInvoices?: Array<{ __typename?: 'PurchaseInvoice', uuid?: string | null, code?: string | null, status?: string | null, amount?: any | null, supplierName?: string | null, purchaseOrderUuid?: string | null, insertedAt?: any | null, updatedAt?: any | null } | null> | null };

export type PurchaseOrderQueryVariables = Exact<{
  request: PurchaseOrderRequest;
}>;


export type PurchaseOrderQuery = { __typename?: 'RootQueryType', purchaseOrder?: { __typename?: 'PurchaseOrder', uuid?: string | null, code?: string | null, status?: string | null, receiptStatus?: string | null, billingStatus?: string | null, supplierUuid?: string | null, supplierName?: string | null, supplierAddress?: string | null, totalAmount?: any | null, paidAmount?: any | null, remainingAmount?: any | null, totalQty?: any | null, receivedQty?: any | null, remainingQty?: any | null, warehouseName?: string | null, insertedAt?: any | null, updatedAt?: any | null, items?: Array<{ __typename?: 'PurchaseOrderItem', uuid?: string | null, itemName?: string | null, uomName?: string | null, unitPrice?: any | null, orderedQty?: any | null, receivedQty?: any | null, amount?: any | null } | null> | null, purchaseInvoices?: Array<{ __typename?: 'PurchaseInvoice', uuid?: string | null, code?: string | null, status?: string | null, amount?: any | null, supplierName?: string | null, purchaseOrderUuid?: string | null, insertedAt?: any | null, updatedAt?: any | null } | null> | null, receiptNotes?: Array<{ __typename?: 'ReceiptNote', uuid?: string | null, code?: string | null, status?: string | null, supplierName?: string | null, totalAmount?: any | null, totalQty?: any | null, purchaseOrderUuid?: string | null, insertedAt?: any | null, updatedAt?: any | null } | null> | null } | null };

export type PurchaseOrdersQueryVariables = Exact<{ [key: string]: never; }>;


export type PurchaseOrdersQuery = { __typename?: 'RootQueryType', purchaseOrders?: Array<{ __typename?: 'PurchaseOrder', uuid?: string | null, code?: string | null, status?: string | null, receiptStatus?: string | null, billingStatus?: string | null, supplierUuid?: string | null, supplierName?: string | null, supplierAddress?: string | null, totalAmount?: any | null, paidAmount?: any | null, remainingAmount?: any | null, totalQty?: any | null, receivedQty?: any | null, remainingQty?: any | null, warehouseName?: string | null, insertedAt?: any | null, updatedAt?: any | null, items?: Array<{ __typename?: 'PurchaseOrderItem', uuid?: string | null, itemName?: string | null, uomName?: string | null, unitPrice?: any | null, orderedQty?: any | null, receivedQty?: any | null, amount?: any | null } | null> | null } | null> | null };

export type ReceiptNoteQueryVariables = Exact<{
  request: ReceiptNoteRequest;
}>;


export type ReceiptNoteQuery = { __typename?: 'RootQueryType', receiptNote?: { __typename?: 'ReceiptNote', uuid?: string | null, code?: string | null, status?: string | null, supplierName?: string | null, totalAmount?: any | null, totalQty?: any | null, purchaseOrderUuid?: string | null, insertedAt?: any | null, updatedAt?: any | null, items?: Array<{ __typename?: 'ReceiptNoteItem', uuid?: string | null, itemName?: string | null, uomName?: string | null, unitPrice?: any | null, actualQty?: any | null, amount?: any | null } | null> | null } | null };

export type ReceiptNotesQueryVariables = Exact<{ [key: string]: never; }>;


export type ReceiptNotesQuery = { __typename?: 'RootQueryType', receiptNotes?: Array<{ __typename?: 'ReceiptNote', uuid?: string | null, code?: string | null, status?: string | null, supplierName?: string | null, totalAmount?: any | null, totalQty?: any | null, purchaseOrderUuid?: string | null, insertedAt?: any | null, updatedAt?: any | null, warehouse?: { __typename?: 'Warehouse', name?: string | null } | null } | null> | null };

export type SalesInvoiceQueryVariables = Exact<{
  request: SalesInvoiceRequest;
}>;


export type SalesInvoiceQuery = { __typename?: 'RootQueryType', salesInvoice?: { __typename?: 'SalesInvoice', uuid?: string | null, code?: string | null, status?: string | null, amount?: any | null, customerName?: string | null, salesOrderUuid?: string | null, insertedAt?: any | null, updatedAt?: any | null } | null };

export type SalesInvoicesQueryVariables = Exact<{ [key: string]: never; }>;


export type SalesInvoicesQuery = { __typename?: 'RootQueryType', salesInvoices?: Array<{ __typename?: 'SalesInvoice', uuid?: string | null, code?: string | null, status?: string | null, amount?: any | null, customerName?: string | null, salesOrderUuid?: string | null, insertedAt?: any | null, updatedAt?: any | null } | null> | null };

export type SalesOrderQueryVariables = Exact<{
  request: SalesOrderRequest;
}>;


export type SalesOrderQuery = { __typename?: 'RootQueryType', salesOrder?: { __typename?: 'SalesOrder', uuid?: string | null, code?: string | null, status?: string | null, billingStatus?: string | null, deliveryStatus?: string | null, customerName?: string | null, totalAmount?: any | null, paidAmount?: any | null, remainingAmount?: any | null, totalQty?: any | null, deliveredQty?: any | null, remainingQty?: any | null, warehouseName?: string | null, insertedAt?: any | null, updatedAt?: any | null, items?: Array<{ __typename?: 'SalesOrderItem', uuid?: string | null, itemUuid?: string | null, itemName?: string | null, amount?: any | null, unitPrice?: any | null, orderedQty?: any | null, deliveredQty?: any | null, remainingQty?: any | null } | null> | null, deliveryNotes?: Array<{ __typename?: 'DeliveryNote', uuid?: string | null, code?: string | null, status?: string | null, customerName?: string | null, totalAmount?: any | null, totalQty?: any | null, salesOrderUuid?: string | null, insertedAt?: any | null, updatedAt?: any | null } | null> | null, salesInvoices?: Array<{ __typename?: 'SalesInvoice', uuid?: string | null, code?: string | null, status?: string | null, amount?: any | null, customerName?: string | null, salesOrderUuid?: string | null, insertedAt?: any | null, updatedAt?: any | null } | null> | null } | null };

export type SalesOrdersQueryVariables = Exact<{ [key: string]: never; }>;


export type SalesOrdersQuery = { __typename?: 'RootQueryType', salesOrders?: Array<{ __typename?: 'SalesOrder', uuid?: string | null, code?: string | null, status?: string | null, billingStatus?: string | null, deliveryStatus?: string | null, customerName?: string | null, totalAmount?: any | null, paidAmount?: any | null, remainingAmount?: any | null, totalQty?: any | null, deliveredQty?: any | null, remainingQty?: any | null, warehouseName?: string | null, insertedAt?: any | null, updatedAt?: any | null, items?: Array<{ __typename?: 'SalesOrderItem', uuid?: string | null, itemUuid?: string | null, itemName?: string | null, amount?: any | null, unitPrice?: any | null, orderedQty?: any | null, deliveredQty?: any | null, remainingQty?: any | null } | null> | null } | null> | null };

export type ScheduleWorkOrderMutationVariables = Exact<{
  request: WorkOrderRequest;
}>;


export type ScheduleWorkOrderMutation = { __typename?: 'RootMutationType', scheduleWorkOrder?: { __typename?: 'WorkOrder', status?: string | null } | null };

export type SupplierQueryVariables = Exact<{
  request: IdRequest;
}>;


export type SupplierQuery = { __typename?: 'RootQueryType', supplier?: { __typename?: 'Supplier', uuid?: string | null, name?: string | null, address?: string | null } | null };

export type SuppliersQueryVariables = Exact<{ [key: string]: never; }>;


export type SuppliersQuery = { __typename?: 'RootQueryType', suppliers?: Array<{ __typename?: 'Supplier', uuid?: string | null, name?: string | null, address?: string | null } | null> | null };

export type UoMsQueryVariables = Exact<{ [key: string]: never; }>;


export type UoMsQuery = { __typename?: 'RootQueryType', uoms?: Array<{ __typename?: 'Uom', uuid?: string | null, name?: string | null, insertedAt?: any | null, updatedAt?: any | null } | null> | null };

export type WarehousesQueryVariables = Exact<{ [key: string]: never; }>;


export type WarehousesQuery = { __typename?: 'RootQueryType', warehouses?: Array<{ __typename?: 'Warehouse', uuid?: string | null, name?: string | null, address?: string | null, insertedAt?: any | null, updatedAt?: any | null } | null> | null };

export type WorkOrderQueryVariables = Exact<{
  request: IdRequest;
}>;


export type WorkOrderQuery = { __typename?: 'RootQueryType', workOrder?: { __typename?: 'WorkOrder', uuid?: string | null, code?: string | null, title?: string | null, startTime?: any | null, endTime?: any | null, type?: string | null, status?: string | null, plannedQty?: any | null, storedQty?: any | null, producedQty?: any | null, scrapedQty?: any | null, itemUuid?: string | null, itemName?: string | null, uomName?: string | null, supplierName?: string | null, supplierUuid?: string | null, salesOrderUuid?: string | null, stockUomUuid?: string | null, insertedAt?: any | null, updatedAt?: any | null, items?: Array<{ __typename?: 'WorkOrderItem', uuid?: string | null, workOrderUuid?: string | null, itemName?: string | null, processName?: string | null, position?: number | null, requiredQty?: any | null, defectiveQty?: any | null, producedQty?: any | null, insertedAt?: any | null, updatedAt?: any | null } | null> | null, materialRequests?: Array<{ __typename?: 'WorkOrderMaterialRequest', uuid?: string | null, itemName?: string | null, actualQty?: any | null, remainingQty?: any | null, receivedQty?: any | null, uomName?: string | null, stockUomUuid?: string | null, bomUuid?: string | null, warehouseUuid?: string | null, itemUuid?: string | null, workOrderUuid?: string | null, warehouse?: { __typename?: 'Warehouse', name?: string | null } | null } | null> | null } | null };

export type WorkOrderItemQueryVariables = Exact<{
  request: IdRequest;
}>;


export type WorkOrderItemQuery = { __typename?: 'RootQueryType', workOrderItem?: { __typename?: 'WorkOrderItem', uuid?: string | null, workOrderUuid?: string | null, itemName?: string | null, processName?: string | null, position?: number | null, requiredQty?: any | null, defectiveQty?: any | null, producedQty?: any | null, insertedAt?: any | null, updatedAt?: any | null, jobCards?: Array<{ __typename?: 'JobCard', uuid?: string | null, startTime?: any | null, endTime?: any | null, status?: string | null, defectiveQty?: any | null, producedQty?: any | null, workOrderItemUuid?: string | null, workOrderUuid?: string | null, operatorStaff?: { __typename?: 'Staff', email?: string | null } | null } | null> | null } | null };

export type WorkOrderItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type WorkOrderItemsQuery = { __typename?: 'RootQueryType', workOrderItems?: Array<{ __typename?: 'WorkOrderItem', uuid?: string | null, workOrderUuid?: string | null, itemName?: string | null, processName?: string | null, position?: number | null, requiredQty?: any | null, defectiveQty?: any | null, producedQty?: any | null, insertedAt?: any | null, updatedAt?: any | null, workOrder?: { __typename?: 'WorkOrder', code?: string | null } | null } | null> | null };

export type WorkOrdersQueryVariables = Exact<{ [key: string]: never; }>;


export type WorkOrdersQuery = { __typename?: 'RootQueryType', workOrders?: Array<{ __typename?: 'WorkOrder', uuid?: string | null, code?: string | null, title?: string | null, startTime?: any | null, endTime?: any | null, type?: string | null, status?: string | null, plannedQty?: any | null, storedQty?: any | null, producedQty?: any | null, scrapedQty?: any | null, itemUuid?: string | null, itemName?: string | null, uomName?: string | null, supplierName?: string | null, supplierUuid?: string | null, salesOrderUuid?: string | null, stockUomUuid?: string | null, insertedAt?: any | null, updatedAt?: any | null } | null> | null };

export type WorkstationQueryVariables = Exact<{
  request: IdRequest;
}>;


export type WorkstationQuery = { __typename?: 'RootQueryType', workstation?: { __typename?: 'Workstation', name?: string | null } | null };

export type WorkstationsQueryVariables = Exact<{ [key: string]: never; }>;


export type WorkstationsQuery = { __typename?: 'RootQueryType', workstations?: Array<{ __typename?: 'Workstation', uuid?: string | null, name?: string | null, insertedAt?: any | null, updatedAt?: any | null } | null> | null };

export const BomFieldsFragmentDoc = gql`
    fragment BOMFields on Bom {
  uuid
  name
  insertedAt
  updatedAt
}
    `;
export const CustomerFieldsFragmentDoc = gql`
    fragment CustomerFields on Customer {
  uuid
  name
  address
  insertedAt
  updatedAt
}
    `;
export const DeliveryNoteFieldsFragmentDoc = gql`
    fragment DeliveryNoteFields on DeliveryNote {
  uuid
  code
  status
  customerName
  totalAmount
  totalQty
  salesOrderUuid
  insertedAt
  updatedAt
}
    `;
export const DeliveryNoteItemFieldsFragmentDoc = gql`
    fragment DeliveryNoteItemFields on DeliveryNoteItem {
  uuid
  itemName
  actualQty
  unitPrice
  amount
  uomName
  insertedAt
  updatedAt
}
    `;
export const ItemFieldsFragmentDoc = gql`
    fragment ItemFields on Item {
  uuid
  name
  spec
  sellingPrice
  defaultStockUomUuid
  defaultStockUomName
  insertedAt
  updatedAt
}
    `;
export const JobCardFieldsFragmentDoc = gql`
    fragment JobCardFields on JobCard {
  uuid
  startTime
  endTime
  status
  operatorStaff {
    email
  }
  defectiveQty
  producedQty
  workOrderItemUuid
  workOrderUuid
}
    `;
export const MaterialRequestFieldsFragmentDoc = gql`
    fragment MaterialRequestFields on WorkOrderMaterialRequest {
  uuid
  itemName
  actualQty
  remainingQty
  receivedQty
  uomName
  stockUomUuid
  bomUuid
  warehouseUuid
  warehouse {
    name
  }
  itemUuid
  workOrderUuid
}
    `;
export const PaymentMethodsFieldsFragmentDoc = gql`
    fragment PaymentMethodsFields on PaymentMethod {
  uuid
  name
  insertedAt
  updatedAt
}
    `;
export const ProcessFieldsFragmentDoc = gql`
    fragment ProcessFields on Process {
  uuid
  name
  description
  insertedAt
  updatedAt
}
    `;
export const PurchaseInvoiceFieldsFragmentDoc = gql`
    fragment PurchaseInvoiceFields on PurchaseInvoice {
  uuid
  code
  status
  amount
  supplierName
  purchaseOrderUuid
  insertedAt
  updatedAt
}
    `;
export const PurchaseOrderFieldsFragmentDoc = gql`
    fragment PurchaseOrderFields on PurchaseOrder {
  uuid
  code
  status
  receiptStatus
  billingStatus
  supplierUuid
  supplierName
  supplierAddress
  totalAmount
  paidAmount
  remainingAmount
  totalQty
  receivedQty
  remainingQty
  warehouseName
  insertedAt
  updatedAt
}
    `;
export const PurchaseOrderItemFieldsFragmentDoc = gql`
    fragment PurchaseOrderItemFields on PurchaseOrderItem {
  uuid
  itemName
  uomName
  unitPrice
  orderedQty
  receivedQty
  amount
}
    `;
export const ReceiptNoteFieldsFragmentDoc = gql`
    fragment ReceiptNoteFields on ReceiptNote {
  uuid
  code
  status
  supplierName
  totalAmount
  totalQty
  purchaseOrderUuid
  insertedAt
  updatedAt
}
    `;
export const ReceiptNoteItemFieldsFragmentDoc = gql`
    fragment ReceiptNoteItemFields on ReceiptNoteItem {
  uuid
  itemName
  uomName
  unitPrice
  actualQty
  amount
}
    `;
export const SalesInvoiceFieldsFragmentDoc = gql`
    fragment SalesInvoiceFields on SalesInvoice {
  uuid
  code
  status
  amount
  customerName
  salesOrderUuid
  insertedAt
  updatedAt
}
    `;
export const SalesOrderFieldsFragmentDoc = gql`
    fragment SalesOrderFields on SalesOrder {
  uuid
  code
  status
  billingStatus
  deliveryStatus
  customerName
  totalAmount
  paidAmount
  remainingAmount
  totalQty
  deliveredQty
  remainingQty
  warehouseName
  insertedAt
  updatedAt
}
    `;
export const SalesOrderItemFieldsFragmentDoc = gql`
    fragment SalesOrderItemFields on SalesOrderItem {
  uuid
  itemUuid
  itemName
  amount
  unitPrice
  orderedQty
  deliveredQty
  remainingQty
}
    `;
export const StaffFieldsFragmentDoc = gql`
    fragment StaffFields on Staff {
  uuid
  email
  name
}
    `;
export const SupplierFieldsFragmentDoc = gql`
    fragment SupplierFields on Supplier {
  uuid
  name
  address
}
    `;
export const UomFieldsFragmentDoc = gql`
    fragment UOMFields on Uom {
  uuid
  name
  insertedAt
  updatedAt
}
    `;
export const WarehouseFieldsFragmentDoc = gql`
    fragment WarehouseFields on Warehouse {
  uuid
  name
  address
  insertedAt
  updatedAt
}
    `;
export const WorkOrderFieldsFragmentDoc = gql`
    fragment WorkOrderFields on WorkOrder {
  uuid
  code
  title
  startTime
  endTime
  type
  status
  plannedQty
  storedQty
  producedQty
  scrapedQty
  itemUuid
  itemName
  uomName
  supplierName
  supplierUuid
  salesOrderUuid
  stockUomUuid
  insertedAt
  updatedAt
}
    `;
export const WorkOrderItemFieldsFragmentDoc = gql`
    fragment WorkOrderItemFields on WorkOrderItem {
  uuid
  workOrderUuid
  itemName
  processName
  position
  requiredQty
  defectiveQty
  producedQty
  insertedAt
  updatedAt
}
    `;
export const WorkstationFieldsFragmentDoc = gql`
    fragment WorkstationFields on Workstation {
  uuid
  name
  insertedAt
  updatedAt
}
    `;
export const CompleteDeliveryNoteDocument = gql`
    mutation CompleteDeliveryNote($request: DeliveryNoteRequest!) {
  completeDeliveryNote(request: $request) {
    status
    uuid
  }
}
    `;
export type CompleteDeliveryNoteMutationFn = Apollo.MutationFunction<CompleteDeliveryNoteMutation, CompleteDeliveryNoteMutationVariables>;

/**
 * __useCompleteDeliveryNoteMutation__
 *
 * To run a mutation, you first call `useCompleteDeliveryNoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCompleteDeliveryNoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [completeDeliveryNoteMutation, { data, loading, error }] = useCompleteDeliveryNoteMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCompleteDeliveryNoteMutation(baseOptions?: Apollo.MutationHookOptions<CompleteDeliveryNoteMutation, CompleteDeliveryNoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CompleteDeliveryNoteMutation, CompleteDeliveryNoteMutationVariables>(CompleteDeliveryNoteDocument, options);
      }
export type CompleteDeliveryNoteMutationHookResult = ReturnType<typeof useCompleteDeliveryNoteMutation>;
export type CompleteDeliveryNoteMutationResult = Apollo.MutationResult<CompleteDeliveryNoteMutation>;
export type CompleteDeliveryNoteMutationOptions = Apollo.BaseMutationOptions<CompleteDeliveryNoteMutation, CompleteDeliveryNoteMutationVariables>;
export const CompleteReceiptNoteDocument = gql`
    mutation CompleteReceiptNote($request: ReceiptNoteRequest!) {
  completeReceiptNote(request: $request) {
    status
    uuid
  }
}
    `;
export type CompleteReceiptNoteMutationFn = Apollo.MutationFunction<CompleteReceiptNoteMutation, CompleteReceiptNoteMutationVariables>;

/**
 * __useCompleteReceiptNoteMutation__
 *
 * To run a mutation, you first call `useCompleteReceiptNoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCompleteReceiptNoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [completeReceiptNoteMutation, { data, loading, error }] = useCompleteReceiptNoteMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCompleteReceiptNoteMutation(baseOptions?: Apollo.MutationHookOptions<CompleteReceiptNoteMutation, CompleteReceiptNoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CompleteReceiptNoteMutation, CompleteReceiptNoteMutationVariables>(CompleteReceiptNoteDocument, options);
      }
export type CompleteReceiptNoteMutationHookResult = ReturnType<typeof useCompleteReceiptNoteMutation>;
export type CompleteReceiptNoteMutationResult = Apollo.MutationResult<CompleteReceiptNoteMutation>;
export type CompleteReceiptNoteMutationOptions = Apollo.BaseMutationOptions<CompleteReceiptNoteMutation, CompleteReceiptNoteMutationVariables>;
export const CreateBomDocument = gql`
    mutation CreateBOM($request: CreateBomRequest!) {
  createBom(request: $request) {
    name
  }
}
    `;
export type CreateBomMutationFn = Apollo.MutationFunction<CreateBomMutation, CreateBomMutationVariables>;

/**
 * __useCreateBomMutation__
 *
 * To run a mutation, you first call `useCreateBomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBomMutation, { data, loading, error }] = useCreateBomMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateBomMutation(baseOptions?: Apollo.MutationHookOptions<CreateBomMutation, CreateBomMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBomMutation, CreateBomMutationVariables>(CreateBomDocument, options);
      }
export type CreateBomMutationHookResult = ReturnType<typeof useCreateBomMutation>;
export type CreateBomMutationResult = Apollo.MutationResult<CreateBomMutation>;
export type CreateBomMutationOptions = Apollo.BaseMutationOptions<CreateBomMutation, CreateBomMutationVariables>;
export const CreateCustomerDocument = gql`
    mutation CreateCustomer($request: CreateCustomerRequest!) {
  createCustomer(request: $request) {
    uuid
    name
    address
  }
}
    `;
export type CreateCustomerMutationFn = Apollo.MutationFunction<CreateCustomerMutation, CreateCustomerMutationVariables>;

/**
 * __useCreateCustomerMutation__
 *
 * To run a mutation, you first call `useCreateCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCustomerMutation, { data, loading, error }] = useCreateCustomerMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateCustomerMutation(baseOptions?: Apollo.MutationHookOptions<CreateCustomerMutation, CreateCustomerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCustomerMutation, CreateCustomerMutationVariables>(CreateCustomerDocument, options);
      }
export type CreateCustomerMutationHookResult = ReturnType<typeof useCreateCustomerMutation>;
export type CreateCustomerMutationResult = Apollo.MutationResult<CreateCustomerMutation>;
export type CreateCustomerMutationOptions = Apollo.BaseMutationOptions<CreateCustomerMutation, CreateCustomerMutationVariables>;
export const CreateDeliveryNoteDocument = gql`
    mutation CreateDeliveryNote($request: CreateDeliveryNoteRequest!) {
  createDeliveryNote(request: $request) {
    salesOrderUuid
    totalQty
    status
    items {
      itemName
    }
  }
}
    `;
export type CreateDeliveryNoteMutationFn = Apollo.MutationFunction<CreateDeliveryNoteMutation, CreateDeliveryNoteMutationVariables>;

/**
 * __useCreateDeliveryNoteMutation__
 *
 * To run a mutation, you first call `useCreateDeliveryNoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDeliveryNoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDeliveryNoteMutation, { data, loading, error }] = useCreateDeliveryNoteMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateDeliveryNoteMutation(baseOptions?: Apollo.MutationHookOptions<CreateDeliveryNoteMutation, CreateDeliveryNoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateDeliveryNoteMutation, CreateDeliveryNoteMutationVariables>(CreateDeliveryNoteDocument, options);
      }
export type CreateDeliveryNoteMutationHookResult = ReturnType<typeof useCreateDeliveryNoteMutation>;
export type CreateDeliveryNoteMutationResult = Apollo.MutationResult<CreateDeliveryNoteMutation>;
export type CreateDeliveryNoteMutationOptions = Apollo.BaseMutationOptions<CreateDeliveryNoteMutation, CreateDeliveryNoteMutationVariables>;
export const CreateItemDocument = gql`
    mutation CreateItem($request: CreateItemRequest!) {
  createItem(request: $request) {
    name
  }
}
    `;
export type CreateItemMutationFn = Apollo.MutationFunction<CreateItemMutation, CreateItemMutationVariables>;

/**
 * __useCreateItemMutation__
 *
 * To run a mutation, you first call `useCreateItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createItemMutation, { data, loading, error }] = useCreateItemMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateItemMutation(baseOptions?: Apollo.MutationHookOptions<CreateItemMutation, CreateItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateItemMutation, CreateItemMutationVariables>(CreateItemDocument, options);
      }
export type CreateItemMutationHookResult = ReturnType<typeof useCreateItemMutation>;
export type CreateItemMutationResult = Apollo.MutationResult<CreateItemMutation>;
export type CreateItemMutationOptions = Apollo.BaseMutationOptions<CreateItemMutation, CreateItemMutationVariables>;
export const CreatePaymentEntryDocument = gql`
    mutation CreatePaymentEntry($request: CreatePaymentEntryRequest!) {
  createPaymentEntry(request: $request) {
    uuid
  }
}
    `;
export type CreatePaymentEntryMutationFn = Apollo.MutationFunction<CreatePaymentEntryMutation, CreatePaymentEntryMutationVariables>;

/**
 * __useCreatePaymentEntryMutation__
 *
 * To run a mutation, you first call `useCreatePaymentEntryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePaymentEntryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPaymentEntryMutation, { data, loading, error }] = useCreatePaymentEntryMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreatePaymentEntryMutation(baseOptions?: Apollo.MutationHookOptions<CreatePaymentEntryMutation, CreatePaymentEntryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePaymentEntryMutation, CreatePaymentEntryMutationVariables>(CreatePaymentEntryDocument, options);
      }
export type CreatePaymentEntryMutationHookResult = ReturnType<typeof useCreatePaymentEntryMutation>;
export type CreatePaymentEntryMutationResult = Apollo.MutationResult<CreatePaymentEntryMutation>;
export type CreatePaymentEntryMutationOptions = Apollo.BaseMutationOptions<CreatePaymentEntryMutation, CreatePaymentEntryMutationVariables>;
export const CreatePaymentMethodDocument = gql`
    mutation CreatePaymentMethod($request: CreatePaymentMethodRequest!) {
  createPaymentMethod(request: $request) {
    uuid
  }
}
    `;
export type CreatePaymentMethodMutationFn = Apollo.MutationFunction<CreatePaymentMethodMutation, CreatePaymentMethodMutationVariables>;

/**
 * __useCreatePaymentMethodMutation__
 *
 * To run a mutation, you first call `useCreatePaymentMethodMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePaymentMethodMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPaymentMethodMutation, { data, loading, error }] = useCreatePaymentMethodMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreatePaymentMethodMutation(baseOptions?: Apollo.MutationHookOptions<CreatePaymentMethodMutation, CreatePaymentMethodMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePaymentMethodMutation, CreatePaymentMethodMutationVariables>(CreatePaymentMethodDocument, options);
      }
export type CreatePaymentMethodMutationHookResult = ReturnType<typeof useCreatePaymentMethodMutation>;
export type CreatePaymentMethodMutationResult = Apollo.MutationResult<CreatePaymentMethodMutation>;
export type CreatePaymentMethodMutationOptions = Apollo.BaseMutationOptions<CreatePaymentMethodMutation, CreatePaymentMethodMutationVariables>;
export const CreateProcessDocument = gql`
    mutation CreateProcess($request: CreateProcessRequest!) {
  createProcess(request: $request) {
    name
  }
}
    `;
export type CreateProcessMutationFn = Apollo.MutationFunction<CreateProcessMutation, CreateProcessMutationVariables>;

/**
 * __useCreateProcessMutation__
 *
 * To run a mutation, you first call `useCreateProcessMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProcessMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProcessMutation, { data, loading, error }] = useCreateProcessMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateProcessMutation(baseOptions?: Apollo.MutationHookOptions<CreateProcessMutation, CreateProcessMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProcessMutation, CreateProcessMutationVariables>(CreateProcessDocument, options);
      }
export type CreateProcessMutationHookResult = ReturnType<typeof useCreateProcessMutation>;
export type CreateProcessMutationResult = Apollo.MutationResult<CreateProcessMutation>;
export type CreateProcessMutationOptions = Apollo.BaseMutationOptions<CreateProcessMutation, CreateProcessMutationVariables>;
export const CreatePurchaseInvoiceDocument = gql`
    mutation CreatePurchaseInvoice($request: CreatePurchaseInvoiceRequest!) {
  createPurchaseInvoice(request: $request) {
    status
    amount
  }
}
    `;
export type CreatePurchaseInvoiceMutationFn = Apollo.MutationFunction<CreatePurchaseInvoiceMutation, CreatePurchaseInvoiceMutationVariables>;

/**
 * __useCreatePurchaseInvoiceMutation__
 *
 * To run a mutation, you first call `useCreatePurchaseInvoiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePurchaseInvoiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPurchaseInvoiceMutation, { data, loading, error }] = useCreatePurchaseInvoiceMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreatePurchaseInvoiceMutation(baseOptions?: Apollo.MutationHookOptions<CreatePurchaseInvoiceMutation, CreatePurchaseInvoiceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePurchaseInvoiceMutation, CreatePurchaseInvoiceMutationVariables>(CreatePurchaseInvoiceDocument, options);
      }
export type CreatePurchaseInvoiceMutationHookResult = ReturnType<typeof useCreatePurchaseInvoiceMutation>;
export type CreatePurchaseInvoiceMutationResult = Apollo.MutationResult<CreatePurchaseInvoiceMutation>;
export type CreatePurchaseInvoiceMutationOptions = Apollo.BaseMutationOptions<CreatePurchaseInvoiceMutation, CreatePurchaseInvoiceMutationVariables>;
export const CreatePurchaseOrderDocument = gql`
    mutation CreatePurchaseOrder($request: CreatePurchaseOrderRequest!) {
  createPurchaseOrder(request: $request) {
    supplierUuid
    status
    items {
      itemName
    }
  }
}
    `;
export type CreatePurchaseOrderMutationFn = Apollo.MutationFunction<CreatePurchaseOrderMutation, CreatePurchaseOrderMutationVariables>;

/**
 * __useCreatePurchaseOrderMutation__
 *
 * To run a mutation, you first call `useCreatePurchaseOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePurchaseOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPurchaseOrderMutation, { data, loading, error }] = useCreatePurchaseOrderMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreatePurchaseOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreatePurchaseOrderMutation, CreatePurchaseOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePurchaseOrderMutation, CreatePurchaseOrderMutationVariables>(CreatePurchaseOrderDocument, options);
      }
export type CreatePurchaseOrderMutationHookResult = ReturnType<typeof useCreatePurchaseOrderMutation>;
export type CreatePurchaseOrderMutationResult = Apollo.MutationResult<CreatePurchaseOrderMutation>;
export type CreatePurchaseOrderMutationOptions = Apollo.BaseMutationOptions<CreatePurchaseOrderMutation, CreatePurchaseOrderMutationVariables>;
export const CreateReceiptNoteDocument = gql`
    mutation CreateReceiptNote($request: CreateReceiptNoteRequest!) {
  createReceiptNote(request: $request) {
    purchaseOrderUuid
    totalQty
    status
    items {
      itemName
    }
  }
}
    `;
export type CreateReceiptNoteMutationFn = Apollo.MutationFunction<CreateReceiptNoteMutation, CreateReceiptNoteMutationVariables>;

/**
 * __useCreateReceiptNoteMutation__
 *
 * To run a mutation, you first call `useCreateReceiptNoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReceiptNoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReceiptNoteMutation, { data, loading, error }] = useCreateReceiptNoteMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateReceiptNoteMutation(baseOptions?: Apollo.MutationHookOptions<CreateReceiptNoteMutation, CreateReceiptNoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateReceiptNoteMutation, CreateReceiptNoteMutationVariables>(CreateReceiptNoteDocument, options);
      }
export type CreateReceiptNoteMutationHookResult = ReturnType<typeof useCreateReceiptNoteMutation>;
export type CreateReceiptNoteMutationResult = Apollo.MutationResult<CreateReceiptNoteMutation>;
export type CreateReceiptNoteMutationOptions = Apollo.BaseMutationOptions<CreateReceiptNoteMutation, CreateReceiptNoteMutationVariables>;
export const CreateSalesInvoiceDocument = gql`
    mutation CreateSalesInvoice($request: CreateSalesInvoiceRequest!) {
  createSalesInvoice(request: $request) {
    status
    amount
  }
}
    `;
export type CreateSalesInvoiceMutationFn = Apollo.MutationFunction<CreateSalesInvoiceMutation, CreateSalesInvoiceMutationVariables>;

/**
 * __useCreateSalesInvoiceMutation__
 *
 * To run a mutation, you first call `useCreateSalesInvoiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSalesInvoiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSalesInvoiceMutation, { data, loading, error }] = useCreateSalesInvoiceMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateSalesInvoiceMutation(baseOptions?: Apollo.MutationHookOptions<CreateSalesInvoiceMutation, CreateSalesInvoiceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSalesInvoiceMutation, CreateSalesInvoiceMutationVariables>(CreateSalesInvoiceDocument, options);
      }
export type CreateSalesInvoiceMutationHookResult = ReturnType<typeof useCreateSalesInvoiceMutation>;
export type CreateSalesInvoiceMutationResult = Apollo.MutationResult<CreateSalesInvoiceMutation>;
export type CreateSalesInvoiceMutationOptions = Apollo.BaseMutationOptions<CreateSalesInvoiceMutation, CreateSalesInvoiceMutationVariables>;
export const CreateSalesOrderDocument = gql`
    mutation CreateSalesOrder($request: CreateSalesOrderRequest!) {
  createSalesOrder(request: $request) {
    customerUuid
    items {
      itemName
    }
  }
}
    `;
export type CreateSalesOrderMutationFn = Apollo.MutationFunction<CreateSalesOrderMutation, CreateSalesOrderMutationVariables>;

/**
 * __useCreateSalesOrderMutation__
 *
 * To run a mutation, you first call `useCreateSalesOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSalesOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSalesOrderMutation, { data, loading, error }] = useCreateSalesOrderMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateSalesOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateSalesOrderMutation, CreateSalesOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSalesOrderMutation, CreateSalesOrderMutationVariables>(CreateSalesOrderDocument, options);
      }
export type CreateSalesOrderMutationHookResult = ReturnType<typeof useCreateSalesOrderMutation>;
export type CreateSalesOrderMutationResult = Apollo.MutationResult<CreateSalesOrderMutation>;
export type CreateSalesOrderMutationOptions = Apollo.BaseMutationOptions<CreateSalesOrderMutation, CreateSalesOrderMutationVariables>;
export const CreateSupplierDocument = gql`
    mutation CreateSupplier($request: CreateSupplierRequest!) {
  createSupplier(request: $request) {
    uuid
    name
    address
  }
}
    `;
export type CreateSupplierMutationFn = Apollo.MutationFunction<CreateSupplierMutation, CreateSupplierMutationVariables>;

/**
 * __useCreateSupplierMutation__
 *
 * To run a mutation, you first call `useCreateSupplierMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSupplierMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSupplierMutation, { data, loading, error }] = useCreateSupplierMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateSupplierMutation(baseOptions?: Apollo.MutationHookOptions<CreateSupplierMutation, CreateSupplierMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSupplierMutation, CreateSupplierMutationVariables>(CreateSupplierDocument, options);
      }
export type CreateSupplierMutationHookResult = ReturnType<typeof useCreateSupplierMutation>;
export type CreateSupplierMutationResult = Apollo.MutationResult<CreateSupplierMutation>;
export type CreateSupplierMutationOptions = Apollo.BaseMutationOptions<CreateSupplierMutation, CreateSupplierMutationVariables>;
export const CreateWorkOrderDocument = gql`
    mutation CreateWorkOrder($request: CreateWorkOrderRequest!) {
  createWorkOrder(request: $request) {
    itemUuid
    status
  }
}
    `;
export type CreateWorkOrderMutationFn = Apollo.MutationFunction<CreateWorkOrderMutation, CreateWorkOrderMutationVariables>;

/**
 * __useCreateWorkOrderMutation__
 *
 * To run a mutation, you first call `useCreateWorkOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWorkOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWorkOrderMutation, { data, loading, error }] = useCreateWorkOrderMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateWorkOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateWorkOrderMutation, CreateWorkOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateWorkOrderMutation, CreateWorkOrderMutationVariables>(CreateWorkOrderDocument, options);
      }
export type CreateWorkOrderMutationHookResult = ReturnType<typeof useCreateWorkOrderMutation>;
export type CreateWorkOrderMutationResult = Apollo.MutationResult<CreateWorkOrderMutation>;
export type CreateWorkOrderMutationOptions = Apollo.BaseMutationOptions<CreateWorkOrderMutation, CreateWorkOrderMutationVariables>;
export const CreateWorkstationDocument = gql`
    mutation CreateWorkstation($request: CreateWorkstationRequest!) {
  createWorkstation(request: $request) {
    name
  }
}
    `;
export type CreateWorkstationMutationFn = Apollo.MutationFunction<CreateWorkstationMutation, CreateWorkstationMutationVariables>;

/**
 * __useCreateWorkstationMutation__
 *
 * To run a mutation, you first call `useCreateWorkstationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWorkstationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWorkstationMutation, { data, loading, error }] = useCreateWorkstationMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateWorkstationMutation(baseOptions?: Apollo.MutationHookOptions<CreateWorkstationMutation, CreateWorkstationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateWorkstationMutation, CreateWorkstationMutationVariables>(CreateWorkstationDocument, options);
      }
export type CreateWorkstationMutationHookResult = ReturnType<typeof useCreateWorkstationMutation>;
export type CreateWorkstationMutationResult = Apollo.MutationResult<CreateWorkstationMutation>;
export type CreateWorkstationMutationOptions = Apollo.BaseMutationOptions<CreateWorkstationMutation, CreateWorkstationMutationVariables>;
export const LoginDocument = gql`
    mutation Login($request: LoginRequest!) {
  login(request: $request) {
    uuid
    email
    accessToken
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const ReportJobCardDocument = gql`
    mutation ReportJobCard($request: ReportJobCardRequest!) {
  reportJobCard(request: $request) {
    status
    uuid
  }
}
    `;
export type ReportJobCardMutationFn = Apollo.MutationFunction<ReportJobCardMutation, ReportJobCardMutationVariables>;

/**
 * __useReportJobCardMutation__
 *
 * To run a mutation, you first call `useReportJobCardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReportJobCardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [reportJobCardMutation, { data, loading, error }] = useReportJobCardMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useReportJobCardMutation(baseOptions?: Apollo.MutationHookOptions<ReportJobCardMutation, ReportJobCardMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ReportJobCardMutation, ReportJobCardMutationVariables>(ReportJobCardDocument, options);
      }
export type ReportJobCardMutationHookResult = ReturnType<typeof useReportJobCardMutation>;
export type ReportJobCardMutationResult = Apollo.MutationResult<ReportJobCardMutation>;
export type ReportJobCardMutationOptions = Apollo.BaseMutationOptions<ReportJobCardMutation, ReportJobCardMutationVariables>;
export const StoreFinishItemDocument = gql`
    mutation StoreFinishItem($request: StoreFinishItemRequest!) {
  storeFinishItem(request: $request) {
    status
    uuid
  }
}
    `;
export type StoreFinishItemMutationFn = Apollo.MutationFunction<StoreFinishItemMutation, StoreFinishItemMutationVariables>;

/**
 * __useStoreFinishItemMutation__
 *
 * To run a mutation, you first call `useStoreFinishItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStoreFinishItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [storeFinishItemMutation, { data, loading, error }] = useStoreFinishItemMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useStoreFinishItemMutation(baseOptions?: Apollo.MutationHookOptions<StoreFinishItemMutation, StoreFinishItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<StoreFinishItemMutation, StoreFinishItemMutationVariables>(StoreFinishItemDocument, options);
      }
export type StoreFinishItemMutationHookResult = ReturnType<typeof useStoreFinishItemMutation>;
export type StoreFinishItemMutationResult = Apollo.MutationResult<StoreFinishItemMutation>;
export type StoreFinishItemMutationOptions = Apollo.BaseMutationOptions<StoreFinishItemMutation, StoreFinishItemMutationVariables>;
export const BomDocument = gql`
    query Bom($request: IdRequest!) {
  bom(request: $request) {
    uuid
    name
    itemName
    bomItems {
      uuid
      itemName
      uomName
      qty
    }
    bomProcesses {
      uuid
      position
      processName
    }
  }
}
    `;

/**
 * __useBomQuery__
 *
 * To run a query within a React component, call `useBomQuery` and pass it any options that fit your needs.
 * When your component renders, `useBomQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBomQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useBomQuery(baseOptions: Apollo.QueryHookOptions<BomQuery, BomQueryVariables> & ({ variables: BomQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BomQuery, BomQueryVariables>(BomDocument, options);
      }
export function useBomLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BomQuery, BomQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BomQuery, BomQueryVariables>(BomDocument, options);
        }
export function useBomSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<BomQuery, BomQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<BomQuery, BomQueryVariables>(BomDocument, options);
        }
export type BomQueryHookResult = ReturnType<typeof useBomQuery>;
export type BomLazyQueryHookResult = ReturnType<typeof useBomLazyQuery>;
export type BomSuspenseQueryHookResult = ReturnType<typeof useBomSuspenseQuery>;
export type BomQueryResult = Apollo.QueryResult<BomQuery, BomQueryVariables>;
export const BomsDocument = gql`
    query Boms {
  boms {
    ...BOMFields
  }
}
    ${BomFieldsFragmentDoc}`;

/**
 * __useBomsQuery__
 *
 * To run a query within a React component, call `useBomsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBomsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBomsQuery({
 *   variables: {
 *   },
 * });
 */
export function useBomsQuery(baseOptions?: Apollo.QueryHookOptions<BomsQuery, BomsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BomsQuery, BomsQueryVariables>(BomsDocument, options);
      }
export function useBomsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BomsQuery, BomsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BomsQuery, BomsQueryVariables>(BomsDocument, options);
        }
export function useBomsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<BomsQuery, BomsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<BomsQuery, BomsQueryVariables>(BomsDocument, options);
        }
export type BomsQueryHookResult = ReturnType<typeof useBomsQuery>;
export type BomsLazyQueryHookResult = ReturnType<typeof useBomsLazyQuery>;
export type BomsSuspenseQueryHookResult = ReturnType<typeof useBomsSuspenseQuery>;
export type BomsQueryResult = Apollo.QueryResult<BomsQuery, BomsQueryVariables>;
export const CompanyDocument = gql`
    query company {
  company {
    uuid
    name
  }
}
    `;

/**
 * __useCompanyQuery__
 *
 * To run a query within a React component, call `useCompanyQuery` and pass it any options that fit your needs.
 * When your component renders, `useCompanyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCompanyQuery({
 *   variables: {
 *   },
 * });
 */
export function useCompanyQuery(baseOptions?: Apollo.QueryHookOptions<CompanyQuery, CompanyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CompanyQuery, CompanyQueryVariables>(CompanyDocument, options);
      }
export function useCompanyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CompanyQuery, CompanyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CompanyQuery, CompanyQueryVariables>(CompanyDocument, options);
        }
export function useCompanySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CompanyQuery, CompanyQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CompanyQuery, CompanyQueryVariables>(CompanyDocument, options);
        }
export type CompanyQueryHookResult = ReturnType<typeof useCompanyQuery>;
export type CompanyLazyQueryHookResult = ReturnType<typeof useCompanyLazyQuery>;
export type CompanySuspenseQueryHookResult = ReturnType<typeof useCompanySuspenseQuery>;
export type CompanyQueryResult = Apollo.QueryResult<CompanyQuery, CompanyQueryVariables>;
export const CurrentUserDocument = gql`
    query CurrentUser {
  currentUser {
    email
    uuid
  }
}
    `;

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
      }
export function useCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
        }
export function useCurrentUserSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
        }
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserSuspenseQueryHookResult = ReturnType<typeof useCurrentUserSuspenseQuery>;
export type CurrentUserQueryResult = Apollo.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;
export const CustomerDocument = gql`
    query Customer($request: IdRequest!) {
  customer(request: $request) {
    ...CustomerFields
  }
}
    ${CustomerFieldsFragmentDoc}`;

/**
 * __useCustomerQuery__
 *
 * To run a query within a React component, call `useCustomerQuery` and pass it any options that fit your needs.
 * When your component renders, `useCustomerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCustomerQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCustomerQuery(baseOptions: Apollo.QueryHookOptions<CustomerQuery, CustomerQueryVariables> & ({ variables: CustomerQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CustomerQuery, CustomerQueryVariables>(CustomerDocument, options);
      }
export function useCustomerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CustomerQuery, CustomerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CustomerQuery, CustomerQueryVariables>(CustomerDocument, options);
        }
export function useCustomerSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CustomerQuery, CustomerQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CustomerQuery, CustomerQueryVariables>(CustomerDocument, options);
        }
export type CustomerQueryHookResult = ReturnType<typeof useCustomerQuery>;
export type CustomerLazyQueryHookResult = ReturnType<typeof useCustomerLazyQuery>;
export type CustomerSuspenseQueryHookResult = ReturnType<typeof useCustomerSuspenseQuery>;
export type CustomerQueryResult = Apollo.QueryResult<CustomerQuery, CustomerQueryVariables>;
export const CustomersDocument = gql`
    query Customers {
  customers {
    ...CustomerFields
  }
}
    ${CustomerFieldsFragmentDoc}`;

/**
 * __useCustomersQuery__
 *
 * To run a query within a React component, call `useCustomersQuery` and pass it any options that fit your needs.
 * When your component renders, `useCustomersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCustomersQuery({
 *   variables: {
 *   },
 * });
 */
export function useCustomersQuery(baseOptions?: Apollo.QueryHookOptions<CustomersQuery, CustomersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CustomersQuery, CustomersQueryVariables>(CustomersDocument, options);
      }
export function useCustomersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CustomersQuery, CustomersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CustomersQuery, CustomersQueryVariables>(CustomersDocument, options);
        }
export function useCustomersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CustomersQuery, CustomersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CustomersQuery, CustomersQueryVariables>(CustomersDocument, options);
        }
export type CustomersQueryHookResult = ReturnType<typeof useCustomersQuery>;
export type CustomersLazyQueryHookResult = ReturnType<typeof useCustomersLazyQuery>;
export type CustomersSuspenseQueryHookResult = ReturnType<typeof useCustomersSuspenseQuery>;
export type CustomersQueryResult = Apollo.QueryResult<CustomersQuery, CustomersQueryVariables>;
export const DeliveryNoteDocument = gql`
    query DeliveryNote($request: DeliveryNoteRequest!) {
  deliveryNote(request: $request) {
    ...DeliveryNoteFields
    items {
      ...DeliveryNoteItemFields
    }
  }
}
    ${DeliveryNoteFieldsFragmentDoc}
${DeliveryNoteItemFieldsFragmentDoc}`;

/**
 * __useDeliveryNoteQuery__
 *
 * To run a query within a React component, call `useDeliveryNoteQuery` and pass it any options that fit your needs.
 * When your component renders, `useDeliveryNoteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDeliveryNoteQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useDeliveryNoteQuery(baseOptions: Apollo.QueryHookOptions<DeliveryNoteQuery, DeliveryNoteQueryVariables> & ({ variables: DeliveryNoteQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DeliveryNoteQuery, DeliveryNoteQueryVariables>(DeliveryNoteDocument, options);
      }
export function useDeliveryNoteLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DeliveryNoteQuery, DeliveryNoteQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DeliveryNoteQuery, DeliveryNoteQueryVariables>(DeliveryNoteDocument, options);
        }
export function useDeliveryNoteSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<DeliveryNoteQuery, DeliveryNoteQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<DeliveryNoteQuery, DeliveryNoteQueryVariables>(DeliveryNoteDocument, options);
        }
export type DeliveryNoteQueryHookResult = ReturnType<typeof useDeliveryNoteQuery>;
export type DeliveryNoteLazyQueryHookResult = ReturnType<typeof useDeliveryNoteLazyQuery>;
export type DeliveryNoteSuspenseQueryHookResult = ReturnType<typeof useDeliveryNoteSuspenseQuery>;
export type DeliveryNoteQueryResult = Apollo.QueryResult<DeliveryNoteQuery, DeliveryNoteQueryVariables>;
export const DeliveryNotesDocument = gql`
    query DeliveryNotes {
  deliveryNotes {
    ...DeliveryNoteFields
    warehouse {
      name
    }
  }
}
    ${DeliveryNoteFieldsFragmentDoc}`;

/**
 * __useDeliveryNotesQuery__
 *
 * To run a query within a React component, call `useDeliveryNotesQuery` and pass it any options that fit your needs.
 * When your component renders, `useDeliveryNotesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDeliveryNotesQuery({
 *   variables: {
 *   },
 * });
 */
export function useDeliveryNotesQuery(baseOptions?: Apollo.QueryHookOptions<DeliveryNotesQuery, DeliveryNotesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DeliveryNotesQuery, DeliveryNotesQueryVariables>(DeliveryNotesDocument, options);
      }
export function useDeliveryNotesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DeliveryNotesQuery, DeliveryNotesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DeliveryNotesQuery, DeliveryNotesQueryVariables>(DeliveryNotesDocument, options);
        }
export function useDeliveryNotesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<DeliveryNotesQuery, DeliveryNotesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<DeliveryNotesQuery, DeliveryNotesQueryVariables>(DeliveryNotesDocument, options);
        }
export type DeliveryNotesQueryHookResult = ReturnType<typeof useDeliveryNotesQuery>;
export type DeliveryNotesLazyQueryHookResult = ReturnType<typeof useDeliveryNotesLazyQuery>;
export type DeliveryNotesSuspenseQueryHookResult = ReturnType<typeof useDeliveryNotesSuspenseQuery>;
export type DeliveryNotesQueryResult = Apollo.QueryResult<DeliveryNotesQuery, DeliveryNotesQueryVariables>;
export const InventoryEntriesDocument = gql`
    query InventoryEntries {
  inventoryEntries {
    code
    actualQty
    type
    qtyAfterTransaction
    threadType
    item {
      ...ItemFields
    }
    warehouse {
      ...WarehouseFields
    }
    stockUomUuid
    stockUom {
      uuid
      uomName
    }
    insertedAt
    updatedAt
  }
}
    ${ItemFieldsFragmentDoc}
${WarehouseFieldsFragmentDoc}`;

/**
 * __useInventoryEntriesQuery__
 *
 * To run a query within a React component, call `useInventoryEntriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useInventoryEntriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInventoryEntriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useInventoryEntriesQuery(baseOptions?: Apollo.QueryHookOptions<InventoryEntriesQuery, InventoryEntriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InventoryEntriesQuery, InventoryEntriesQueryVariables>(InventoryEntriesDocument, options);
      }
export function useInventoryEntriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InventoryEntriesQuery, InventoryEntriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InventoryEntriesQuery, InventoryEntriesQueryVariables>(InventoryEntriesDocument, options);
        }
export function useInventoryEntriesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<InventoryEntriesQuery, InventoryEntriesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<InventoryEntriesQuery, InventoryEntriesQueryVariables>(InventoryEntriesDocument, options);
        }
export type InventoryEntriesQueryHookResult = ReturnType<typeof useInventoryEntriesQuery>;
export type InventoryEntriesLazyQueryHookResult = ReturnType<typeof useInventoryEntriesLazyQuery>;
export type InventoryEntriesSuspenseQueryHookResult = ReturnType<typeof useInventoryEntriesSuspenseQuery>;
export type InventoryEntriesQueryResult = Apollo.QueryResult<InventoryEntriesQuery, InventoryEntriesQueryVariables>;
export const ItemDocument = gql`
    query Item($request: IdRequest!) {
  item(request: $request) {
    uuid
    name
    description
    sellingPrice
  }
}
    `;

/**
 * __useItemQuery__
 *
 * To run a query within a React component, call `useItemQuery` and pass it any options that fit your needs.
 * When your component renders, `useItemQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useItemQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useItemQuery(baseOptions: Apollo.QueryHookOptions<ItemQuery, ItemQueryVariables> & ({ variables: ItemQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ItemQuery, ItemQueryVariables>(ItemDocument, options);
      }
export function useItemLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ItemQuery, ItemQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ItemQuery, ItemQueryVariables>(ItemDocument, options);
        }
export function useItemSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ItemQuery, ItemQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ItemQuery, ItemQueryVariables>(ItemDocument, options);
        }
export type ItemQueryHookResult = ReturnType<typeof useItemQuery>;
export type ItemLazyQueryHookResult = ReturnType<typeof useItemLazyQuery>;
export type ItemSuspenseQueryHookResult = ReturnType<typeof useItemSuspenseQuery>;
export type ItemQueryResult = Apollo.QueryResult<ItemQuery, ItemQueryVariables>;
export const ItemsDocument = gql`
    query Items {
  items {
    ...ItemFields
    stockUoms {
      uuid
      conversionFactor
      uomName
    }
  }
}
    ${ItemFieldsFragmentDoc}`;

/**
 * __useItemsQuery__
 *
 * To run a query within a React component, call `useItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useItemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useItemsQuery(baseOptions?: Apollo.QueryHookOptions<ItemsQuery, ItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ItemsQuery, ItemsQueryVariables>(ItemsDocument, options);
      }
export function useItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ItemsQuery, ItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ItemsQuery, ItemsQueryVariables>(ItemsDocument, options);
        }
export function useItemsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ItemsQuery, ItemsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ItemsQuery, ItemsQueryVariables>(ItemsDocument, options);
        }
export type ItemsQueryHookResult = ReturnType<typeof useItemsQuery>;
export type ItemsLazyQueryHookResult = ReturnType<typeof useItemsLazyQuery>;
export type ItemsSuspenseQueryHookResult = ReturnType<typeof useItemsSuspenseQuery>;
export type ItemsQueryResult = Apollo.QueryResult<ItemsQuery, ItemsQueryVariables>;
export const ListStaffDocument = gql`
    query ListStaff {
  listStaff {
    ...StaffFields
  }
}
    ${StaffFieldsFragmentDoc}`;

/**
 * __useListStaffQuery__
 *
 * To run a query within a React component, call `useListStaffQuery` and pass it any options that fit your needs.
 * When your component renders, `useListStaffQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListStaffQuery({
 *   variables: {
 *   },
 * });
 */
export function useListStaffQuery(baseOptions?: Apollo.QueryHookOptions<ListStaffQuery, ListStaffQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListStaffQuery, ListStaffQueryVariables>(ListStaffDocument, options);
      }
export function useListStaffLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListStaffQuery, ListStaffQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListStaffQuery, ListStaffQueryVariables>(ListStaffDocument, options);
        }
export function useListStaffSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ListStaffQuery, ListStaffQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ListStaffQuery, ListStaffQueryVariables>(ListStaffDocument, options);
        }
export type ListStaffQueryHookResult = ReturnType<typeof useListStaffQuery>;
export type ListStaffLazyQueryHookResult = ReturnType<typeof useListStaffLazyQuery>;
export type ListStaffSuspenseQueryHookResult = ReturnType<typeof useListStaffSuspenseQuery>;
export type ListStaffQueryResult = Apollo.QueryResult<ListStaffQuery, ListStaffQueryVariables>;
export const PaymentEntriesDocument = gql`
    query PaymentEntries {
  paymentEntries {
    uuid
    partyUuid
    memo
  }
}
    `;

/**
 * __usePaymentEntriesQuery__
 *
 * To run a query within a React component, call `usePaymentEntriesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePaymentEntriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePaymentEntriesQuery({
 *   variables: {
 *   },
 * });
 */
export function usePaymentEntriesQuery(baseOptions?: Apollo.QueryHookOptions<PaymentEntriesQuery, PaymentEntriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PaymentEntriesQuery, PaymentEntriesQueryVariables>(PaymentEntriesDocument, options);
      }
export function usePaymentEntriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PaymentEntriesQuery, PaymentEntriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PaymentEntriesQuery, PaymentEntriesQueryVariables>(PaymentEntriesDocument, options);
        }
export function usePaymentEntriesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<PaymentEntriesQuery, PaymentEntriesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PaymentEntriesQuery, PaymentEntriesQueryVariables>(PaymentEntriesDocument, options);
        }
export type PaymentEntriesQueryHookResult = ReturnType<typeof usePaymentEntriesQuery>;
export type PaymentEntriesLazyQueryHookResult = ReturnType<typeof usePaymentEntriesLazyQuery>;
export type PaymentEntriesSuspenseQueryHookResult = ReturnType<typeof usePaymentEntriesSuspenseQuery>;
export type PaymentEntriesQueryResult = Apollo.QueryResult<PaymentEntriesQuery, PaymentEntriesQueryVariables>;
export const PaymentEntryDocument = gql`
    query PaymentEntry($request: IdRequest!) {
  paymentEntry(request: $request) {
    uuid
  }
}
    `;

/**
 * __usePaymentEntryQuery__
 *
 * To run a query within a React component, call `usePaymentEntryQuery` and pass it any options that fit your needs.
 * When your component renders, `usePaymentEntryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePaymentEntryQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function usePaymentEntryQuery(baseOptions: Apollo.QueryHookOptions<PaymentEntryQuery, PaymentEntryQueryVariables> & ({ variables: PaymentEntryQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PaymentEntryQuery, PaymentEntryQueryVariables>(PaymentEntryDocument, options);
      }
export function usePaymentEntryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PaymentEntryQuery, PaymentEntryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PaymentEntryQuery, PaymentEntryQueryVariables>(PaymentEntryDocument, options);
        }
export function usePaymentEntrySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<PaymentEntryQuery, PaymentEntryQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PaymentEntryQuery, PaymentEntryQueryVariables>(PaymentEntryDocument, options);
        }
export type PaymentEntryQueryHookResult = ReturnType<typeof usePaymentEntryQuery>;
export type PaymentEntryLazyQueryHookResult = ReturnType<typeof usePaymentEntryLazyQuery>;
export type PaymentEntrySuspenseQueryHookResult = ReturnType<typeof usePaymentEntrySuspenseQuery>;
export type PaymentEntryQueryResult = Apollo.QueryResult<PaymentEntryQuery, PaymentEntryQueryVariables>;
export const PaymentMethodDocument = gql`
    query PaymentMethod($request: IdRequest!) {
  paymentMethod(request: $request) {
    ...PaymentMethodsFields
  }
}
    ${PaymentMethodsFieldsFragmentDoc}`;

/**
 * __usePaymentMethodQuery__
 *
 * To run a query within a React component, call `usePaymentMethodQuery` and pass it any options that fit your needs.
 * When your component renders, `usePaymentMethodQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePaymentMethodQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function usePaymentMethodQuery(baseOptions: Apollo.QueryHookOptions<PaymentMethodQuery, PaymentMethodQueryVariables> & ({ variables: PaymentMethodQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PaymentMethodQuery, PaymentMethodQueryVariables>(PaymentMethodDocument, options);
      }
export function usePaymentMethodLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PaymentMethodQuery, PaymentMethodQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PaymentMethodQuery, PaymentMethodQueryVariables>(PaymentMethodDocument, options);
        }
export function usePaymentMethodSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<PaymentMethodQuery, PaymentMethodQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PaymentMethodQuery, PaymentMethodQueryVariables>(PaymentMethodDocument, options);
        }
export type PaymentMethodQueryHookResult = ReturnType<typeof usePaymentMethodQuery>;
export type PaymentMethodLazyQueryHookResult = ReturnType<typeof usePaymentMethodLazyQuery>;
export type PaymentMethodSuspenseQueryHookResult = ReturnType<typeof usePaymentMethodSuspenseQuery>;
export type PaymentMethodQueryResult = Apollo.QueryResult<PaymentMethodQuery, PaymentMethodQueryVariables>;
export const PaymentMethodsDocument = gql`
    query PaymentMethods {
  paymentMethods {
    ...PaymentMethodsFields
  }
}
    ${PaymentMethodsFieldsFragmentDoc}`;

/**
 * __usePaymentMethodsQuery__
 *
 * To run a query within a React component, call `usePaymentMethodsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePaymentMethodsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePaymentMethodsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePaymentMethodsQuery(baseOptions?: Apollo.QueryHookOptions<PaymentMethodsQuery, PaymentMethodsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PaymentMethodsQuery, PaymentMethodsQueryVariables>(PaymentMethodsDocument, options);
      }
export function usePaymentMethodsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PaymentMethodsQuery, PaymentMethodsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PaymentMethodsQuery, PaymentMethodsQueryVariables>(PaymentMethodsDocument, options);
        }
export function usePaymentMethodsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<PaymentMethodsQuery, PaymentMethodsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PaymentMethodsQuery, PaymentMethodsQueryVariables>(PaymentMethodsDocument, options);
        }
export type PaymentMethodsQueryHookResult = ReturnType<typeof usePaymentMethodsQuery>;
export type PaymentMethodsLazyQueryHookResult = ReturnType<typeof usePaymentMethodsLazyQuery>;
export type PaymentMethodsSuspenseQueryHookResult = ReturnType<typeof usePaymentMethodsSuspenseQuery>;
export type PaymentMethodsQueryResult = Apollo.QueryResult<PaymentMethodsQuery, PaymentMethodsQueryVariables>;
export const ProcessDocument = gql`
    query Process($request: IdRequest!) {
  process(request: $request) {
    uuid
  }
}
    `;

/**
 * __useProcessQuery__
 *
 * To run a query within a React component, call `useProcessQuery` and pass it any options that fit your needs.
 * When your component renders, `useProcessQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProcessQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useProcessQuery(baseOptions: Apollo.QueryHookOptions<ProcessQuery, ProcessQueryVariables> & ({ variables: ProcessQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProcessQuery, ProcessQueryVariables>(ProcessDocument, options);
      }
export function useProcessLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProcessQuery, ProcessQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProcessQuery, ProcessQueryVariables>(ProcessDocument, options);
        }
export function useProcessSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ProcessQuery, ProcessQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProcessQuery, ProcessQueryVariables>(ProcessDocument, options);
        }
export type ProcessQueryHookResult = ReturnType<typeof useProcessQuery>;
export type ProcessLazyQueryHookResult = ReturnType<typeof useProcessLazyQuery>;
export type ProcessSuspenseQueryHookResult = ReturnType<typeof useProcessSuspenseQuery>;
export type ProcessQueryResult = Apollo.QueryResult<ProcessQuery, ProcessQueryVariables>;
export const ProcessesDocument = gql`
    query Processes {
  processes {
    ...ProcessFields
  }
}
    ${ProcessFieldsFragmentDoc}`;

/**
 * __useProcessesQuery__
 *
 * To run a query within a React component, call `useProcessesQuery` and pass it any options that fit your needs.
 * When your component renders, `useProcessesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProcessesQuery({
 *   variables: {
 *   },
 * });
 */
export function useProcessesQuery(baseOptions?: Apollo.QueryHookOptions<ProcessesQuery, ProcessesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProcessesQuery, ProcessesQueryVariables>(ProcessesDocument, options);
      }
export function useProcessesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProcessesQuery, ProcessesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProcessesQuery, ProcessesQueryVariables>(ProcessesDocument, options);
        }
export function useProcessesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ProcessesQuery, ProcessesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProcessesQuery, ProcessesQueryVariables>(ProcessesDocument, options);
        }
export type ProcessesQueryHookResult = ReturnType<typeof useProcessesQuery>;
export type ProcessesLazyQueryHookResult = ReturnType<typeof useProcessesLazyQuery>;
export type ProcessesSuspenseQueryHookResult = ReturnType<typeof useProcessesSuspenseQuery>;
export type ProcessesQueryResult = Apollo.QueryResult<ProcessesQuery, ProcessesQueryVariables>;
export const PurchaseInvoiceDocument = gql`
    query PurchaseInvoice($request: PurchaseInvoiceRequest!) {
  purchaseInvoice(request: $request) {
    ...PurchaseInvoiceFields
  }
}
    ${PurchaseInvoiceFieldsFragmentDoc}`;

/**
 * __usePurchaseInvoiceQuery__
 *
 * To run a query within a React component, call `usePurchaseInvoiceQuery` and pass it any options that fit your needs.
 * When your component renders, `usePurchaseInvoiceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePurchaseInvoiceQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function usePurchaseInvoiceQuery(baseOptions: Apollo.QueryHookOptions<PurchaseInvoiceQuery, PurchaseInvoiceQueryVariables> & ({ variables: PurchaseInvoiceQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PurchaseInvoiceQuery, PurchaseInvoiceQueryVariables>(PurchaseInvoiceDocument, options);
      }
export function usePurchaseInvoiceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PurchaseInvoiceQuery, PurchaseInvoiceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PurchaseInvoiceQuery, PurchaseInvoiceQueryVariables>(PurchaseInvoiceDocument, options);
        }
export function usePurchaseInvoiceSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<PurchaseInvoiceQuery, PurchaseInvoiceQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PurchaseInvoiceQuery, PurchaseInvoiceQueryVariables>(PurchaseInvoiceDocument, options);
        }
export type PurchaseInvoiceQueryHookResult = ReturnType<typeof usePurchaseInvoiceQuery>;
export type PurchaseInvoiceLazyQueryHookResult = ReturnType<typeof usePurchaseInvoiceLazyQuery>;
export type PurchaseInvoiceSuspenseQueryHookResult = ReturnType<typeof usePurchaseInvoiceSuspenseQuery>;
export type PurchaseInvoiceQueryResult = Apollo.QueryResult<PurchaseInvoiceQuery, PurchaseInvoiceQueryVariables>;
export const PurchaseInvoicesDocument = gql`
    query PurchaseInvoices {
  purchaseInvoices {
    ...PurchaseInvoiceFields
  }
}
    ${PurchaseInvoiceFieldsFragmentDoc}`;

/**
 * __usePurchaseInvoicesQuery__
 *
 * To run a query within a React component, call `usePurchaseInvoicesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePurchaseInvoicesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePurchaseInvoicesQuery({
 *   variables: {
 *   },
 * });
 */
export function usePurchaseInvoicesQuery(baseOptions?: Apollo.QueryHookOptions<PurchaseInvoicesQuery, PurchaseInvoicesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PurchaseInvoicesQuery, PurchaseInvoicesQueryVariables>(PurchaseInvoicesDocument, options);
      }
export function usePurchaseInvoicesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PurchaseInvoicesQuery, PurchaseInvoicesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PurchaseInvoicesQuery, PurchaseInvoicesQueryVariables>(PurchaseInvoicesDocument, options);
        }
export function usePurchaseInvoicesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<PurchaseInvoicesQuery, PurchaseInvoicesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PurchaseInvoicesQuery, PurchaseInvoicesQueryVariables>(PurchaseInvoicesDocument, options);
        }
export type PurchaseInvoicesQueryHookResult = ReturnType<typeof usePurchaseInvoicesQuery>;
export type PurchaseInvoicesLazyQueryHookResult = ReturnType<typeof usePurchaseInvoicesLazyQuery>;
export type PurchaseInvoicesSuspenseQueryHookResult = ReturnType<typeof usePurchaseInvoicesSuspenseQuery>;
export type PurchaseInvoicesQueryResult = Apollo.QueryResult<PurchaseInvoicesQuery, PurchaseInvoicesQueryVariables>;
export const PurchaseOrderDocument = gql`
    query PurchaseOrder($request: PurchaseOrderRequest!) {
  purchaseOrder(request: $request) {
    ...PurchaseOrderFields
    items {
      ...PurchaseOrderItemFields
    }
    purchaseInvoices {
      ...PurchaseInvoiceFields
    }
    receiptNotes {
      ...ReceiptNoteFields
    }
  }
}
    ${PurchaseOrderFieldsFragmentDoc}
${PurchaseOrderItemFieldsFragmentDoc}
${PurchaseInvoiceFieldsFragmentDoc}
${ReceiptNoteFieldsFragmentDoc}`;

/**
 * __usePurchaseOrderQuery__
 *
 * To run a query within a React component, call `usePurchaseOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `usePurchaseOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePurchaseOrderQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function usePurchaseOrderQuery(baseOptions: Apollo.QueryHookOptions<PurchaseOrderQuery, PurchaseOrderQueryVariables> & ({ variables: PurchaseOrderQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PurchaseOrderQuery, PurchaseOrderQueryVariables>(PurchaseOrderDocument, options);
      }
export function usePurchaseOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PurchaseOrderQuery, PurchaseOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PurchaseOrderQuery, PurchaseOrderQueryVariables>(PurchaseOrderDocument, options);
        }
export function usePurchaseOrderSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<PurchaseOrderQuery, PurchaseOrderQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PurchaseOrderQuery, PurchaseOrderQueryVariables>(PurchaseOrderDocument, options);
        }
export type PurchaseOrderQueryHookResult = ReturnType<typeof usePurchaseOrderQuery>;
export type PurchaseOrderLazyQueryHookResult = ReturnType<typeof usePurchaseOrderLazyQuery>;
export type PurchaseOrderSuspenseQueryHookResult = ReturnType<typeof usePurchaseOrderSuspenseQuery>;
export type PurchaseOrderQueryResult = Apollo.QueryResult<PurchaseOrderQuery, PurchaseOrderQueryVariables>;
export const PurchaseOrdersDocument = gql`
    query PurchaseOrders {
  purchaseOrders {
    ...PurchaseOrderFields
    items {
      ...PurchaseOrderItemFields
    }
  }
}
    ${PurchaseOrderFieldsFragmentDoc}
${PurchaseOrderItemFieldsFragmentDoc}`;

/**
 * __usePurchaseOrdersQuery__
 *
 * To run a query within a React component, call `usePurchaseOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `usePurchaseOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePurchaseOrdersQuery({
 *   variables: {
 *   },
 * });
 */
export function usePurchaseOrdersQuery(baseOptions?: Apollo.QueryHookOptions<PurchaseOrdersQuery, PurchaseOrdersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PurchaseOrdersQuery, PurchaseOrdersQueryVariables>(PurchaseOrdersDocument, options);
      }
export function usePurchaseOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PurchaseOrdersQuery, PurchaseOrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PurchaseOrdersQuery, PurchaseOrdersQueryVariables>(PurchaseOrdersDocument, options);
        }
export function usePurchaseOrdersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<PurchaseOrdersQuery, PurchaseOrdersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PurchaseOrdersQuery, PurchaseOrdersQueryVariables>(PurchaseOrdersDocument, options);
        }
export type PurchaseOrdersQueryHookResult = ReturnType<typeof usePurchaseOrdersQuery>;
export type PurchaseOrdersLazyQueryHookResult = ReturnType<typeof usePurchaseOrdersLazyQuery>;
export type PurchaseOrdersSuspenseQueryHookResult = ReturnType<typeof usePurchaseOrdersSuspenseQuery>;
export type PurchaseOrdersQueryResult = Apollo.QueryResult<PurchaseOrdersQuery, PurchaseOrdersQueryVariables>;
export const ReceiptNoteDocument = gql`
    query ReceiptNote($request: ReceiptNoteRequest!) {
  receiptNote(request: $request) {
    ...ReceiptNoteFields
    items {
      ...ReceiptNoteItemFields
    }
  }
}
    ${ReceiptNoteFieldsFragmentDoc}
${ReceiptNoteItemFieldsFragmentDoc}`;

/**
 * __useReceiptNoteQuery__
 *
 * To run a query within a React component, call `useReceiptNoteQuery` and pass it any options that fit your needs.
 * When your component renders, `useReceiptNoteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReceiptNoteQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useReceiptNoteQuery(baseOptions: Apollo.QueryHookOptions<ReceiptNoteQuery, ReceiptNoteQueryVariables> & ({ variables: ReceiptNoteQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReceiptNoteQuery, ReceiptNoteQueryVariables>(ReceiptNoteDocument, options);
      }
export function useReceiptNoteLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReceiptNoteQuery, ReceiptNoteQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReceiptNoteQuery, ReceiptNoteQueryVariables>(ReceiptNoteDocument, options);
        }
export function useReceiptNoteSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ReceiptNoteQuery, ReceiptNoteQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ReceiptNoteQuery, ReceiptNoteQueryVariables>(ReceiptNoteDocument, options);
        }
export type ReceiptNoteQueryHookResult = ReturnType<typeof useReceiptNoteQuery>;
export type ReceiptNoteLazyQueryHookResult = ReturnType<typeof useReceiptNoteLazyQuery>;
export type ReceiptNoteSuspenseQueryHookResult = ReturnType<typeof useReceiptNoteSuspenseQuery>;
export type ReceiptNoteQueryResult = Apollo.QueryResult<ReceiptNoteQuery, ReceiptNoteQueryVariables>;
export const ReceiptNotesDocument = gql`
    query ReceiptNotes {
  receiptNotes {
    ...ReceiptNoteFields
    warehouse {
      name
    }
  }
}
    ${ReceiptNoteFieldsFragmentDoc}`;

/**
 * __useReceiptNotesQuery__
 *
 * To run a query within a React component, call `useReceiptNotesQuery` and pass it any options that fit your needs.
 * When your component renders, `useReceiptNotesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReceiptNotesQuery({
 *   variables: {
 *   },
 * });
 */
export function useReceiptNotesQuery(baseOptions?: Apollo.QueryHookOptions<ReceiptNotesQuery, ReceiptNotesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReceiptNotesQuery, ReceiptNotesQueryVariables>(ReceiptNotesDocument, options);
      }
export function useReceiptNotesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReceiptNotesQuery, ReceiptNotesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReceiptNotesQuery, ReceiptNotesQueryVariables>(ReceiptNotesDocument, options);
        }
export function useReceiptNotesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ReceiptNotesQuery, ReceiptNotesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ReceiptNotesQuery, ReceiptNotesQueryVariables>(ReceiptNotesDocument, options);
        }
export type ReceiptNotesQueryHookResult = ReturnType<typeof useReceiptNotesQuery>;
export type ReceiptNotesLazyQueryHookResult = ReturnType<typeof useReceiptNotesLazyQuery>;
export type ReceiptNotesSuspenseQueryHookResult = ReturnType<typeof useReceiptNotesSuspenseQuery>;
export type ReceiptNotesQueryResult = Apollo.QueryResult<ReceiptNotesQuery, ReceiptNotesQueryVariables>;
export const SalesInvoiceDocument = gql`
    query SalesInvoice($request: SalesInvoiceRequest!) {
  salesInvoice(request: $request) {
    ...SalesInvoiceFields
  }
}
    ${SalesInvoiceFieldsFragmentDoc}`;

/**
 * __useSalesInvoiceQuery__
 *
 * To run a query within a React component, call `useSalesInvoiceQuery` and pass it any options that fit your needs.
 * When your component renders, `useSalesInvoiceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSalesInvoiceQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useSalesInvoiceQuery(baseOptions: Apollo.QueryHookOptions<SalesInvoiceQuery, SalesInvoiceQueryVariables> & ({ variables: SalesInvoiceQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SalesInvoiceQuery, SalesInvoiceQueryVariables>(SalesInvoiceDocument, options);
      }
export function useSalesInvoiceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SalesInvoiceQuery, SalesInvoiceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SalesInvoiceQuery, SalesInvoiceQueryVariables>(SalesInvoiceDocument, options);
        }
export function useSalesInvoiceSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SalesInvoiceQuery, SalesInvoiceQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SalesInvoiceQuery, SalesInvoiceQueryVariables>(SalesInvoiceDocument, options);
        }
export type SalesInvoiceQueryHookResult = ReturnType<typeof useSalesInvoiceQuery>;
export type SalesInvoiceLazyQueryHookResult = ReturnType<typeof useSalesInvoiceLazyQuery>;
export type SalesInvoiceSuspenseQueryHookResult = ReturnType<typeof useSalesInvoiceSuspenseQuery>;
export type SalesInvoiceQueryResult = Apollo.QueryResult<SalesInvoiceQuery, SalesInvoiceQueryVariables>;
export const SalesInvoicesDocument = gql`
    query SalesInvoices {
  salesInvoices {
    ...SalesInvoiceFields
  }
}
    ${SalesInvoiceFieldsFragmentDoc}`;

/**
 * __useSalesInvoicesQuery__
 *
 * To run a query within a React component, call `useSalesInvoicesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSalesInvoicesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSalesInvoicesQuery({
 *   variables: {
 *   },
 * });
 */
export function useSalesInvoicesQuery(baseOptions?: Apollo.QueryHookOptions<SalesInvoicesQuery, SalesInvoicesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SalesInvoicesQuery, SalesInvoicesQueryVariables>(SalesInvoicesDocument, options);
      }
export function useSalesInvoicesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SalesInvoicesQuery, SalesInvoicesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SalesInvoicesQuery, SalesInvoicesQueryVariables>(SalesInvoicesDocument, options);
        }
export function useSalesInvoicesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SalesInvoicesQuery, SalesInvoicesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SalesInvoicesQuery, SalesInvoicesQueryVariables>(SalesInvoicesDocument, options);
        }
export type SalesInvoicesQueryHookResult = ReturnType<typeof useSalesInvoicesQuery>;
export type SalesInvoicesLazyQueryHookResult = ReturnType<typeof useSalesInvoicesLazyQuery>;
export type SalesInvoicesSuspenseQueryHookResult = ReturnType<typeof useSalesInvoicesSuspenseQuery>;
export type SalesInvoicesQueryResult = Apollo.QueryResult<SalesInvoicesQuery, SalesInvoicesQueryVariables>;
export const SalesOrderDocument = gql`
    query SalesOrder($request: SalesOrderRequest!) {
  salesOrder(request: $request) {
    ...SalesOrderFields
    items {
      ...SalesOrderItemFields
    }
    deliveryNotes {
      ...DeliveryNoteFields
    }
    salesInvoices {
      ...SalesInvoiceFields
    }
  }
}
    ${SalesOrderFieldsFragmentDoc}
${SalesOrderItemFieldsFragmentDoc}
${DeliveryNoteFieldsFragmentDoc}
${SalesInvoiceFieldsFragmentDoc}`;

/**
 * __useSalesOrderQuery__
 *
 * To run a query within a React component, call `useSalesOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useSalesOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSalesOrderQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useSalesOrderQuery(baseOptions: Apollo.QueryHookOptions<SalesOrderQuery, SalesOrderQueryVariables> & ({ variables: SalesOrderQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SalesOrderQuery, SalesOrderQueryVariables>(SalesOrderDocument, options);
      }
export function useSalesOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SalesOrderQuery, SalesOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SalesOrderQuery, SalesOrderQueryVariables>(SalesOrderDocument, options);
        }
export function useSalesOrderSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SalesOrderQuery, SalesOrderQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SalesOrderQuery, SalesOrderQueryVariables>(SalesOrderDocument, options);
        }
export type SalesOrderQueryHookResult = ReturnType<typeof useSalesOrderQuery>;
export type SalesOrderLazyQueryHookResult = ReturnType<typeof useSalesOrderLazyQuery>;
export type SalesOrderSuspenseQueryHookResult = ReturnType<typeof useSalesOrderSuspenseQuery>;
export type SalesOrderQueryResult = Apollo.QueryResult<SalesOrderQuery, SalesOrderQueryVariables>;
export const SalesOrdersDocument = gql`
    query SalesOrders {
  salesOrders {
    ...SalesOrderFields
    items {
      ...SalesOrderItemFields
    }
  }
}
    ${SalesOrderFieldsFragmentDoc}
${SalesOrderItemFieldsFragmentDoc}`;

/**
 * __useSalesOrdersQuery__
 *
 * To run a query within a React component, call `useSalesOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useSalesOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSalesOrdersQuery({
 *   variables: {
 *   },
 * });
 */
export function useSalesOrdersQuery(baseOptions?: Apollo.QueryHookOptions<SalesOrdersQuery, SalesOrdersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SalesOrdersQuery, SalesOrdersQueryVariables>(SalesOrdersDocument, options);
      }
export function useSalesOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SalesOrdersQuery, SalesOrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SalesOrdersQuery, SalesOrdersQueryVariables>(SalesOrdersDocument, options);
        }
export function useSalesOrdersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SalesOrdersQuery, SalesOrdersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SalesOrdersQuery, SalesOrdersQueryVariables>(SalesOrdersDocument, options);
        }
export type SalesOrdersQueryHookResult = ReturnType<typeof useSalesOrdersQuery>;
export type SalesOrdersLazyQueryHookResult = ReturnType<typeof useSalesOrdersLazyQuery>;
export type SalesOrdersSuspenseQueryHookResult = ReturnType<typeof useSalesOrdersSuspenseQuery>;
export type SalesOrdersQueryResult = Apollo.QueryResult<SalesOrdersQuery, SalesOrdersQueryVariables>;
export const ScheduleWorkOrderDocument = gql`
    mutation ScheduleWorkOrder($request: WorkOrderRequest!) {
  scheduleWorkOrder(request: $request) {
    status
  }
}
    `;
export type ScheduleWorkOrderMutationFn = Apollo.MutationFunction<ScheduleWorkOrderMutation, ScheduleWorkOrderMutationVariables>;

/**
 * __useScheduleWorkOrderMutation__
 *
 * To run a mutation, you first call `useScheduleWorkOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useScheduleWorkOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [scheduleWorkOrderMutation, { data, loading, error }] = useScheduleWorkOrderMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useScheduleWorkOrderMutation(baseOptions?: Apollo.MutationHookOptions<ScheduleWorkOrderMutation, ScheduleWorkOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ScheduleWorkOrderMutation, ScheduleWorkOrderMutationVariables>(ScheduleWorkOrderDocument, options);
      }
export type ScheduleWorkOrderMutationHookResult = ReturnType<typeof useScheduleWorkOrderMutation>;
export type ScheduleWorkOrderMutationResult = Apollo.MutationResult<ScheduleWorkOrderMutation>;
export type ScheduleWorkOrderMutationOptions = Apollo.BaseMutationOptions<ScheduleWorkOrderMutation, ScheduleWorkOrderMutationVariables>;
export const SupplierDocument = gql`
    query Supplier($request: IdRequest!) {
  supplier(request: $request) {
    ...SupplierFields
  }
}
    ${SupplierFieldsFragmentDoc}`;

/**
 * __useSupplierQuery__
 *
 * To run a query within a React component, call `useSupplierQuery` and pass it any options that fit your needs.
 * When your component renders, `useSupplierQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSupplierQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useSupplierQuery(baseOptions: Apollo.QueryHookOptions<SupplierQuery, SupplierQueryVariables> & ({ variables: SupplierQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SupplierQuery, SupplierQueryVariables>(SupplierDocument, options);
      }
export function useSupplierLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SupplierQuery, SupplierQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SupplierQuery, SupplierQueryVariables>(SupplierDocument, options);
        }
export function useSupplierSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SupplierQuery, SupplierQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SupplierQuery, SupplierQueryVariables>(SupplierDocument, options);
        }
export type SupplierQueryHookResult = ReturnType<typeof useSupplierQuery>;
export type SupplierLazyQueryHookResult = ReturnType<typeof useSupplierLazyQuery>;
export type SupplierSuspenseQueryHookResult = ReturnType<typeof useSupplierSuspenseQuery>;
export type SupplierQueryResult = Apollo.QueryResult<SupplierQuery, SupplierQueryVariables>;
export const SuppliersDocument = gql`
    query Suppliers {
  suppliers {
    ...SupplierFields
  }
}
    ${SupplierFieldsFragmentDoc}`;

/**
 * __useSuppliersQuery__
 *
 * To run a query within a React component, call `useSuppliersQuery` and pass it any options that fit your needs.
 * When your component renders, `useSuppliersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSuppliersQuery({
 *   variables: {
 *   },
 * });
 */
export function useSuppliersQuery(baseOptions?: Apollo.QueryHookOptions<SuppliersQuery, SuppliersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SuppliersQuery, SuppliersQueryVariables>(SuppliersDocument, options);
      }
export function useSuppliersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SuppliersQuery, SuppliersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SuppliersQuery, SuppliersQueryVariables>(SuppliersDocument, options);
        }
export function useSuppliersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SuppliersQuery, SuppliersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SuppliersQuery, SuppliersQueryVariables>(SuppliersDocument, options);
        }
export type SuppliersQueryHookResult = ReturnType<typeof useSuppliersQuery>;
export type SuppliersLazyQueryHookResult = ReturnType<typeof useSuppliersLazyQuery>;
export type SuppliersSuspenseQueryHookResult = ReturnType<typeof useSuppliersSuspenseQuery>;
export type SuppliersQueryResult = Apollo.QueryResult<SuppliersQuery, SuppliersQueryVariables>;
export const UoMsDocument = gql`
    query UOMs {
  uoms {
    ...UOMFields
  }
}
    ${UomFieldsFragmentDoc}`;

/**
 * __useUoMsQuery__
 *
 * To run a query within a React component, call `useUoMsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUoMsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUoMsQuery({
 *   variables: {
 *   },
 * });
 */
export function useUoMsQuery(baseOptions?: Apollo.QueryHookOptions<UoMsQuery, UoMsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UoMsQuery, UoMsQueryVariables>(UoMsDocument, options);
      }
export function useUoMsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UoMsQuery, UoMsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UoMsQuery, UoMsQueryVariables>(UoMsDocument, options);
        }
export function useUoMsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<UoMsQuery, UoMsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<UoMsQuery, UoMsQueryVariables>(UoMsDocument, options);
        }
export type UoMsQueryHookResult = ReturnType<typeof useUoMsQuery>;
export type UoMsLazyQueryHookResult = ReturnType<typeof useUoMsLazyQuery>;
export type UoMsSuspenseQueryHookResult = ReturnType<typeof useUoMsSuspenseQuery>;
export type UoMsQueryResult = Apollo.QueryResult<UoMsQuery, UoMsQueryVariables>;
export const WarehousesDocument = gql`
    query Warehouses {
  warehouses {
    ...WarehouseFields
  }
}
    ${WarehouseFieldsFragmentDoc}`;

/**
 * __useWarehousesQuery__
 *
 * To run a query within a React component, call `useWarehousesQuery` and pass it any options that fit your needs.
 * When your component renders, `useWarehousesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWarehousesQuery({
 *   variables: {
 *   },
 * });
 */
export function useWarehousesQuery(baseOptions?: Apollo.QueryHookOptions<WarehousesQuery, WarehousesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WarehousesQuery, WarehousesQueryVariables>(WarehousesDocument, options);
      }
export function useWarehousesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WarehousesQuery, WarehousesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WarehousesQuery, WarehousesQueryVariables>(WarehousesDocument, options);
        }
export function useWarehousesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<WarehousesQuery, WarehousesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<WarehousesQuery, WarehousesQueryVariables>(WarehousesDocument, options);
        }
export type WarehousesQueryHookResult = ReturnType<typeof useWarehousesQuery>;
export type WarehousesLazyQueryHookResult = ReturnType<typeof useWarehousesLazyQuery>;
export type WarehousesSuspenseQueryHookResult = ReturnType<typeof useWarehousesSuspenseQuery>;
export type WarehousesQueryResult = Apollo.QueryResult<WarehousesQuery, WarehousesQueryVariables>;
export const WorkOrderDocument = gql`
    query workOrder($request: IdRequest!) {
  workOrder(request: $request) {
    ...WorkOrderFields
    items {
      ...WorkOrderItemFields
    }
    materialRequests {
      ...MaterialRequestFields
    }
  }
}
    ${WorkOrderFieldsFragmentDoc}
${WorkOrderItemFieldsFragmentDoc}
${MaterialRequestFieldsFragmentDoc}`;

/**
 * __useWorkOrderQuery__
 *
 * To run a query within a React component, call `useWorkOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useWorkOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWorkOrderQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useWorkOrderQuery(baseOptions: Apollo.QueryHookOptions<WorkOrderQuery, WorkOrderQueryVariables> & ({ variables: WorkOrderQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WorkOrderQuery, WorkOrderQueryVariables>(WorkOrderDocument, options);
      }
export function useWorkOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WorkOrderQuery, WorkOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WorkOrderQuery, WorkOrderQueryVariables>(WorkOrderDocument, options);
        }
export function useWorkOrderSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<WorkOrderQuery, WorkOrderQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<WorkOrderQuery, WorkOrderQueryVariables>(WorkOrderDocument, options);
        }
export type WorkOrderQueryHookResult = ReturnType<typeof useWorkOrderQuery>;
export type WorkOrderLazyQueryHookResult = ReturnType<typeof useWorkOrderLazyQuery>;
export type WorkOrderSuspenseQueryHookResult = ReturnType<typeof useWorkOrderSuspenseQuery>;
export type WorkOrderQueryResult = Apollo.QueryResult<WorkOrderQuery, WorkOrderQueryVariables>;
export const WorkOrderItemDocument = gql`
    query workOrderItem($request: IdRequest!) {
  workOrderItem(request: $request) {
    ...WorkOrderItemFields
    jobCards {
      ...JobCardFields
    }
  }
}
    ${WorkOrderItemFieldsFragmentDoc}
${JobCardFieldsFragmentDoc}`;

/**
 * __useWorkOrderItemQuery__
 *
 * To run a query within a React component, call `useWorkOrderItemQuery` and pass it any options that fit your needs.
 * When your component renders, `useWorkOrderItemQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWorkOrderItemQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useWorkOrderItemQuery(baseOptions: Apollo.QueryHookOptions<WorkOrderItemQuery, WorkOrderItemQueryVariables> & ({ variables: WorkOrderItemQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WorkOrderItemQuery, WorkOrderItemQueryVariables>(WorkOrderItemDocument, options);
      }
export function useWorkOrderItemLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WorkOrderItemQuery, WorkOrderItemQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WorkOrderItemQuery, WorkOrderItemQueryVariables>(WorkOrderItemDocument, options);
        }
export function useWorkOrderItemSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<WorkOrderItemQuery, WorkOrderItemQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<WorkOrderItemQuery, WorkOrderItemQueryVariables>(WorkOrderItemDocument, options);
        }
export type WorkOrderItemQueryHookResult = ReturnType<typeof useWorkOrderItemQuery>;
export type WorkOrderItemLazyQueryHookResult = ReturnType<typeof useWorkOrderItemLazyQuery>;
export type WorkOrderItemSuspenseQueryHookResult = ReturnType<typeof useWorkOrderItemSuspenseQuery>;
export type WorkOrderItemQueryResult = Apollo.QueryResult<WorkOrderItemQuery, WorkOrderItemQueryVariables>;
export const WorkOrderItemsDocument = gql`
    query WorkOrderItems {
  workOrderItems {
    ...WorkOrderItemFields
    workOrder {
      code
    }
  }
}
    ${WorkOrderItemFieldsFragmentDoc}`;

/**
 * __useWorkOrderItemsQuery__
 *
 * To run a query within a React component, call `useWorkOrderItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useWorkOrderItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWorkOrderItemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useWorkOrderItemsQuery(baseOptions?: Apollo.QueryHookOptions<WorkOrderItemsQuery, WorkOrderItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WorkOrderItemsQuery, WorkOrderItemsQueryVariables>(WorkOrderItemsDocument, options);
      }
export function useWorkOrderItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WorkOrderItemsQuery, WorkOrderItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WorkOrderItemsQuery, WorkOrderItemsQueryVariables>(WorkOrderItemsDocument, options);
        }
export function useWorkOrderItemsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<WorkOrderItemsQuery, WorkOrderItemsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<WorkOrderItemsQuery, WorkOrderItemsQueryVariables>(WorkOrderItemsDocument, options);
        }
export type WorkOrderItemsQueryHookResult = ReturnType<typeof useWorkOrderItemsQuery>;
export type WorkOrderItemsLazyQueryHookResult = ReturnType<typeof useWorkOrderItemsLazyQuery>;
export type WorkOrderItemsSuspenseQueryHookResult = ReturnType<typeof useWorkOrderItemsSuspenseQuery>;
export type WorkOrderItemsQueryResult = Apollo.QueryResult<WorkOrderItemsQuery, WorkOrderItemsQueryVariables>;
export const WorkOrdersDocument = gql`
    query WorkOrders {
  workOrders {
    ...WorkOrderFields
  }
}
    ${WorkOrderFieldsFragmentDoc}`;

/**
 * __useWorkOrdersQuery__
 *
 * To run a query within a React component, call `useWorkOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useWorkOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWorkOrdersQuery({
 *   variables: {
 *   },
 * });
 */
export function useWorkOrdersQuery(baseOptions?: Apollo.QueryHookOptions<WorkOrdersQuery, WorkOrdersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WorkOrdersQuery, WorkOrdersQueryVariables>(WorkOrdersDocument, options);
      }
export function useWorkOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WorkOrdersQuery, WorkOrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WorkOrdersQuery, WorkOrdersQueryVariables>(WorkOrdersDocument, options);
        }
export function useWorkOrdersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<WorkOrdersQuery, WorkOrdersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<WorkOrdersQuery, WorkOrdersQueryVariables>(WorkOrdersDocument, options);
        }
export type WorkOrdersQueryHookResult = ReturnType<typeof useWorkOrdersQuery>;
export type WorkOrdersLazyQueryHookResult = ReturnType<typeof useWorkOrdersLazyQuery>;
export type WorkOrdersSuspenseQueryHookResult = ReturnType<typeof useWorkOrdersSuspenseQuery>;
export type WorkOrdersQueryResult = Apollo.QueryResult<WorkOrdersQuery, WorkOrdersQueryVariables>;
export const WorkstationDocument = gql`
    query Workstation($request: IdRequest!) {
  workstation(request: $request) {
    name
  }
}
    `;

/**
 * __useWorkstationQuery__
 *
 * To run a query within a React component, call `useWorkstationQuery` and pass it any options that fit your needs.
 * When your component renders, `useWorkstationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWorkstationQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useWorkstationQuery(baseOptions: Apollo.QueryHookOptions<WorkstationQuery, WorkstationQueryVariables> & ({ variables: WorkstationQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WorkstationQuery, WorkstationQueryVariables>(WorkstationDocument, options);
      }
export function useWorkstationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WorkstationQuery, WorkstationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WorkstationQuery, WorkstationQueryVariables>(WorkstationDocument, options);
        }
export function useWorkstationSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<WorkstationQuery, WorkstationQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<WorkstationQuery, WorkstationQueryVariables>(WorkstationDocument, options);
        }
export type WorkstationQueryHookResult = ReturnType<typeof useWorkstationQuery>;
export type WorkstationLazyQueryHookResult = ReturnType<typeof useWorkstationLazyQuery>;
export type WorkstationSuspenseQueryHookResult = ReturnType<typeof useWorkstationSuspenseQuery>;
export type WorkstationQueryResult = Apollo.QueryResult<WorkstationQuery, WorkstationQueryVariables>;
export const WorkstationsDocument = gql`
    query Workstations {
  workstations {
    ...WorkstationFields
  }
}
    ${WorkstationFieldsFragmentDoc}`;

/**
 * __useWorkstationsQuery__
 *
 * To run a query within a React component, call `useWorkstationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useWorkstationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWorkstationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useWorkstationsQuery(baseOptions?: Apollo.QueryHookOptions<WorkstationsQuery, WorkstationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WorkstationsQuery, WorkstationsQueryVariables>(WorkstationsDocument, options);
      }
export function useWorkstationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WorkstationsQuery, WorkstationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WorkstationsQuery, WorkstationsQueryVariables>(WorkstationsDocument, options);
        }
export function useWorkstationsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<WorkstationsQuery, WorkstationsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<WorkstationsQuery, WorkstationsQueryVariables>(WorkstationsDocument, options);
        }
export type WorkstationsQueryHookResult = ReturnType<typeof useWorkstationsQuery>;
export type WorkstationsLazyQueryHookResult = ReturnType<typeof useWorkstationsLazyQuery>;
export type WorkstationsSuspenseQueryHookResult = ReturnType<typeof useWorkstationsSuspenseQuery>;
export type WorkstationsQueryResult = Apollo.QueryResult<WorkstationsQuery, WorkstationsQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    