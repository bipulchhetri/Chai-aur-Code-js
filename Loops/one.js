// const arr=[1,2,5,9]
// for(const num of arr)
// {
//     console.log(num)
// }
// const geeting="Hello"
// for(const geet of geeting)
// {
//     console.log(geet)
// }
// // Maps
// const map=new Map()
// map.set('IN',"INDIA")
// map.set('usa',"America")
// map.set('IN',"INDIA")
// console.log(map)
// for(const [key,value] of map)
// {
//     console.log(key,value)
// }


// new file

const obj={
    js:"javascript",
    cpp:"c++",
    rb:"ruby"

}

for (const key in obj) {
console.log(`${key} ${obj[key]}`)
    
}

const programming=["js","c++","java"]
for(const key in programming)
{
    console.log(key)
}