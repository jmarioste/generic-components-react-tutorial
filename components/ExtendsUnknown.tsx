type Props<T> = {
  value: T;
};
const ExtendsUnknown = <T extends unknown>(props: Props<T>) => {
  return <pre>{JSON.stringify(props.value, null, 4)}</pre>;
};
export default ExtendsUnknown;
