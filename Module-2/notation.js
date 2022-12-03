const student = {
    name: 'sakib',
    age: 15,
    class: "ten",
    marks: {
        physics: 54,
        math: 32,
        biology: 54
    }
}

const marks = student.marks
const math = student.marks.math



const biology = student['marks']['biology']
const subject = 'biology'
const subjectMarks = student.marks[subject]

console.log(biology)
// console.log(subjectMarks)
