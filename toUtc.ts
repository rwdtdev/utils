import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

const dateTime = dayjs();

console.log(
  '🚀 ~ dateTime with TZ:',
  dayjs().format(),
  '| utc same time:',
  dayjs().utc(true).format()
);
