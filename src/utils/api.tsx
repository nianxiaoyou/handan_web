import client from '@/gql/apollo';

import {
  WarehousesDocument,
  CustomersDocument,
  SuppliersDocument,
  ItemsDocument,
  BomsDocument,
  ListStaffDocument,
  PaymentMethodsDocument,
} from '@/gql';

export const fetchPaymentMethods = async (params?: any) => {
  const request = {
    name: params.name,
  };

  const { data } = await client.query({
    query: PaymentMethodsDocument,
    variables: { request },
  });

  const result = data?.paymentMethods?.map((item: any) => {
    return {
      value: item.uuid,
      label: item.name,
    };
  });

  return result;
};

export const fetchStaff = async (params?: any) => {
  const request = {
    name: params.name,
  };

  const { data } = await client.query({
    query: ListStaffDocument,
    variables: { request },
  });

  const result = data?.listStaff?.map((item: any) => {
    return {
      value: item.uuid,
      label: item.email,
    };
  });

  return result;
};

export const fetchBoms = async (params?: any) => {
  const request = {
    name: params.name,
  };

  const { data } = await client.query({
    query: BomsDocument,
    variables: { request },
  });

  const result = data?.boms?.map((item: any) => {
    return {
      value: item.uuid,
      label: item.name,
    };
  });

  return result;
};

export const fetchItems = async (params?: any) => {
  const request = {
    name: params.name,
  };

  const { data } = await client.query({
    query: ItemsDocument,
    variables: { request },
  });

  const result = data?.items?.map((item: any) => {
    return {
      value: item.uuid,
      label: item.name,
    };
  });

  return result;
};

export const fetchCustomers = async (params?: any) => {
  const request = {
    name: params.name,
  };

  const { data } = await client.query({
    query: CustomersDocument,
    variables: { request },
  });

  const result = data?.customers?.map((item: any) => {
    return {
      value: item.uuid,
      label: item.name,
      address: item.address,
    };
  });

  return result;
};

export const fetchSuppliers = async (params?: any) => {
  const request = {
    name: params.name,
  };

  const { data } = await client.query({
    query: SuppliersDocument,
    variables: { request },
  });

  const result = data?.suppliers?.map((item: any) => {
    return {
      value: item.uuid,
      label: item.name,
      address: item.address,
    };
  });

  return result;
};

export const fetchWarehouses = async (params?: any) => {
  const request = {
    name: params.name,
  };

  const { data } = await client.query({
    query: WarehousesDocument,
    variables: { request },
  });

  const result = data?.warehouses?.map((item: any) => {
    return {
      value: item.uuid,
      label: item.name,
    };
  });

  return result;
};
