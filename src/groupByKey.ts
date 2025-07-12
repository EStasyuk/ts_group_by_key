type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T):Record<string | number | symbol, T[]> {
  const groupedResult: Record<string | number | symbol, T[]> = {}:

  for (const item of items) {
    const groupValue = item[key];

    if (!groupedResult[groupValue as string | number | symbol]) {
      groupedResult[groupValue as string | number | symbol] = [];
    }

    groupedResult[groupValue as string | number | symbol].push(item);
  }

  return groupedResult;
}
