const fish = {
    name: 'Elish',
    address: 'mawa',
    color: 'silver gold',
    phone: 01434343436,
    price: 4000
}

// object destructuring 
const {name, address, color, phone, price} = fish

// console.log(name)

const fishDetails = []

fishDetails.push(name, address, phone, color, price)

console.log(fishDetails)


// array destructuring 
const [first, second] = [21, 32]