function countryInfo(country,population,capitalCity) {
    return  `${country} has ${population} million people and its capital city is ${capitalCity}`
  }
  
  let country1 = countryInfo('Israel', 10, 'Jerusalem');
  let country2 = countryInfo('Spain',40 , 'Madrid');
  let country3 = countryInfo('France', 55, 'Paris');

  countryInfo(country1);
  countryInfo(country2);
  countryInfo(country3);
  console.log(country1);
  console.log(country2);
  console.log(country3);
 