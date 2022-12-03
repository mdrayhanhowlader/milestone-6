const numbers = [4, 5, 67, 21, 42, 63, 76, 85]
const bigNums = numbers.filter(number => number > 40)
const smallNums = numbers.filter(number => number < 40)
const evenNums = numbers.filter(number => number % 2 === 0)
const oddNums = numbers.filter(number => number % 2 !== 0)
console.log(bigNums)
console.log(smallNums)
console.log(evenNums)
console.log(oddNums)


const products = [
    {id: 001, name: 'headphone', price: 1000},
    {id: 002, name: 'earphone', price: 2000},
    {id: 003, name: 'mobilephone', price: 3000},
    {id: 004, name: 'telephone', price: 4000},
    {id: 005, name: 'cellphone', price: 5000}
]

const expensiveProducts = products.filter(product => product.price > 3000)
const cheapestProducts = products.filter(product => product.price < 4000)
const biggestName = products.filter(product => product.name.length > 10)

console.log(expensiveProducts)
console.log(cheapestProducts)
console.log(biggestName)