// function SayName(){
//     console.log("HI")
//     console.log("Hello")
// }
// // SayName()
// function add(num1,num2) //parameter
// {
//     // const add2=(num1+num2);
//     // console.log(num1+num2)
//     return num1+num2;
// }
// const result=add(5,6) //arguments
// console.log(result) 

function addtocart(val,...a)
{
return a;
}
// console.log(addtocart(5,10,22))
const user={
    username:"bp",
    price:199
}
function handleobject(anyobject)
{
    console.log(`user name is 
    ${anyobject.username} ,and price is ${anyobject.price}`);
}
// handleobject(user)
handleobject(
    {
        username:"samg",
        price:399
    }
)

const MyArray=[100,200,300]
function returnvalue(getArray)
{
    return getArray[1]
}
console.log(returnvalue(MyArray))