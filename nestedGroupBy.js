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
    // empty object to be built out with nested key-value pairs
    const groupedData = {};

    // iterate over each item in data array
    data.forEach((item) => {
        // for each item in data array reduce keys array to nest groupedData
        keys.reduce((acc, key, index) => {

            // check if key exists in acc (groupedData); if so assign value to self; if not assign to array or object
            acc[item[key]] = acc[item[key]] || (index === keys.length - 1 ? [] : {});

            // return referrence to value for next iteration of reduce function
            return acc[item[key]];

            //  at the end of reduce function push the current item in value (array) of final nested key
        }, groupedData).push(item);
    });

    // return complete object with nested keys and values
    return groupedData;
};

console.log(nestedGroupBy(people, groups));
