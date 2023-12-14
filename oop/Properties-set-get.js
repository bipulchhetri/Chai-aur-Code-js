function user(email,password)
{
this._email=email;
this._password=password

Object.defineProperty(this,'password',{
     get: function() {
        return `${this._password}45`

    //    return this._password=password.ojl;
     },
     set:function(value){
         this._password=value
     }
})
}
const Bipul= new user("Bi@si.com","54654")
console.log(Bipul.password)