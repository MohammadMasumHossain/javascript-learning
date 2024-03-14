let n = prompt("enter a number");

let arr = [];

// for (let i = 1; i <= n; i++) {
//     arr[i - 1] = i;
// }

// console.log(arr);
for (let i = 1; i <= n; i++) {
    arr.push(i);
}
console.log(arr);

let sum = arr.reduce((prev, current) => {
    return prev + current;
})

console.log(sum);

let factorial = arr.reduce((prev, current) => {
    return prev * current;
})
console.log(factorial);

