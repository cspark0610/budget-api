/* eslint-disable no-bitwise */
const formatCode = (str: string) => {
  const second = str.slice(((str.lastIndexOf('.') - 1) >>> 0) + 2);
  const twice = second.match(/[\s\S]{1,2}/g) || [];
  const first = str
    .toString()
    .split('.')
    .slice(0, -1)
    .join('.')
    .padStart(2, '0');
  return `${first}.${twice.join('.')}`;
};

export { formatCode };
