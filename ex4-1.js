const numSiblings = Number(prompt("How many siblings do you have?"));
howMany(numSiblings);

function howMany(numSiblings) {
  if  (numSiblings === 1 )  
  {
    console.log(`${numSiblings} sibling!`);
  }
   else if (numSiblings > 1) {
   
    console.log(`More than 1 sibling`);
  } 
  else {
    console.log(`No siblings`);
  }
}