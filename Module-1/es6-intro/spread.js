const max = Math.max(12, 32, 45, 63)
console.log(max)

// three dots use for reading all value from array
const numbers = [32, 42, 545, 632]
const largest = Math.max(...numbers)
console.log(numbers)
console.log(Math.max(largest))


const numbers2 = [...numbers]
numbers2.push(54)
console.log(numbers)
console.log(numbers2)

const numbers3 = [10, ...numbers, 99, 87]
console.log(numbers3)
