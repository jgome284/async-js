/*
This function generates a random number to serve as delay in a setTimeout()
It's used to simulate real asynchrnous operations which take variable amounts of time.
*/ 
function generateRandomDelay() {
    return Math.floor(Math.random() * 2000);
  }

function randomSuccess(pct) {
    // returns true at rate of 1/pct - e.g. 1/0.2 would return true 80% of the time
    return (Math.random() > pct);
}

const fs = require('fs');

// Below we create a function for reading files that returns a promise. We converted the fs.readfile() function which uses callbacks. Many of the asynchronous functions you'll encounter already return promises, so this extra step is seldom necessary. 
const promisifiedReadfile = (file, encoding) => 
  new Promise((resolve, reject) => {
    fs.readFile(file, encoding, (err, text) => {
			if (err) {
				return reject(err.message);
      }
        resolve(text);
      });
});

module.exports = {generateRandomDelay, randomSuccess, promisifiedReadfile}