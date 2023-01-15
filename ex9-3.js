const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

const fun = (arr1, arr2) =>{
    const sameItems = [];
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if(arr1[i] === arr2[j])
                sameItems.push(arr1[i]);
        }
    }
    if (sameItems.length > 0) return sameItems;
    else return false;
}

console.log(fun(food,food1));