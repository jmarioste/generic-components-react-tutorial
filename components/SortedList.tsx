import { ReactNode } from "react";
type Props<T extends Object> = {
  items: T[];
  sortBy: keyof T;
  sortOrder: 1 | -1;
  renderItem(item: T, index: number): ReactNode;
};
export default function SortedList<T extends Object>({
  items,
  sortBy,
  sortOrder,
  renderItem,
}: Props<T>) {
  // sort the items
  const sortedItems = [...items].sort((a, b) => {
    const primitiveType = typeof a[sortBy];
    let result = 0;
    switch (primitiveType) {
      case "bigint":
      case "number":
        result = (a[sortBy] as number) - (b[sortBy] as number);
        break;
      case "string":
        result = (a[sortBy] as string).localeCompare(b[sortBy] as string);
        break;
      default:
        break;
    }

    return result * sortOrder;
  });

  // render the items
  return <>{sortedItems.map(renderItem)}</>;
}
