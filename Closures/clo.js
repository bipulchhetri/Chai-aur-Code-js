// // function outer()
// // {
// //     let name="Bipul"
// //     function inner()
// //     {
// //         console.log(name)
// //     }
// //     inner()
// // }
// // outer() //Lexical Scoping

// function first()
// {
//     let name="chhetri";
//     function second()
//     {
// console.log(name)
//     }
//     return second;
// }

// const print=first()
// // print()


function x()
{
    let name="bipul";
    function y(){
        console.log(name)
    }
    y()
}
x()