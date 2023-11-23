const name="Bipul"
const Num=58657;
console.log(name+ Num)

console.log(`Hello how are you ${name}`)

//Another way to difine string

const GameName= new String("Bipulchhetri")
console.log(GameName.__proto__)
console.log(GameName.toLocaleUpperCase())
console.log(GameName.charAt(2))
console.log(GameName.indexOf("c"))
console.log(GameName.slice(2,4))
console.log(GameName.bold())


const newName="   Bp  "
console.log(newName.trim())
console.log(newName.split(" "))
const URL="https://bipulchhetri.com/bipul%20ch"
console.log(URL.replace('%20','-'))
console.log(URL.includes("bipul"))
