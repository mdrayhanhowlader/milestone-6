const bottle = { color: 'yellow', price: 40, isCleaned: true, capacity: 1}

const keys = Object.keys(bottle)
// console.log(keys);
const values = Object.values(bottle)
// console.log(values);

const pair = Object.entries(bottle)
// console.log(pair)

const twoDimension = [
    [ 'color', 'yellow' ],
    [ 'price', 40 ],
    [ 'isCleaned', true ],
    [ 'capacity', 1 ]
  ]


// jodi object theke kono keys k delete korte chao

const deleteBottle = delete bottle.isCleaned
// console.log(bottle)

// r jodi object take seal kore dita chao i mean keo kisu remove korte parbena tahole seal method

const bottleSeal = Object.seal(bottle)
// console.log(bottle);

const deleteBottle2 = delete bottle.price
// console.log(bottle)

// seal korle kono property delete kora jayna tobe modified kora jay jmn example ami price ta bariye dibo ekhon
bottle.price = 100
// console.log(bottle);

// seal korle new kono property add o kora jayna

bottle.height = 12
// console.log(bottle)


// ebar object k freeze niye kotha freeze korle kono kisu kora jabena. add o na modified o na remove o na examplesorup 

const car = {color: 'red', price: 2000, capacity: 5, model: 2022}
Object.freeze(car)
car.price = 3000;
delete car.model

console.log(car)
