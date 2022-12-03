const student = {
    name: 'hablu',
    age: 32,
    job: 'teacher',
    rating: 4.2,
    subjects: {
        math: 2,
        biology: 3.2,
        physics: 3.2
    }
}

// called dot notation
const rating = student.rating

// called bracket notation
const subject = student['subjects']['physics']

console.log(subject);

const subject1 = 'math'
const subject2 = student.subjects[subject1]
console.log(subject2);