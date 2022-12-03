// 1: return result arrow function
// const multiply = (num1, num2, num3) => num1 * num2 * num3
// const result = multiply(2, 2, 2)
// console.log(result)

// 2: use backtick for 3 line without using /n

// const dialouge = () => {
//     const text = `
//     I am a web developer.
//     I love to code.
//     I love to eat biryani
// `
// return text
// }

// console.log(dialouge())

// 3: use default value for function when function parameter is empty

// const number = (first, second = 0) => {
//     const total = first + second
//     return total
// }

// const result = number(5, 5)
// console.log(result)



// 4: get even name from array and odd name from array


// odd name by function demo from stack laerner 
// function oddFriend(list) {
//     let oddFr = [];
//     for (let i = 0; i < list.length; i++) {
//       const len = list[i].length;
//       if (len % 2 !== 0) {
//         oddFr.push(list[i]);
//       }
//     }
//     return oddFr;
//   }
  
//   console.log(oddFriend(["jon", "james", "robert", "george", "Leo", "joy"]));


// const evenName = (names) => {
//     let evenFr = []
//     for(let i = 0; i < names.length; i++){
//         const frName = names[i].length
//         if(frName % 2 === 0){
//             evenFr.push(names[i])
//         }
//     }
//     return evenFr
// }



// const oddName = (names) => {
//     let oddFr = []
//     for(const name of names){
//         const frName = name.length
//         if(frName % 2 !== 0){
//             oddFr.push(name)
//         }
//     }
//     return oddFr
// }

// const friendsName = ["Sharif Vai", "Nuru", "Nesar Vai", "Tushar Vai", "Mamun"]
// const getEvenName = evenName(friendsName)
// const getOddName = oddName(friendsName)
// console.log(getEvenName)
// console.log(getOddName)



// 5: get square number with math.pow

// const numbers = [2, 4, 6, 8]

// const squareNumber = (numbers) => {
//     let numberSqr = []
//     for(let i = 0; i < numbers.length; i++){
//         const number = numbers[i]
//         const getNumber = Math.pow(number, 2)
//         numberSqr.push(getNumber)
//     }
//     return numberSqr
// }
// const getSquareNumber = squareNumber(numbers)
// console.log(getSquareNumber)


// 6: get sum of number from an array with arrow function


// const numbers = [2, 4, 6, 8]

// const squareNumber = (numbers) => {
//     let numberSqr = []
//     for(let i = 0; i < numbers.length; i++){
//         const number = numbers[i]
//         const getNumber = Math.pow(number, 2)
//         numberSqr.push(getNumber)
//     }
//     return numberSqr
// }
// const getElement = squareNumber(numbers)
// console.log(getElement)

// const getSum = (numbers) => {
//     let sum = 0
//     for(let i = 0; i < numbers.length; i ++){
//         const element = numbers[i]
//         if(sum < element){
//             sum = sum + element
//         }
//     }

//     return sum
// }

// console.log(getSum(getElement))


// 7: get average from an array 

// const numbers = [2, 4, 6, 8]

// const squareNumber = (numbers) => {
//     let numberSqr = []
//     for(let i = 0; i < numbers.length; i++){
//         const number = numbers[i]
//         const getNumber = Math.pow(number, 2)
//         numberSqr.push(getNumber)
//     }
//     return numberSqr
// }
// const getElement = squareNumber(numbers)
// // console.log(getElement)

// const getSum = (numbers) => {
//     let sum = 0
//     let average = 0
//     for(let i = 0; i < numbers.length; i ++){
//         const element = numbers[i]
//         if(sum < element){
//             sum = sum + element
//             average = sum / i
//         }
//     }

//     return average
// }

// console.log(getSum(getElement))




// 8: get max number from two array

// const number1 = [10, 12, 25]
// const number2 = [8, 11, 15]

// const maxNumber = (num1, num2) => {
//     const getMax = Math.max(...num1, ...num2)
//     return getMax
// }

// const getMaxNumber = maxNumber(number1, number2)
// console.log(getMaxNumber)