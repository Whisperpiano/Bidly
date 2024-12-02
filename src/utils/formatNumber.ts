export function formatNumber(num: number) {
  if (num < 1000) {
    return num;
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + " K";
  }
}
