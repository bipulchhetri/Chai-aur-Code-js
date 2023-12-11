const promiseone=new Promise(function(resolve,reject)

{
    // Do an Asynce Task
    //DB call/cryptography.network
    setTimeout(function()
    {
        console.log("Asynce task is complete")
        resolve()
    },1000)
})

promiseone.then(function()
{
    console.log("Promise consumed")
})

new Promise(function(resolve,reject)
{
setTimeout(() => {
    console.log("Asynce 1")
    resolve()
}, 1000);
}).then(function()
{
    console.log("Asynce 2")
})

const promisethree= new Promise(function(resolve,reject)
{
    setTimeout(function()
    {
        resolve({username:"bipul",email:"bip@gmail.com"})

    },1000)
})
promisethree.then(function(user)
{
console.log(user)
})

const promisefour=new Promise(function(resolve,reject)
{
    setTimeout(function()
    {
let error=false
if(!error)
{
    resolve({user:"Bipul"})
}
else
{
    reject('EROOR Something went wrong')
}
    },1000 )
})
promisefour.then((user)=>{
    console.log(user);
    return user.userName
}).then((userName)=>
{

    console.log(userName)
}).catch(function(error)
{
    console.log(error)
}).finally(()=>{
    console.log("promise is either reject or resolveD")
})

const promisefive=new Promise(function(resolve,reject)
{
    setTimeout(function()
    {
        let error=true
        if(!error)
        {
            resolve({username:"Hello"})
        }
        else{
            reject('ERROR Found')
        }
    },1000)
});
async function consumepromisefive(){
   try{
    const response= await promisefive
   console.log(response);
   }
   catch(error){
    console.log(error)
   }
}
consumepromisefive()

// async function getallUser(){
//     try{
//         const response= await fetch("https://fakestoreapi.com/products/1")
//     const data= await response.json()
//     console.log(data)
//     }
//     catch(error){
//         console.log("Promsie five error" ,error)
//     }
// }
// getallUser()

fetch('https://fakestoreapi.com/products/1')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=>console.log(error))