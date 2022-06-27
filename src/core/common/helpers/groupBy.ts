const groupBy = <T>(array: T[], predicate: (v: T) => string | number) =>
  array.reduce((prev, curr) => {
    (prev[predicate(curr)] ||= []).push(curr);
    return prev;
  }, {} as { [key: string]: T[] });

export { groupBy };
