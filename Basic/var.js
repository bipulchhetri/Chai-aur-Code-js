const accountId=354354;
let accountEmail="bipul@google.com";
var city="not found"

accountEmail="hello@gmail.com"
// accountId=687687;
// console.table([accountId,accountEmail,city])


/*
Not use var
Because of issues of Block scope and functional socpe
*/

const AccountId=564;
let AccountEmail="bipulgoogle@gmail.com"
var AccountCity="Bangalore"
// AccountId=65;
AccountEmail="sdg"
password="454"
console.log(AccountId)
console.log(AccountEmail)

// In Js there are Global and local scope 
//using Below example you can understand let const var clearly
if (true)
{
    let a=10;
    const b=30;
    var c=50;
}

console.log(a)
console.log(b)
console.log(c)
// var within the local scope still you can access here this the main issue in js 
// so nowdays we dont use var 

// ** More scope explain in Scope folder 
