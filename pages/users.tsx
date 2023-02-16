import SortedList from "../components/SortedList";

const users = () => {
  const data = [
    {
      name: "John",
      age: 16,
    },
    {
      name: "Lebron",
      age: 38,
    },
    {
      name: "Jordan",
      age: 23,
    },
    {
      name: "Zach",
      age: 27,
    },
  ];
  return (
    <div>
      <SortedList
        items={data}
        renderItem={(item, index) => {
          return (
            <div key={index}>
              {item.name} - {item.age}
            </div>
          );
        }}
        sortBy="age"
        sortOrder={1}
      />
    </div>
  );
};
export default users;
