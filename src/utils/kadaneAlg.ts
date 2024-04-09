export type KadaneFunctionType = (str: string, n: number) => Result;

export type Result = {
  subSet: Set<Record<string, number>>;
  tempMap: Map<string, number>;
  maxLength: number;
};

export const kadaneAlg = (str: string, n: number): Result => {
  const strArr = str.split('');
  const subArray = [];
  const subSet: Set<Record<string, number>> = new Set();
  const tempMap = new Map();
  for (const char of strArr) {
    if (tempMap.size < n) {
      tempMap.set(char, tempMap.has(char) ? tempMap.get(char) + 1 : 1);
      const obj = Object.fromEntries(tempMap);
      subSet.add(obj);
      subArray.push(char);
    } else {
      if (tempMap.has(char)) {
        tempMap.set(char, tempMap.get(char) + 1);
        const obj = Object.fromEntries(tempMap);
        subSet.add(obj);
        subArray.push(char);
      } else {
        while (tempMap.size === n) {
          const startKey = subArray.shift();
          tempMap.set(startKey, tempMap.get(startKey) - 1);
          if (tempMap.get(startKey) === 0) {
            tempMap.delete(startKey);
          }
        }

        tempMap.set(char, 1);
        const obj = Object.fromEntries(tempMap);
        subSet.add(obj);
        subArray.push(char);
      }
    }
  }
  let maxLength = 0;
  for (const substrObj of subSet) {
    const charCountArray = Object.values(substrObj);
    const sum: number = charCountArray.reduce<number>((a, b): number => Number(a) + Number(b), 0);
    if (sum > maxLength) {
      maxLength = sum;
    }
  }

  return {
    subSet,
    tempMap,
    maxLength,
  };
};

function maxString(arr: string[]): string {
  return arr.reduce((a, b) => (a.length > b.length ? a : b));
}
