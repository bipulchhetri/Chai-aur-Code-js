class user{
    constructor(username)
    {
        this.username=username
    }
    logMe()
    {
        console.log(`userName is ${this.username}`);
    }
}
class Teacher extends user{
    constructor(username,email,password)
    {
        super(username)
        this.email=email;
        this.password=password;
    }
    addCourse()
    {
        console.log(`A new course was added by ${this.username}`)
    }
}
const a=new Teacher("Bipul","teacher@gmail,com",5648)
a.addCourse()
a.logMe()
const masala= new user("masalachai")
masala.logMe()
console.log(a instanceof user);