import Person, { Course, Student, Cohort } from './example-10.js'


// Amy, Bob, and Cat could be Person or Student
// We need to add them all to an array of people. 
// People can be Students or Students. 

// Write an interface with name and age

interface Human {
	name: string
	age: number
}

const amy: Human = new Student('Amy', 21, Cohort.junior)// name, age, cohort
const bob: Human = new Person('Bob', 32)
const cat: Human = new Student('Cat', 43, Cohort.junior)

// Use the interface to put Persons and Students
// in an array of Humans. 

const allPeople: Human[] = [
	amy, 
	bob,
	cat
]

export {
	allPeople
}