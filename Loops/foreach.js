// const coding=["js","rubby","java"]
// coding.forEach(function(val)
// {console.log(val)
// }
// )
// coding.map(function(val)
// {
//     console.log(val)
// })

const nums=[1,2,3,4,6,8,10]
// const newNum=nums.filter((num)=>num>4)
const newNum=nums.filter((num)=>{
    return num>4
})

{
    console.log(newNum)
}