const factorialRecursive = (n) => {
  if (n < 0) throw new Error('Factorial is undefined for negative numbers')
  if (n <= 1) return 1

  return n * factorialRecursive(n - 1)
}

const factorialTailRecursive = (n, acc = 1) => {
  if (n < 0) throw new Error('Factorial is undefined for negative numbers')
  if (n <= 1) return acc

  return factorialTailRecursive(n - 1, acc * n)
}

const factorialIterative = (n) => {
  if (n < 0) throw new Error('Factorial is undefined for negative numbers')

  let result = 1

  for (let i = 1; i <= n; i++) {
    result *= i
  }

  return result
}
