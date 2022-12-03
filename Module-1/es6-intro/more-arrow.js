const add = (first, second) => first + second

const result = add(20, 30)
console.log(result)

// no parameter function 
const getPie = () => 3.14

// one parameter simple version
const doubleIt = (num) => num * 2
const total = doubleIt(10)
console.log(total)

// one parameter without bracket 
const fiveTimes = num => num * 2
const totalTime = fiveTimes(5)
console.log(totalTime)

// multiline arrow function 
// if you want to return something in multi line function use the return statement
const doMath = (x, y, z) => {
    const firstSum = x + y
    const secondSum = y + z
    const multiplyResult = firstSum * secondSum 
    const result = multiplyResult / 2
    return result
}