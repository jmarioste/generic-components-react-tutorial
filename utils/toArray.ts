/**
 * Transforms any value into an array of that value type
 */
export function toArray<T>(value: T): T[] {
  return [value];
}

toArray("hello"); //returns a string[]
toArray(5); //returns a number[]

type WithFullName = {
  fullName: string;
};

export function toArray2<T extends WithFullName>(value: T): T[] {
  return [value];
}

export const toArray3 = <TValue>(value: TValue): TValue[] => {
  return [value];
};

toArray2({ fullName: "JohnDoe" });
