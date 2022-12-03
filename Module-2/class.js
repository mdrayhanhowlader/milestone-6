// syntactic sugar 

class Instructor {
    name;
    designation = 'instructor of web course'
    team = 'web team'
    location;
    constructor(name, location){
        this.name = name
        this.location = location
    }
    startSupportSession(time){
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`create quiz for module ${module}`)
    }
}

const himel = new Instructor('amir', 'mumbai')
console.log(himel)

himel.startSupportSession('at 8 pm')
himel.createQuiz('module 6')
console.log(himel)