# Memoized Fibonacci Function

## Overview
This JavaScript function demonstrates **memoization**, a technique used to **optimize recursive functions** by storing previously computed results.  
It calculates Fibonacci numbers efficiently, even for large inputs like `fib(44)`.

## Function Description

```js
const cache = {};

function fibonacci(n) {
    if (cache[n]) return cache[n]; // Return cached result if exists
    if (n <= 1) return n;          // Base case: fib(0)=0, fib(1)=1

    const result = fibonacci(n - 1) + fibonacci(n - 2); // Recursive calculation
    cache[n] = result;                                   // Store result in cache
    return result;                                       // Return result
}
 
## Key Points

- `cache` is an object storing computed Fibonacci numbers.
- Before computing, the function **checks the cache** to avoid repeated work.
- Base case handles `n = 0` and `n = 1`.
- Recursive calls calculate the result only if it’s not already cached.
- Memoization drastically improves performance for large `n`.

## Usage

```js
console.log(fibonacci(10)); // Output: 55
console.log(fibonacci(44)); // Output: 701408733 (computed quickly)