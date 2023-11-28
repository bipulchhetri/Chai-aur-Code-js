// const number=[1,2,3,4]
// const total=number.reduce(function(acc,currrentvalue)
// {
//     return acc+currrentvalue
// },0)
// console.log(total)

const course=[
    {
        items:"js-course",
        price:999
    },
    {
        items:"DSA-course",
        price:3500
    },
    {
        items:"Java-course",
        price:790
    },
]

const pay=course.reduce((acc,items)=>acc+items.price,0)
{
    console.log(pay)
}