// eslint-disable-next-line @typescript-eslint/ban-types
export const enumToString = (_enum: object): string =>
  Object.values(_enum).join(', ');
