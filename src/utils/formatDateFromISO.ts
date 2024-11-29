export function formatDateFromISO(isoDate: string): string {
  const now = new Date();
  const date = new Date(isoDate);

  if (isNaN(date.getTime())) {
    throw new Error("Invalid date format");
  }

  const diffInSeconds = Math.abs(
    Math.floor((now.getTime() - date.getTime()) / 1000)
  );

  const secondsInMinute = 60;
  const secondsInHour = 3600;
  const secondsInDay = 86400;
  const secondsInMonth = secondsInDay * 30;
  const secondsInYear = secondsInDay * 365;

  if (diffInSeconds < secondsInMinute) {
    const seconds = diffInSeconds;
    return `${seconds} sec`;
  } else if (diffInSeconds < secondsInHour) {
    const minutes = Math.floor(diffInSeconds / secondsInMinute);
    const seconds = diffInSeconds % secondsInMinute;
    return `${minutes}m ${seconds}s`;
  } else if (diffInSeconds < secondsInDay) {
    const hours = Math.floor(diffInSeconds / secondsInHour);
    const minutes = Math.floor(
      (diffInSeconds % secondsInHour) / secondsInMinute
    );
    return `${hours}h ${minutes}m`;
  } else if (diffInSeconds < secondsInMonth) {
    const days = Math.floor(diffInSeconds / secondsInDay);
    const hours = Math.floor((diffInSeconds % secondsInDay) / secondsInHour);
    return `${days}d ${hours}h`;
  } else if (diffInSeconds < secondsInYear) {
    const months = Math.floor(diffInSeconds / secondsInMonth);
    return `${months} ${months > 1 ? "mo's" : "mo"}`;
  } else {
    const years = Math.floor(diffInSeconds / secondsInYear);
    return `${years} year`;
  }
}
