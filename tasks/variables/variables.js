/**
 * TODO create variable named int and set value equal to 1
*/
{var int = 1;}
console.log('int =',int);

/**
 *  TODO create variable named int2 and set value equal int plus 1
 */
{var int2 = int + 1;}
console.log('int2 =',int2);
/**
 * TODO create variable named str and set value equal to "John"
 */
let str = 'John';
console.log('str =' , str);
/**
 * TODO create variable named str2 and set value equal str plus " Dou"
 */
let str2 = str + ' ' +'Dou';
console.log('str2 =', str2);
/**
 * TODO create variable named bool and set value equal to comparison of int and int2 variables
 */
let bool = int < int2;
console.log('bool = ', bool);

/**
 * TODO create variable named arr and set value array of numbers from 1 to 5
 */
var arr = [1, 2, 3, 4, 5];
console.log('arr =' , arr)
/**
 * TODO create variable named fifth and set value as element of array with index 4
 */
const fifth = [1,2,3,4,5];
console.log('fifth = ', fifth [4]);
/**
 * TODO create variable named human and set value as object with key firstName and value "John"
 */
const human = {firstname: 'John '};
console.log('human firstname =',human.firstname);
/**
 * TODO set new key of human object named lastName and value "Dou"
 */
human.lastname = 'Dou';
console.log('human lastname =',human.lastname);

/**
 * TODO set new key of human object named fullName and value of concatenation of firstName and lastName values
 */
human.fullname = human.firstname.concat(human.lastname);
console.log('human fullname = ',human.fullname);