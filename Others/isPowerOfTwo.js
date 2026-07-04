function isPowerOfTwo(n) {
  if (n < 1) {
    return false
  }

  while (n > 1) {
    if (n % 2 !== 0) {
      return false
    }
    n = n / 2
  }

  return true
}

console.log(isPowerOfTwo(1)) // true
console.log(isPowerOfTwo(2)) // true
console.log(isPowerOfTwo(5)) // false
console.log(isPowerOfTwo(8)) // true
console.log(isPowerOfTwo(12)) // false
console.log(isPowerOfTwo(16)) // true

function isPowerOfTwoBit(n) {
  if (n < 1) {
    return false
  }

  return (n & (n - 1)) === 0
}

console.log(isPowerOfTwoBit(1)) // true
console.log(isPowerOfTwoBit(2)) // true
console.log(isPowerOfTwoBit(5)) // false
console.log(isPowerOfTwoBit(8)) // true
console.log(isPowerOfTwoBit(12)) // false
console.log(isPowerOfTwoBit(16)) // true
