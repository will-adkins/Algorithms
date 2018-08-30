///////////////////////
// FizzBuzz Challenge
//////////////////////

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
