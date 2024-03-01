/*
This function generates a random number to serve as delay in a setTimeout()
It's used to simulate real asynchrnous operations which take variable amounts of time.
*/ 
function generateRandomDelay() {
    return Math.floor(Math.random() * 2000);
  }

module.exports = {generateRandomDelay}