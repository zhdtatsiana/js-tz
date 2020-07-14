/**
 * return an array of characters names
 * @param {Array} chars
 * @return {Array} - char names
 */
function getCharactersNames(chars) {
    let charNames = chars.map(char => char.name);
    return charNames;
}

/**
 * print (console.log) ids of all characters
 * @param {Array} chars
 */
function printCharacterNames(chars) {
    chars.forEach(element => {
        console.log(element.name);
    });
}

/**
 * return an array of non-human characters
 * @param {Array} chars
 * @return {Array} - non human characters
 */
function getNonHumanCharacters(chars) {
    let nharray = chars.filter(element => element.species != 'Human');
    return nharray;
}

/**
 * return info about character named 'Jerry Smith'
 * @param {Array} chars
 * @return {Object} - Jerry object
 */
function getJerryInfo(chars) {
    let JerryInfo = chars.find(element => element.name == 'Jerry Smith');
    return JerryInfo;
}

/**
 * check if all characters are human. return true if all, false if not
 * @param {Array} chars
 * @return {boolean}
 */
function isAllHuman(chars) {
    return (chars.every(element => element.species == 'Human'));
}

/**
 * check if there are any Fish-Person characters. return true if any, false if not
 * @param {Array} chars
 * @return {boolean}
 */
function isAnyFishPerson(chars) {
    return (chars.some(element => element.type == "Fish-Person"));
}

/**
 * 1. Write a method to find an index of minimal item from an array;
 * @param {Array} arr
 * @return {number} - minimum element index
 */
function minItem(arr) {
    //PLACE YOUR CODE HERE
    let x = Math.min(...arr);
    return (arr.indexOf(x));
}





module.exports = {
    getCharactersNames,
    printCharacterNames,
    getNonHumanCharacters,
    getJerryInfo,
    isAllHuman,
    isAnyFishPerson,
    minItem
};