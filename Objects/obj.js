// const Myob={
//     name:"Bipul",
//     number:465465,
//     "full-name":"Bipul chhetri"
// }
// // console.log(Myob.number)
// // console.log(Myob["name"])
// // console.log(Myob["full-name"])

// // Myob.name="NewName"
// // console.log(Myob.name)
// // Object.freeze(Myob)


// // Myob.nameone="Bipul xyx"

// // console.log(Myob.nameone);

// Myob.greeting = function()

// {
//     console.log(`Hello Bipul ${this.name}`);
// }

// console.log(Myob.greeting())

const user={}
user.id="64354"
user.name="bipul"
console.log(user)

const newUser={
    accountEmail:"hello@gmail.com",
    fullname:{
        firstname:"bipul",
        lastName:"chhetri"
    }
}
// console.log(newUser)
// console.log(newUser.fullname.firstname)

const obj1={1:"a",2:"b"}
const obj2={3:"g",4:"5"}
// console.log(obj1,obj2)
// console.log=Object.assign({}, obj1,obj2)
const obj3={...obj1,...obj2}
// console.log(obj3)

const scUser=[
    {
        id:1,
        email:"lsjd@gmail.com"
    },
    {
        id:2,
        email:"gklA@gmail.com"
    }
    
]
// scUser[1].id
// console.log(scUser)

const course={
    coursename:"js",
    price:"999",
    courseInstru:"Bipul"
}
// console.log(course.price)
const {courseInstru:ins}=course;
const{price}=course;
console.log(price)