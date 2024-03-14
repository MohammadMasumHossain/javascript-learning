//map --> creates a new array with the results of some basic operation.
// the values its callback return are used to form newarray.

// let array1=[45, 30,50];

// array1.map((val)=>{
//     console.log(val);
// }
// )

let array1=[45, 30,50];

let newarray=array1.map((val)=>{
    return val * val;
}
)
console.log(newarray);
console.log(array1);



