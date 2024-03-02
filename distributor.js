const {generateRandomDelay, randomSuccess} = require('./utils')

const checkDistributorStock = (itemName, distributorName) => {
    console.log(`Checking availability of ${itemName} at ${distributorName}...`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // This is a function that returns true based on input % of the time
            // We're using it to simulate a request to the distributor being successful this often
            if (randomSuccess(0.2)) {
                console.log(`${itemName} are in stock at ${distributorName}`)
                resolve(itemName);
            } else {
                reject(`Error: ${itemName} are unavailable from ${distributorName} at this time.`);
            }
        }, generateRandomDelay());
    });
};

module.exports = { checkDistributorStock };
