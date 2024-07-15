const people = [
    { name: "Alice", age: 17 },
    { name: "Bob", age: 18 },
    { name: "Charlie", age: 16 },
    { name: "David", age: 20 },
];
// let total = 0;

// for (let i = 0; i < people.length; i++) {
//     console.log(people[i].age);
//     total = total + people[i].age;
// }
// people.forEach((val) => {
//     console.log(val);
//     total += val.age;
// });
const total = people.reduce((prev, val) => {
    let firstValue = 0;
    if (prev.age) {
        firstValue = prev.age;
    } else {
        firstValue = prev;
    }
    return firstValue + val.age;
});

const numbers = [1, 2, 103, 103, 5, 99, 6, 7, 8, 9];
const numbers2 = [-8, -9, -5];

function findMaxNumber(array) {
    // let max = array[0];
    // for (let i = 0; i < array.length; i++) {
    //     if (max < array[i]) {
    //         max = array[i];
    //     }
    // }
    // return max;

    // const result = array.reduce((prev, val) => {
    // if (prev > val) {
    //     return prev;
    // } else {
    //     return val;
    // }
    // });
    return array.reduce((prev, val) => (prev > val ? prev : val));
}

console.log(findMaxNumber(numbers));
console.log(findMaxNumber(numbers2));
