function countDuplicat(arr) {
    let objDuplicate = {};
    const str = arr.join();
    const arr1 = str.split(" ");
    let letter = [];
    let count = 1;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr1[i + 1]) {
        count++;
      } else {
        let value = `${count}${arr1[i]}`;
        letter = [...letter, value];
        count = 1;
      }
    }
    return (objDuplicate = Object.assign({}, letter));
  }
  
  console.log(
    countDuplicat(["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"])
  );
