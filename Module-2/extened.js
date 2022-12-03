class TeamMember{
    name;
    location;
    constructor(name, location){
        this.name = name
        this.location = location
    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback`)
    }

}


class Instructor extends TeamMember{

    designation = 'instructor of web course'
    team = 'web team'

    constructor(name, location){
        super(name, location)
    }
    startSupportSession(time){
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`create quiz for module ${module}`)
    }

}


class Developer extends TeamMember{
    designation = 'instructor of web course'
    team = 'web team'
    constructor(name, location, tech){
        super(name, location)
        this.tech = tech
    }
    developFeature(feature){
        console.log(`please develop the ${feature}`)
    }
    release(version){
        console.log(`please release the version ${version}`)
    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback`)
    }
}

