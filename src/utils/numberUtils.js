export function formatNumberWithTwoDigits(number) {
  return number < 10 ? `0${number}` : `${number}`;
}
