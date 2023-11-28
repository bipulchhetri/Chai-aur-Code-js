// const UserNew={
// username:"Bipul",
// price:656,
// welcometext: function()
// {
//     console.log(`${this.username}`)
// }
// }
// UserNew.welcometext()

// // 
// const one= function()
// {
//     let user="Bipul"
//     console.log(this.user)
// }
// one()

// const two= ()=>
// {
//     let user="Bipul"
//     console.log(this.user)
// }
// one()

// //  Arrow Function

// const addition=(a,b)=>{
// return a+b;
// }
// console.log(addition(5,6))

// // const additionnew=(a,b)=>a+b;
// // const additionnew=(a,b)=>(a+b);
// const additionnew=(a,b)=>({user:"yyoo"}); //Return object uisng Arrow function

//     console.log(additionnew(5,6))



// IIFE (Immediately Invoked Functoin Expression)
(function chai()
{
    console.log("Hi How are you")
})() ;

((name)=>{
    console.log(`Hello ${name}`)
})("bipul");

// function hi(){
//     const a=10;
//     const b=100;
//     console.log(a)
// }
// console.log(b)
// hi()