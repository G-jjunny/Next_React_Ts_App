import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

// dayjs 사용을 위한 모듈화

dayjs.locale("ko");
dayjs.extend(relativeTime);

export function fromNow(time: string | Date) {
  return dayjs(time).fromNow();
}

export function formatTime(time: string | Date, format = "YYYY-MM-DD h:mm A") {
  return dayjs(time).format(format);
}
