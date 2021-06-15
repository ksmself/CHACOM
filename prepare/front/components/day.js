import dayjs from 'dayjs';

dayjs.locale('ko');

export default function day(createdAt, postList) {
  let day;

  if (postList) {
    return dayjs(createdAt).format('YYYY-MM-DD hh:mm');
  }

  const secondPassed = dayjs().diff(dayjs(createdAt), 'seconds');
  const minutedPassed = dayjs().diff(dayjs(createdAt), 'minutes');
  const hourPassed = dayjs().diff(dayjs(createdAt), 'hours');
  const dayPassed = dayjs().diff(dayjs(createdAt), 'days');

  if (secondPassed < 60) day = '방금 전';
  else if (minutedPassed < 60) day = minutedPassed + '분 전';
  else if (hourPassed < 24) day = hourPassed + '시간 전';
  else if (dayPassed <= 7) day = dayPassed + '일 전';
  else day = dayjs(createdAt).format('YYYY년 MM월 DD일');

  return day;
}
