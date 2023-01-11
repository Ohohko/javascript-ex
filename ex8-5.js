const obj1 = {
    firstName: "David",
    lastName: "Levy",
  };
  const obj2 = {
    firstName: "John",
    lastName: "Doe",
  };
  function swap(obj) {
    let result = {
    };
    for (let i in obj) {
      result[obj[i]] = i;
      console.log(obj[i]);
      console.log(i);
    }
    return result;
  }
  console.log(swap(obj1));
