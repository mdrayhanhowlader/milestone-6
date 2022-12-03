const numbers = [1, 3, 5, 7, 9]
const getEvenNumber = numbers.map(number => number + 1)
const newNumber = getEvenNumber
// console.log(newNumber)

const getOddNumber = newNumber.map(number => number + 1)
// console.log(getOddNumber)

const getEN = (numbers) => numbers.map(number => number + 1)
    


console.log(getEN(numbers))