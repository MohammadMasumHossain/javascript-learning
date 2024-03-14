//filter --> creates a new array of elements that gives true for condition/filter
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let evenArray = arr.filter((val) => {
    return val % 2 === 0;
})

console.log(evenArray);