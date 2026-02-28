const cache = {};

function fibonacci(n){
    if(cache[n]) return cache[n];

    if(n<=1) return n;

    const result = fibonacci(n-1) + fibonacci(n-2);
    cache[n] = result;

    return result;
}
console.log(fibonacci(44))