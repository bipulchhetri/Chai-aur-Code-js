// ES6
//  class user{
//     constructor(username,email,password)
//     {
//         this.username=username;
//         this.email=email;
//         this.password=password
//     }
//     encryptPassword()
//     {
//         return `${this.password}abc`
//     }
//     changeusername(){
// return `${this.username.toUpperCase()}`
//     }
//  }
//  const a=new user("bipul","bipi@gmail.com","1235")
//  console.log(a.encryptPassword())
//  console.log(a.changeusername())

// Behind the scene

function user(username,email,password)
{
    this.username=username;
    this.email=email;
    this.password=password;
}
user.prototype.encryptPassword=function()
{
    return`${this.password}hdh`
}
 const a=new user("bipul","bipi@gmail.com","1235")
console.log(a.encryptPassword())
