const { generateRandomDelay } = require("./utils");

const inventory = {
    sunglasses: {
      stock: 817, 
      cost: 9.99
    },
    pants: {
      stock: 236, 
      cost: 7.99
    },
    bags: {
      stock: 17, 
      cost: 12.99
    }
  };
  
const checkInventory = (order) => {
  return new Promise ((resolve, reject) => {
   setTimeout(()=> {  
   const itemsArr = order.items;  
   let inStock = itemsArr.every(item => inventory[item[0]].stock >= item[1]);
   
   if (inStock){
     let total = 0;   
     itemsArr.forEach(item => {
       total += item[1] * inventory[item[0]].cost
     });
     console.log(`All of the items are in stock. The total cost of the order is ${total}.`);
     resolve([order, total]);
   } else {
     reject(`The order could not be completed because some items are sold out.`);
   }     
}, generateRandomDelay());
 });
};
  
  module.exports = {checkInventory, inventory};