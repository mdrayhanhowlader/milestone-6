const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10]
const halfNumber = numbers.map(x => x/2)
// console.log(halfNumber)

const friends = ["shakib", "tamim", "mushfiq", "riyad"]
const friendFastLater = friends.map(friend => friend[0])
// console.log(friendFastLater)

const friendLength = friends.map(friend => friend.length)
const maxFriend = Math.max(...friendLength)
// console.log(friendLength)
// console.log(maxFriend)

// const myFriend = friends.map(friend => Math.max(...friendLength))
// console.log(myFriend)

// for(const friend of friends){
//     console.log(friend)
// }