const {randomSuccess, generateRandomDelay} = require('./utils.js')

/*
this is the brainstormDinner function. It's a little silly. It returns a promise that uses a series of setTimeout() functions to simulate a time-consuming asynchronous action. It's a good example of "callback hell" or "the pyramid of doom," two ways people describe how confusing a bunch of nested callback functions can become.
*/

const brainstormDinner = () => {
    return new Promise((resolve, reject) => {
    console.log(`I have to decide what's for dinner...`)
    setTimeout(() => {
      console.log('Should I make salad...?');
      setTimeout(() => {
        console.log('Should I make ramen...?');
        setTimeout(() => {
          console.log('Should I make eggs...?');
          setTimeout(() => {
            console.log('Should I make chicken...?');
            resolve('beans');
          }, generateRandomDelay());
        }, generateRandomDelay());
      }, generateRandomDelay());
    }, generateRandomDelay());
  });
  };

const shopForBeans = () => {
  return new Promise((resolve, reject) => {
	const beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
  setTimeout(()=>{
    let randomIndex = Math.floor(Math.random() * 5);
    let beanType = beanTypes[randomIndex];
    console.log(`I bought ${beanType} beans because they were on sale.`);
   resolve(beanType);
  }, generateRandomDelay())
})
}

let soakTheBeans = (beanType) => {
   return new Promise((resolve, reject) => {
     console.log('Time to soak the beans.');
    setTimeout(()=>{
      console.log(`... The ${beanType} beans are softened.`);
      resolve(true);
      }, generateRandomDelay());
  });
}

let cookTheBeans = (isSoftened) => {
  return new Promise((resolve, reject) => {
    console.log('Time to cook the beans.');
    setTimeout(()=>{
      if (isSoftened) {
        console.log('... The beans are cooked!');
        resolve('\n\nDinner is served!');
      }
    }, generateRandomDelay());
  });
}

let cookBeanSouffle = () => {
    return new Promise((resolve, reject) => {
      console.log('Fingers crossed... Putting the Bean Souffle in the oven');
      setTimeout(()=>{
        let success = randomSuccess(0.5); // dinner depends on a coin flip ;)
        if(success){
          resolve('Bean Souffle');
        } else {
          reject('Dinner is ruined!');
        }
      }, generateRandomDelay());
    });
   };

let cookBeans = () => {
  return new Promise ((resolve, reject) => {
    setTimeout(()=>{
      resolve('beans');
    }, generateRandomDelay());
  });
};

let steamBroccoli = () => {
  return new Promise ((resolve, reject) => {
    setTimeout(()=>{
      resolve('broccoli');
    }, generateRandomDelay());
  });
};

let cookRice = () => {
  return new Promise ((resolve, reject) => {
    setTimeout(()=>{
      resolve('rice');
    }, generateRandomDelay());
  });
};

let bakeChicken = () => {
  return new Promise ((resolve, reject) => {
    setTimeout(()=>{
      resolve('chicken')
    }, generateRandomDelay());
  });
};
  
module.exports = {brainstormDinner, shopForBeans, soakTheBeans, cookTheBeans, cookBeanSouffle, cookBeans, steamBroccoli, cookRice, bakeChicken};