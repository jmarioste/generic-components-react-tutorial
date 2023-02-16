import type { NextPage } from "next";
import Head from "next/head";
import ComponentA from "../components/ComponentA";
import SortedList from "../components/SortedList";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
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
      <ComponentA value={5} />
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

export default Home;
