/**
 * write function that adds two numbers
 *
 */
function add(a, b) {
	return (a + b);
}
console.log(add(4, 8));
/**
 * write function that return first and last name of given object
 * properties firstName and lastName
 * {
 *    firstName: "John"
 *    lastName: "Dou"
 * }
 */

function getFullName(object) {
	return (object.firstName + " " + object.lastName);
};
const fullname = {
	firstName: "John",
	lastName: "Dou",
};
console.log(getFullName(fullname));
/**
 * write fuction that checks is number is odd
 * true if odd, false if even
 */
function isOdd(n) {
	if (n % 2 == 0) {
		return (false);
	} else {
		return (true);
	}
};
console.log(isOdd(9));

/**
 * write function that return shortest of words in given array
 * e.g ["one", "two", "three"] should return one
 */
function getShortest(wordArray) {

	let word = wordArray[0];
	for (let x of wordArray) {
		if (word.length > x.length) {
			word = x;
		}
	};
	return word;
}

console.log(getShortest(["one", "two", "three"]));

/**
 * write function that returns word google with given numbers of "o" symbols
 * e.g getGoogle(5) should return "gooooogle"
 */
function getGoogle(n) {
	let x = 'o';
	return ('g' + x.repeat(n) + 'gle');
}
console.log(getGoogle(5));
/**
 * write function that returns object based on given information (params may be null)
 * getUser("John", "Dou", 42) should return
 * {
 *    firstName: "John"
 *    lastName: "Dou"
 *    age: 42
 * }
 */
function getUser(firstName = null, lastName = null, age = null) {
	let user = {
		firstName: firstName,
		lastName: lastName,
		age: age
	};
	return (user);
}
console.log(getUser("John", "Dou", 42));


/**
 * write function that calculates total path traveled.
 * path represended as array of objects with field distance and direction
 * e.g [{direction: "Kiyv - Minsk", distance: 567}, {direction: "Kiyv - Paris", distance: 2402}]
 */

function getTotalPath(path) {
	let km = 0;
	for (let a of path) {
		km += a.distance
	};
	return km;
}
console.log(getTotalPath([{
	direction: "Kiyv - Minsk",
	distance: 567
}, {
	direction: "Kiyv - Paris",
	distance: 2402
}]));

/**
 * write a function that will calculate a discount considering the Amount
 * and the percentage (hint: you need to use the Closure here)
 * @param {amount} num 
 * @param {percentage} num 
 * const discount10 = discountFunction(10)
 */



function discountFunction(percentage) {
	return function (amount) {
		return (amount - percentage * amount / 100);
	};
}
const discount10 = discountFunction(10);
console.log(discount10(100));
/**
 * Write the methods inside the given objects that:
 * 1. console logs keys of the given object
 * 2. returns the string 'My name is John Doe and I am 25 years old. My best friend is Daniel'
 * reffering to the data stored in the object
 */

const myObject = {
	name: 'John',
	lastName: 'Doe',
	age: 25,
	friends: ['Mike', 'Alan', 'Daniel'],
	keys() {
		for (let key in myObject) {
			console.log(key);
		};
	},
	call() {
		return ('My name is ' + this.name + ' ' + this.lastName + ' and I am ' + this.age + ' years old. My best friend is ' + this.friends[2])
	}

};
myObject.keys();
myObject.call();

module.exports = {
	add,
	getFullName,
	isOdd,
	getShortest,
	getGoogle,
	getUser,
	getTotalPath,
	discountFunction,
	myObject
};