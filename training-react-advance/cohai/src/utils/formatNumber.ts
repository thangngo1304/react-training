export const formatDecimalNumber = (number = 0): string => {
  const formattedNumber = Math.round(number).toString();

  const numberWithCommas = formattedNumber.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ',',
  );

  return numberWithCommas;
};
