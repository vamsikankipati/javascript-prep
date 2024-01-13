// Promises are clean way to implement async programming in JS. (Since ES6)
// Callbacks were used prior to ES6 - synchronous (blocking current thread)
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("resolved");
      }, 1000);
      setTimeout(() => {
        reject("rejected");
      }, 3000);
});

promise.then(res => {
    console.log('Resolved:', res);
}, rej => {
    console.log('Rejected:', rej);
});

console.log(promise); // Resolved