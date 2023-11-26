let a=10;
var b=25;
const c=10;
if(true)
{
let a=60;
var b=20;
const c=60;
}
// console.log(a)
// console.log(b)
// console.log(c)

// nested scope
function one()
{
   const username="Bipul"

   function two()
   {
    const website="youtube"
    console.log(username)
   }
//    console.log(website);
   two()
}
one()

// ****interesting *****

// This concept called Hoisting here we declear function in different way
console.log(addone(6))
function addone(num)
{
    return num+1;
}


addTwo()
const addTwo=function(num)
{
    return num+2
}
