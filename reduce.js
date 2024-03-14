// let arr = [1, 2, 3, 4];

// let sum = arr.reduce((result, current) => {
//     return result + current;
// });
// console.log(sum);

let arr = [1, 2, 3, 4];

let sum = arr.reduce((result, current) => {
    return result > current ? result : current;
});
console.log(sum);

