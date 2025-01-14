import client from '@/gql/apollo';

import { WarehousesDocument, CustomersDocument } from '@/gql';

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
