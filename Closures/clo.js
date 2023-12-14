// function outer()
// {
//     let name="Bipul"
//     function inner()
//     {
//         console.log(name)
//     }
//     inner()
// }
// outer() //Lexical Scoping

function first()
{
    let name="chhetri";
    function second()
    {
console.log(name)
    }
    return second;
}

const print=first()
print()
