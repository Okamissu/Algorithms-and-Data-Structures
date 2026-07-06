const fib1 = (n) => {
  if (n < 0) return null
  if (n === 0) return 0
  if (n === 1) return 1

  return fib1(n - 1) + fib1(n - 2)
}

const fib2 = (n) => {
  if (n <= 0) return null
  if (n === 1) return [0]
  const fib = [0, 1]

  for (let i = 2; i < n; i++) fib.push(fib[i - 1] + fib[i - 2])

  return fib
}

console.log(fib2(10))
