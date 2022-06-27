const roundTo = (num: number, decimal: number) => {
  const val = +`${num}e+${decimal}`;
  const round = Math.round(val);
  return parseFloat(`${round}e-${decimal}`);
};

export { roundTo };
