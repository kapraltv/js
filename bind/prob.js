// function bind(people, fnct){
// 	return function(...args){
// 		fnct.apply(people, args) 
// 	}
// }

// function logPerson(){
// 	console.log(`Person: ${this.name} ${this.age}`);
// }

// const people1 = {
// 	name: 'Vasya',
// 	age: 19
// }

// const people2 = {
// 	name: `Dima`,
// 	age: 25
// }

// bind(people1, logPerson);
// bind(people2, logPerson);

console.log(`Start`);

const people = {
	name: "Dima",
	age: 23,
	logInfo: function(){
		console.log(`Name - ${this.name}, age - ${this.age}`)
	}
}

function hello(){
	console.log("hello");
}

const lena = {
	name: "Lena",
	age: 21
}

setTimeout(people.logInfo.bind(lena), 2000);

console.log(`End`);


