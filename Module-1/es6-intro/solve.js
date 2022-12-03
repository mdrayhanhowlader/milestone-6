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

// const friendsName = ["Sharif Vai", "Nuru", "Nesar Vai", "Tushar Vai", "Mamun"]
// const getEvenName = evenName(friendsName)
// console.log(getEvenName)


const friends = ['nasar', 'habib', 'abrarFahad', 'khabib','papondadas','a', 'ab'];
const friend = friends.filter(friend => friend.length % 2 === 0);
console.log(friend);