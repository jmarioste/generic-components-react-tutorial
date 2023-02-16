type Props<T> = {
  value: T;
};

export default function ComponentA<T>(props: Props<T>) {
  return <pre>{JSON.stringify(props.value, null, 4)}</pre>;
}
