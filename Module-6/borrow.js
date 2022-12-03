const kodomAli = {
    name: 'kodom ali',
    money: 5000,
    study: 'math',
    subjects: ['calculas', 'aljebra', 'geometry', 'economics'],
    exam: function(){
        return `${this.name} exam will start`
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

const result = kodomAli.exam()

const badamAli = {
    name: 'kacha badam',
    money: 9000
}
const result2 = kodomAli.exam.call(badamAli)

const badamMoney = kodomAli.treatDey.call(badamAli, 450, 50)

const badamMoney2 = kodomAli.treatDey.apply(badamAli, [1000, 500])

const badamAliTreat = kodomAli.treatDey.bind(badamAli)

const remaining = badamAliTreat(500, 500)

console.log(remaining);