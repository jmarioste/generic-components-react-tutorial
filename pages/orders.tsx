import SortedList from "../components/SortedList";

const orders = () => {
  const orders = [
    {
      id: 1,
      amount: 26.99,
      createdDate: "2022-08-24T03:03:27Z",
    },
    {
      id: 2,
      amount: 83.33,
      createdDate: "2023-02-01T10:34:27Z",
    },
    {
      id: 3,
      amount: 41.82,
      createdDate: "2022-06-18T08:58:46Z",
    },
    {
      id: 4,
      amount: 47.29,
      createdDate: "2022-06-16T10:41:06Z",
    },
    {
      id: 5,
      amount: 85.45,
      createdDate: "2022-03-06T15:23:34Z",
    },
  ];
  return (
    <div>
      <SortedList
        items={orders}
        sortBy="amount"
        sortOrder={1}
        renderItem={(order, index) => {
          return (
            <div key={index}>
              {order.id} - {order.amount} - {order.createdDate}
            </div>
          );
        }}
      />
    </div>
  );
};
export default orders;
