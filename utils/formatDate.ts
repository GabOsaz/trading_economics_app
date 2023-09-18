import dayjs from 'dayjs';

function formatDate(date: string) {
  return `${dayjs(date).format('DD MMMM YYYY')} | ${dayjs(date).format('HH:mm a')}`;
}

export default formatDate;
