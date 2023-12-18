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
// Above Example you can see -You can access parent function variable through child function
// But child function varible can't accesss by parent 





// ****interesting *****

// This concept called Hoisting here we declear function in different way
console.log(addone(6))
function addone(num) // pure function
{
    return num+1;
}


addTwo() //got an error
const addTwo=function(num) //its called expression 
{
    return num+2
}
