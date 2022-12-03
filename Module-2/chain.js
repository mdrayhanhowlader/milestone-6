const users = [
    {id: 1, name: "abul", professin: 'doctor'}
]



const user = {
    count: 5000,
    name: "abul",
    address: {
        street: {
            first: "nilkhet",
            second: "khilkhet",
            third: "cantonment"
        }
    }
}

// question mark diye bole tumi jodi ekhane data na pao error nadiye undefined diba 
const getUser = user.address.stret?.second
console.log(getUser)