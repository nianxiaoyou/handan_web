import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

// dayjs.extend(relativeTime);
dayjs.extend(utc);

import { message } from 'antd';

const ERROR_MESSAGE = 'Something went wrong. Please try again later.';

export const onError = (error: any) => {
  const result = error?.message ? error?.message : ERROR_MESSAGE;
  message.error(result);
};

export const sleep = (time: any) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

export const getUTCTime = (date: Date) => {
  return dayjs(date).utc().format();
};
