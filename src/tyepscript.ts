let arr = [1, 2, 3, "4", 5];

// arr = arr.filter((x) => {
//   if (typeof x !== "string") return x;
// });
// console.log(arr);

const index = arr.findIndex((x) => typeof x === "string");

arr.splice(index, 1);
console.log(arr);
