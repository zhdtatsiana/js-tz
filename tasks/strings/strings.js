/**
 * 1. Write a method to reverse a string; Function should return the string 'This is not a string'
 * if a number is passed
 * @param {string} str
 */
function reverseString(str) {
  if (typeof str === "string") {
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
  } else {
    return('This is not a string!')
  };
}

/**
 * 1. Calculate a century by given year
 * if a number is passed
 * @param {number} year
 */
function centuryFromYear(year) {
  return Math.floor((year - 1) / 100) + 1;
}

/**
 * Calculate count of the provided char in the string
 * @param {string} str
 * @param {string} char
 */
function strCount(str, char) {
  let char_Count = 0;
  for (var position = 0; position < str.length; position++) {
    if (str.charAt(position) == char) {
      char_Count += 1;
    }
  }
  return char_Count;
}


/**
 * We need to reduce the length of the string or truncate it if it is longer
 * than the given maximum length specified and add ... to the end. If it is not that long then we keep it as is.
 * @param {string} str - the initial string
 * @param {num} num - by wht amount of chars it should be truncated
 */
function truncateString(str, num) {
  let ending = '...';
  if (str.length > num) {
    return str.substring(num, num - str.length) + ending;
  } else {
    return str
  };
}

/**
 * replace 10 with 'ten' word
 * @param {string} text - input text
 * @return {string} - updated text
 * @example
 * console.log(replace10("231054")) // 23ten54
 */
function replace10(text) {
  let newstring = text.replace(new RegExp('10', 'g'), 'ten');
  return newstring;
}
console.log(replace10("231054"));


/**
 * replace value in square brackets with CONFIDENTIAL
 * @param text - input text
 * @return {string} - updated string
 * @example
 * console.log(replaceConfidential("lorem [ipsum] si dolor")) // lorem [CONFIDENTIAL] si dolor
 */
function replaceConfidential(text) {
  let newtext = text.replace((/\[(.+?)\]/g), '[CONFIDENTIAL]');
  return (newtext);
}


module.exports = {
  reverseString,
  centuryFromYear,
  strCount,
  truncateString,
  replace10,
  replaceConfidential
};