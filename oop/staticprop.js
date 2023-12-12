class user{
    constructor(username)
    {
        this.username=username;
    }
    logMe()
    {
        console.log(`UserName is ${this.username}`)
    }
    creatId()
    {
        return `1257`
    }
}
const Bipul=new user("Bipul")
// console.log(Bipul.creatId())


class Teacher extends user {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());