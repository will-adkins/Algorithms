// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

const Fizzbuzz = () => {
  const arr = []
  for (let i = 1; i <= 100; ++i) {
    const val =
      i % 15 === 0
        ? 'FizzBuzz'
        : i % 3 === 0
          ? 'Fizz'
          : i % 5 === 0
            ? 'Buzz'
            : i
    arr.push(val)
  }
  return arr
}

const fizzBuzz = n => {
  const fb = n =>
    n % 15 === 0 ? 'fizzbuzz' : n % 3 === 0 ? 'fizz' : n % 5 === 0 ? 'buzz' : n

  return compose(
    map(fb),
    map(n => n + 1)
  )([...Array(n).keys()])
}
// R.range(1,n)

// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  debugger
  return str.split('').reduce((acc, char) => char + acc, '')
}
// or .split('').reverse().join('')
// or the imperative way for length - 1 to 0, str = char + str

// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  return str
    .split('')
    .every((char, i) => char === str.charAt(str.length - i - 1))
}

// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const str = String(Math.abs(n))
  return (
    Math.sign(n) *
    Number(
      str
        .split('')
        .reverse()
        .join('')
    )
  )
}

// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// ****Anagram, comparing numbers between 2 strings, anything where you need to count characters in a string or values in an array****
function maxChar(str) {
  let charMap = {}
  let max = 0
  let maxChar = ''

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1
  }

  for (let key in charMap) {
    if (charMap[key] > max) {
      max = charMap[key]
      maxChar = key
    }
  }
  return maxChar
}

function isAnagram(str1, str2) {
  let charMap1 = {}
  let charMap2 = {}
  let isAnagram = true

  for (let char of str1) {
    charMap1[char] = charMap1[char] + 1 || 1
  }
  for (let char of str2) {
    charMap2[char] = charMap2[char] + 1 || 1
  }

  for (let key in charMap1) {
    if (charMap1[key] !== charMap2[key]) {
      isAnagram = false
    }
  }
  for (let key in charMap2) {
    if (charMap2[key] !== charMap1[key]) {
      isAnagram = false
    }
  }
  return isAnagram
}

// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(arr, c) {
  let result = []

  for (let element of arr) {
    const last = result[result.length - 1]

    if (!last || last.length === c) result.push([element])
    else last.push(element)
  }
  return result
}

const chunk = (arr, chunksize) =>
  arr.reduce(
    (a, b, index, g) =>
      !(index % chunksize) ? a.concat([g.slice(index, index + chunksize)]) : a,
    []
  )

// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const str1 = stringA.replace(/[^\w]/g, '').toLowerCase()
  const str2 = stringB.replace(/[^\w]/g, '').toLowerCase()

  let charMap1 = {}
  let charMap2 = {}

  for (let char of str1) charMap1[char] = charMap1[char] + 1 || 1
  for (let char of str2) charMap2[char] = charMap2[char] + 1 || 1

  if (Object.keys(charMap1).length !== Object.keys(charMap2).length)
    return false

  for (let key in charMap1) {
    if (charMap1[key] !== charMap2[key]) return false
  }
  return true
} // make helper function to buildCharMap (replace logic in for loop)

const anagramsSort = (stringA, stringB) => {
  const cleanStr = str =>
    str
      .replace(/[^\w]/g, '')
      .toLowerCase()
      .split('')
      .sort()
      .join('')
  return cleanStr(stringA) === cleanStr(stringB)
}
