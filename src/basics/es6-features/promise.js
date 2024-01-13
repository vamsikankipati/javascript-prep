// Promises are clean way to implement async programming in JS. (Since ES6)
// Callbacks were used prior to ES6 - synchronous (blocking current thread)
const createPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("foo");
      }, 3000);
});

createPromise.then(res => {
    console.log(createPromise);
}).catch(err => console.error(err));

console.log(createPromise);