type Props<T> = {
  value: T;
};
const TrailingComma = <T,>(props: Props<T>) => {
  return <pre>{JSON.stringify(props.value, null, 4)}</pre>;
};

export default TrailingComma;
