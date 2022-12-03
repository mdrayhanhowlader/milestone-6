const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// .reduce (accumulator function, initial value)
// accumulator function use two parameters
// with single line 
// const total = numbers.reduce((previous, current) => previous + current, 0)

// with multi line 

const total = numbers.reduce((previous, current) => 
{
    return previous + current
} , 0)

console.log(total)