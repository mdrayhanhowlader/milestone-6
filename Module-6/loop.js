const numbers = [2, 4, 5, 6, 7, 8]
// for(const number of numbers){

// }


// 1: you can not use for of loop on objects 
const bottle = { color: 'yellow', price: 40, isCleaned: true, capacity: 1}

// 2: you can use key for taking objects as array

const keys = Object.keys(bottle)
// console.log(keys);

// 3: then you can use keys for loop
for(const key of keys){
    console.log(key);
}

/*
3 ways to read object properties

bottle.color //direct property read
bottle['color'] // by taking variable 
bottle[key] // jetar vitor property ta ase oita third brackete newar dara

*/

for(const key of keys){
    // console.log(key, bottle[key])
}


// for in loop
// object er upor tumi for in loop chalaba tahole easy hobe
for(const key in bottle){
    // console.log(key, bottle[key])
}

// advance
const pair = Object.entries(bottle)
for(const [key, value] of Object.entries(bottle)){
    console.log(key, value)
}