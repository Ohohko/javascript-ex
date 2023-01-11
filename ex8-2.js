const myCountry= {
    country:"Usa",
    capital:"Dc",
    language:"En",
    population: 350000000,
    neighbors: ["Mexico"],

    describe: function () {
      return `${this.country} has ${this.population} million people, their mother tongue is ${this.language}, they have ${this.neighbors.length} countries and a capital called ${this.capital}`;
    }, 
    checkIsland: function () {
        this.neighbors.length > 0 ? (this.isIsland = false) : (this.isIsland = true);
        return this.isIsland;
      },
    };
  console.log(myCountry);