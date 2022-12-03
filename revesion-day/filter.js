const friends = ['Jamal', 'kamal', 'tomal', 'samal', 'sharif']
const friend = friends.filter(friend => friend.length % 2 === 0)

// console.log(friend)


const numbers = [2, 4, 5, 6, 7, 8, 9, 12, 23, 34, 56, 67, 45]
const bigNums = numbers.filter(number => number > 20)
// console.log(bigNums);
const smallNums = numbers.filter(number => number < 20)
// console.log(smallNums);


const names = ['car', 'bike', 'gloves', 'belt', 't-shirt']
const bigNames = names.filter(name => name.length > 4 && name.length % 2 === 0)
console.log(bigNames);