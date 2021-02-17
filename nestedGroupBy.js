const people = [
  { name: "Pete", gender: "Male", age: 22 },
  { name: "Samantha", gender: "Female", age: 20 },
  { name: "Frank", gender: "Male", age: 22 },
  { name: "Gary", gender: "Male", age: 21 },
  { name: "Maria", gender: "Female", age: 20 },
  { name: "Hannah", gender: "Female", age: 21 },
  { name: "Pete", gender: "Male", age: 20 },
];

const groups = ["gender", "age"];

const nestedGroupBy = (data, keys) => {
  const groupedData = {};
  data.forEach((item) => {
    keys.reduce((acc, key, index) => {
        acc[item[key]] = acc[item[key]] || (index === keys.length - 1 ? [] : {});
        return acc[item[key]];
    }, groupedData).push(item);
  });
  return groupedData;
};

console.log(nestedGroupBy(people, groups));
