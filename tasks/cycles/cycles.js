/**
 * Write the function that will calculate the amount of discount
 * considering the redemption amount
 * Rules are the following:
 * - 0    - 350:  0%
 * - 351  - 1350: 15%
 * - 1351 - 2700: 30%
 * - 2701 - 6500: 45%
 * @param {number} redemption amount (0 - 9999)
 * @returns {number} discount in percent
 */

function calculateDiscount(redemption) {
  let discount;

  if ((redemption >= 0 && redemption <= 350) || (typeof redemption === 'string')) {

    discount = (0);
  } else if (redemption >= 351 && redemption <= 1350) {
    discount = (15);
  } else if (redemption >= 1351 && redemption <= 2700) {
    discount = (30);
  } else if (redemption >= 2701 && redemption <= 6500) {
    discount = (45);
  }

  return discount;
}
console.log(calculateDiscount(1000));


/** TODO
 * implement factorial algorithm using for, while, do..while operators
 */

{
  const i = 10;
  let x = 1;
  let y = 1;
  while (y < i) {
    x = x * y;
    y++;
  }
  console.log(x);
}

{
  let x = 1;
  for (let y = 1; y < 10; y++) {
    x = x * y;
  }
  console.log(x);
}

{
  const i = 10;
  let x = 1;
  let y = 1;
  do {
    x = x * y;
    y++
  }
  while (y < i);
  console.log(x);
}

/**
 * return concatenated string from an array of substring
 */

const substr = ["I", " love", " JS"];
let text = '';
for (let b of substr) {
  text += b;
}
console.log(text);


/**
 * calculate a total of income of certain person
 */
{
  const personIncomes = {
    salary: 1985,
    rent: -600,
    interestOnDeposit: 250,
    otherExpences: -300
  };
  let sum = 0;
  let count = 0

  for (let n in personIncomes) {
    sum += personIncomes[n];
  }
  console.log(sum)
}

module.exports = calculateDiscount;