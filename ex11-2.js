// JavaScript – forEach & map
// The following exercise contains the following subjects:
// ● map
// ● forEach
// Instructions
// Answer the questions below and use the map or the
// forEach method :
// 1. Write a function called doubleValues which accepts an
// array of integers and returns a new array with all the
// values in the array passed to the function doubled.
// 2. Write a function called onlyEvenValues which accepts an
// array and returns a new array with only the even values in
// the array passed to the function.
// 3. Write a function called showFirstAndLast which accepts
// an array as an argument and returns a new array with only
// the first and last elements from the function’s argument
// array. The returned array should only contain elements
// that are strings.
// 4. Write a function called vowelCount which accepts a string
// as an argument. The function should return an object
// which has the count of the number of vowels that are in
// the string. The key should be the vowel and the value
// should be the count. e.g. {a:3, o:2,u:4}. Should not be
// case-sensitive.
// 5. Write a function capitalize that takes a string as an
// argument and will return the whole string capitalized.
// 6. Write a function called shiftLetters that takes a string as an
// argument and return’s an encoded string with each letter
// shifted down the alphabet by one.
// 7. Create a function called swapCase that takes a string as
// an argument and returns a string that every other word is
// capitalized. (you can use the fifth’s exercise's function to
// keep it dry)


function doubleValues(arr) {
  return arr.map(function(val) {
    return val * 2;
  });
}

function onlyEvenValues(arr) {
  return arr.filter(function(val) {
    return val % 2 === 0;
  });
}

function showFirstAndLast(arr) {
  return arr.filter(function(val) {
    return typeof val === 'string';
  }).map(function(val, idx, arr) {
    if (idx === 0 || idx === arr.length - 1) {
      return val;
    }
  });
}

function vowelCount(str) {
  const vowels = 'aeiouAEIOU';
  return str.split('').reduce(function(acc, val) {
    if (vowels.indexOf(val) !== -1) {
      acc[val.toLowerCase()] = acc[val.toLowerCase()] + 1 || 1;
    }
    return acc;
  }, {});
}

function capitalize(str) {
  const words = str.split(' ');
  words.forEach(function(word, idx) {
    words[idx] = word[0].toUpperCase() + word.slice(1);
  });
  return words.join(' ');
}

function shiftLetters(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return str.split('').map(function(val) {
    let idx = alphabet.indexOf(val.toLowerCase());
    if (idx === -1) {
      return val;
    } else if (idx === 25) {
      return alphabet[0].toUpperCase() === val ? alphabet[0].toUpperCase() : alphabet[0];
    } else {
      return alphabet[idx + 1].toUpperCase() === val ? alphabet[idx + 1].toUpperCase() : alphabet[idx + 1];
    }
  }).join('');
}

function swapCase(str) {
  const words = str.split(' ');
  words.forEach(function(word, idx) {
    if (idx % 2 === 0) {
      words[idx] = capitalize(word);
    }
  });
  return words.join(' ');
}