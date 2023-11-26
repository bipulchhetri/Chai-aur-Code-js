// //  <,> <=,>=,==,===, !=,!== 
// const tem="41";
// if(41==="41")
// {
//     console.log(true)
// }
// else{
//     console.log(false)
// }

/* coditional */

/* const score=200;
if(score<400)
{
    const power="fly"
    console.log(`user power ${power}`)
} */

const bln=50000;
if(bln<5000)
{
console.log("less than")
}
else if(bln<7800)
{
    console.log("less than 5000")
}
else{
    console.log("less than 10000")
}

const userLoggedIn=true;
const debitcard=true;
const userLoggedInFromgoogle=false;
const userLoggedInFromEmail=true;
if(userLoggedIn && debitcard)
{
    console.log("Allow to buy")
}
if(userLoggedInFromgoogle || userLoggedInFromEmail)
{
    console.log("allow to login")
}

