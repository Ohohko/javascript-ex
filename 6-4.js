const percentageOfWorld1 = (population) => (population/ 7900) * 100;
const population = [555,50,10,78];

const populationPercentages = (popArray) => {
 let percentages = [];
 for (const country of popArray) {
    percentages.push(percentageOfWorld1(country).toFixed(2)+'%')
  }
  return percentages;
}

console.log(populationPercentages(population));