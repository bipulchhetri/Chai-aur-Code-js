// stack and Heap
//Primitive data types store in stack 
//Non Primitive data types store in Heap

// In stack value pass as a copy but Heap you will get orginal value or reference value

let MyName="Bipul";
let lastName=MyName;
 lastName="chhetri"
console.log(lastName)

let UserOne={
    name:"Bipul",
    email:"chhetri@gmail.com"
}
let UserTwo=UserOne;
console.log(UserTwo)