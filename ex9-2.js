function lengthCalculator(arrayOfStrings) {
    let arrayOfLength = [];
    let i = 0;
    while (i < arrayOfStrings.length) {
      arrayOfLength.push(arrayOfStrings[i].length);
      i++;
    }
    return arrayOfLength;
  }
  console.log(lengthCalculator(["boo", "doooo", "hoo", "ro"]));
