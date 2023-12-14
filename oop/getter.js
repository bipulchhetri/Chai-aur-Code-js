class User{
    constructor(email,password)
    {
        this.email=email;
        this.password=password;
    }
    get password()
    {
        // you can modify your email
        return `${this._password}45`
        // return this._email.toUpperCase()
    }
    set password(value)
    {
        this._password=value
    }
}
const Bipul=new User("bipulc@gmail.com",4654)
console.log(Bipul.password)