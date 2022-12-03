// Function decleration 
function add(first, second){
    const total = first + second
    return total
}


// function expression 
const add1 = function add(first, second){
    const total = first + second
    return total
}

// function expression with anonymous function 

const add2 = function(first, second){
    const total = first + second
    return total
}

function add3(first, second){
    return first + second
}


const add4 = function(first, second){
    return first + second
}

// arrow function 
const add5 = (first, second) => first + second



const result = add(10, 20)
console.log(result)


// arrow function practice 
const cap = (name, price) => name + " " + price

const product = cap("turkish", 150)
console.log(product)

