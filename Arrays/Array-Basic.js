// const myArr = [1,2,3,4,5]

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3)
// // In slice orginal arrya not modified 
// console.log(myn1);
// console.log("B ", myArr);


// const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr);
// console.log(myn2);

// // If you Splice then orginal array will be changes 

const Name=["Bipul","New","oNE"]
const Nametwo=["chhetri","New2","xys"]
Name.push(Nametwo)
console.log(Name [3][0])

const NewArray=[...Name,...Nametwo]
console.log(NewArray)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const arryone=another_array.flat(Infinity) // using this you can combine multiple Array into one array
console.log(arryone)

console.log(Array.isArray("Bipul")) //check Array or Not
console.log(Array.from("Bipul")) //Convert string into Array

console.log(Array.from({name: "Bipul"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
