//conditional

/** TODO
 * Task - rewrite IF..ELSE to ternary operator
 */
{
const a = 3,
     b = 2;

 if (a + b < 4) {
    console.log('wrong');
 } else {
   console.log('too much');
  }
}

const a = 3,
        b = 2;

 const condvalue = (a + b < 4) ? 'wrong' : 'too much';
    console.log(condvalue);

/** TODO
 * The system receives two params x and y.
 * Implement the logic when z equal to sum of x and y in case both of them less than 10 or multiplication in case of greater or equal than 10
 * Task 1 - if else
 * Task 2 - ternary operator
 */
{const x = 3;
    const y = 7;
    if (x<10, y<10) {
    const z = x+y;
    console.log(z)
  } else if (x>=10, y>=10) {
    const z = x*y;
    console.log(z)} }

    {const x = 3;
    const y = 7;
const z = (x<10, y<10) ? x+y : x*y;
console.log(z)};

/** TODO
 * The system receives 3 params - x, y, operator.
 * Operator can pass 4 possible values - "add", "subtract", "multiply", "divide".
 * Implement the logic when the system does appropriate operation based on passed operator param.
 */


    const x = 3;
    const y = 7;
    const operator = "add";

    switch (operator){
      case 'add':
        console.log(x+y);
      break;
      case 'substract':
        console.log(x-y);
      break;
      case 'multiply':
        console.log(x*y);
      break;
      case 'divide':
        console.log(x/y);
      break;}
    
    
    

