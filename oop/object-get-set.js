const user={
    _email:"kjg@gmail.com",
    _password:"4534",

    get email()
    {
        return this._email
    },
    set email(value)
    {
this._email=value;
    }
}
const chai=Object.create(user)
console.log(chai.email)