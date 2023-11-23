let myDate= new Date();
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())
console.log(typeof myDate)

myDate.toLocaleString('default',{
    weekday:"short"
})
console.log(myDate)