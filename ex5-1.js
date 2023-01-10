function countryToLiveIn (language,isIsland,population,country) {
    if (language === 'english' && population <50 && isIsland === false) 
    {
        console.log("You should live in" + `${country}`);
    } else {
        console.log("You should Not!!! live in" + `${country}`);
    }
}

isIsland = true;
population = 1000;
country = 'israel';
language =  'english';

