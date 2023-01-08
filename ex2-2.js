function tellFortune(jobTitle, location, partnerName, numberOfChildren) {
    return `You will be a ${jobTitle} in ${location} and married to ${partnerName} with ${numberOfChildren} children`;
  }
  
  let fortune = tellFortune("programmer", "New York", "Rana", 2);

  tellFortune(fortune);
  console.log(fortune);
  