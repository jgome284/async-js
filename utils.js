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

