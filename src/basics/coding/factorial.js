const factorial = num => {
    let sum = 1;
    if (num !== 0) {
        sum = sum * num * factorial(num - 1);
    }
    return sum;
}

console.log(factorial(10));