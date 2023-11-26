// truthy and falsy 

const userEmal=[]
if(userEmal)
{
    console.log("got email")
}
else{
    console.log("not found")
}

/* truthy values */

// "0"(string), "false"(string), " " ,[],{},function()

/* falsy values */
// false,0,-0,BigInt 0n, "",null,undefined,Nan

// Nullish Coalescing operator (??):null undefined

let val1;
// val1=5??10
val1=null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")