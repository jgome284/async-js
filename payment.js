const { generateRandomDelay } = require('./utils')

const processPayment = (responseArray) => {
    const order = responseArray[0];
    const total = responseArray[1];
    return new Promise ((resolve, reject) => {
     setTimeout(()=> {  
     let hasEnoughMoney = order.giftcardBalance >= total;
     // For simplicity we've omited a lot of functionality
     // If we were making more realistic code, we would want to update the giftcardBalance and the inventory
     if (hasEnoughMoney) {
       console.log(`Payment processed with giftcard.`);
       const remainingBalance = order.giftcardBalance - total
       console.log(` - Remaining Balance: ${remainingBalance.toFixed(2)}`)
       resolve([order]);
     } else {
       reject(`Cannot process order: giftcard balance was insufficient.`);
     }
     
  }, generateRandomDelay());
   });
  };

module.exports = {processPayment}