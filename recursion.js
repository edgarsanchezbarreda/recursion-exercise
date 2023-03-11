/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
    // base case
    if (i === nums.length) return 1;

    // normal case
    return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

// Iterates through array of words, sets "current" to either the value it currently holds or the length of the current word, depending on which is longer, then calls function recursively until all values in array have been iterated over.
function longest(words, i = 0, current = 0) {
    // base case
    if (i === words.length) return current;

    current = Math.max(words[i].length, current);

    // normal case
    return longest(words, i + 1, current);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0, newString = '') {
    // base case
    if (i >= str.length) return newString;

    newString += str[i];

    // normal case
    return everyOther(str, i + 2, newString);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = 0) {
    let leftIdx = idx;
    let rightIdx = str.length - idx - 1;

    // base case
    if (leftIdx >= rightIdx) return true;
    if (str[leftIdx] !== str[rightIdx]) return false;

    // normal case
    return isPalindrome(str, idx + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
    while (i < arr.length) {
        // base case
        if (arr[i] === val) return i;

        // normal case
        return findIndex(arr, val, i + 1);
    }
    return -1;
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = 0, reversedString = '') {
    if (i >= str.length) return reversedString;

    reversedString += str[str.length - i - 1];

    return revString(str, i + 1, reversedString);
}

/** gatherStrings: given an object, return an array of all of the string values. */
// for (const y in x) console.log(x[y]);
function gatherStrings(obj) {
    let strings = [];

    for (let key in obj) {
        // base case
        if (typeof obj[key] == 'object')
            strings.push(...gatherStrings(obj[key]));
        if (typeof obj[key] === 'string') strings.push(obj[key]);
    }

    // normal case
    return strings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */
[1, 2, 3, 4, 5];
function binarySearch(arr, val, left = 0, right = arr.length) {
    // base case
    if (left > right) {
        return -1;
    }
    let middle = Math.floor((right + left) / 2);
    if (arr[middle] === val) {
        return middle;
    }

    // normal case
    if (arr[middle] > val) {
        return binarySearch(arr, val, left, middle - 1);
    }
    // normal case
    return binarySearch(arr, val, middle + 1, right);
}

module.exports = {
    product,
    longest,
    everyOther,
    isPalindrome,
    findIndex,
    revString,
    gatherStrings,
    binarySearch,
};
