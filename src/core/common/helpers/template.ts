const template = (code: string, options: object) => {
  const arr = code.split('-');
  const name = [];
  arr.map((item) => name.push(options[item]));
  return name.join('-');
};

export { template };
