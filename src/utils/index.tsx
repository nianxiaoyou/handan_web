import { message } from 'antd';

const ERROR_MESSAGE = 'Something went wrong. Please try again later.';

export const onError = (error: any) => {
  const result = error?.message ? error?.message : ERROR_MESSAGE;
  message.error(result);
};

export const sleep = (time: any) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};
