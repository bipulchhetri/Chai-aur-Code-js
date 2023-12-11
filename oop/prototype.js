function muliplay(num)
{
    return num*5;
}
muliplay.power=3;
console.log(muliplay(5))
console.log(muliplay.power)
console.log(muliplay.prototype)

function createuser(username,score)
{
    this.username=username
    this.score=score
}
createuser.prototype.increment=function()
{
 this.score++;
}
const a= new createuser("chai", 20)
const b= new createuser("chai", 50)

console.log(b);
// {New} Notes 
/* 
In JavaScript, the new keyword is used to create an instance of a user-defined object type or one of the built-in object types that has a constructor function. When you use new before a function, it performs the following steps:

It creates a new, empty object.
It sets the newly created object's [[Prototype]] (internal property) to the prototype property of the constructor function.
It calls the constructor function with the newly created object as the this context.
If the constructor function does not explicitly return an object, it implicitly returns the newly created object.
*/

// Prototype start

// let MyName="Bipul"
// console.log(MyName.truelength)

let Myhero=["Bipul","Chhe"]
let heropower={
    bipul:"dance",
    chee:"sing"
}