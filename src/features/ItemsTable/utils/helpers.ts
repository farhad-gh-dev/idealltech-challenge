export const formatNumber = (
  input: any,
  numberOfDecimals = input < 1 ? 6 : 2 // 6 decimals for numbers smaller than 1
): number => {
  return Number(parseFloat(input).toFixed(numberOfDecimals));
};
