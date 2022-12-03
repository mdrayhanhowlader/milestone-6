///////////////////////////////////////
////////////  system one//////////////
/////////////////////////////////////
//  const friends = ['nasar', 'habib', 'abrarFahad', 'khabib','papondadas','a', 'ab']
// let frndList = [];
//  friends.map(friend => {
//     if(friend.length % 2 === 0){
//         frndList.push(friend);
//     }
//  });
//  console.log(frndList)

///////////////////////////////////////
//////////////system two//////////////
/////////////////////////////////////
const friends = ['nasar', 'habib', 'abrarFahad', 'khabib','papondadas','a', 'ab'];
const friend = friends.filter(friend => friend.length % 2 === 0);
console.log(friend);


///////////////////////////////////////
//////////////system three////////////
/////////////////////////////////////
// const friends = ['nasar', 'habib', 'abrarFahad', 'khabib','papondadas','a', 'ab'];
// let evenFriend = [];
// for(const friend of friends){
//     if(friend.length % 2 === 0){
//         evenFriend.push(friend);
//     }
// }
// console.log(evenFriend)