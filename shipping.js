const {generateRandomDelay} = require('./utils')

/*
This function generates a random number to serve as a "tracking number" on the shipping label.
In real life this wouldn't be a random number...
 */
function generateTrackingNumber() {
    return Math.floor(Math.random() * 1000000);
  }

const shipOrder = (responseArray) => {
  const order = responseArray[0];
  console.log("Generating shipping label.")
  const trackingNum =generateTrackingNumber();
  return new Promise ((resolve, reject) => {
   setTimeout(()=> {  
     resolve(`The order has been shipped. The tracking number is: ${trackingNum}.`);
}, generateRandomDelay());
 });
};

module.exports = {shipOrder}