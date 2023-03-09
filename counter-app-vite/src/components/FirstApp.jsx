const object = [
  {
    id: "1",
    name: "Eloy",
    age: 25,
  },
  {
    id: "2",
    name: "Jose",
    age: 23,
  },
];

const getName = (id) => {
  const { name } = object.find((object) => object.id == id);
  console.log(name);
  return name;
};
import React from "react";

export const FirstApp = () => {
  return (
    <div>
      <h1>{getName(2)}</h1>
      <h1>FirstApp</h1>
    </div>
  );
};
