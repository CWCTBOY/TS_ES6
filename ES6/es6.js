'use strict';
const cons = async () => {
  const two = new Promise((clear, error) => {
    setTimeout(() => { clear(2); }, 1000);
  })
  const three = new Promise((clear, error) => {
    setTimeout(() => { clear(3); }, 2000);
  })
  console.log(1);
  console.log(await two);
  console.log(await three);
}
cons();