const student = {
    name: 'kodom ali',
    money: 5000,
    study: 'math',
    subjects: ['calculas', 'aljebra', 'geometry', 'economics'],
    exam: function(){
        return this.subjects[2] + ' exam will start'
    },
    improveExam: function(subject){
        this.exam()
        return `${this.name} is takeing improvement exam on ${subject}`
    },
    treatDey: function(amount, tips){
        this.money = this.money - amount - tips
        return this.money
    }

}

const output = student.exam()
console.log(output);

const reExam = student.improveExam('Algorithom')
console.log(reExam);

const remaining = student.treatDey(900, 100)
console.log(remaining)

const dolaRemaining = student.treatDey(500, 50)
console.log(dolaRemaining)

