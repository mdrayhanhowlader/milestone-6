const numbers = [1, 2, 3, 4, 5, 6, 10, 32, 45, 65]
// .reduce(accumulator function, initial value)
// accumulator function use two parameter
const total = numbers.reduce((previous, current) => previous + current, 0)

console.log(total);