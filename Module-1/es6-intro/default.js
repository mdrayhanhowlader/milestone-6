// old style 
// function add(first, second){
//     second = second || 0

//     // if(second === undefined){
//     //     second = 0
//     // }

//     const total = first + second
//     return total
// }

// console.log(add(10))

// new style 

function add(first, second = 0){
    total = first + second
    return total
}

console.log(add(10))