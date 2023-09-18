const formatNumber = (value: number | string) => {
  const number = Number(value);
  if (!Number.isNaN(number)) {
    return number.toLocaleString('en-US');
  }
  return '';
};

export default formatNumber;
