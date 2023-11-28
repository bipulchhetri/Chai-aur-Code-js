const Books=[
    {title:"Book-One",genre:"history",published:2023},
    {title:"Book-two",genre:"fiction",published:2022},
    {title:"Book-three",genre:"science",published:2020},
    {title:"Book-four",genre:"history",published:2018}

];
const UserBooks =Books.filter((bk)=>bk.genre==="history")
console.log(UserBooks)