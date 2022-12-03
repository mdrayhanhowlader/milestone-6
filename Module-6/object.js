// 1: object literals

const player = {}
player.name = "small"
player.speacialty = "Batsman"
player.bat = function(){
    console.log("swing your bat")
}
// console.log(player)
// player.bat()


const student = {
    name: 'pandey',
    job: 'khay andey',
    ball: function(){
        console.log("swing ball")
    },
    salary: 1000
}
// console.log(student)



// 2: object construtor 
const person = new Object()




// 3: object create method 
// const item = Object.create(null)

const atel = Object.create(student)
// console.log(atel.name)



// 4: class 
class Person{
    name = "abul"
    address = "sadarghat"
    constructor(age){
        this.age = age
    }

}
const person1 = new Person(56)

// console.log(person1);
// 5: function object 

function Car(model, price){
    this.model = model
    this.price = price
}

const tesla = new Car('tesla', 200)
console.log(tesla)

