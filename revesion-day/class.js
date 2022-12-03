// syntactic sugar

class Instructor{
    name;
    designation = 'instructor'
    team = 'web'
    location;
    constructor(name, location){
        this.name = name
        this.location = location
    }
    startSupportSession(time){
        console.log(`start the support session at ${time}`)
    }
    createQuize(module){
        console.log(`create quize for module ${module}`)
    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback`)
    }
}

// tops was structure for class object now you will call objects with class 

const amir = new Instructor('amir', 'mumbai')
// here you called function now you can call any value or property key

amir.createQuize = 2
amir.startSupportSession = '10:00PM'
console.log(amir);