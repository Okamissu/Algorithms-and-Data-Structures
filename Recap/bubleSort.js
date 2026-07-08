function bubbleSort(arr) {
  if (!Array.isArray(arr)) return arr
  const len = arr.length
  if (len < 2) return arr

  for (let i = len - 1; i >= 0; i--) {
    let swapped = false
    for (let j = 1; j <= i; j++) {
      if (arr[j - 1] > arr[j]) {
        ;[arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
        swapped = true
      }
    }
    if (!swapped) break
  }

  return arr
}

console.log(bubbleSort([5, 1, 4, 19, 43, 2, 6, 9, 7]))

function bubbleSortLastSwap(arr) {
  if (!Array.isArray(arr)) return arr
  const len = arr.length
  if (len < 2) return arr

  let n = len
  while (n > 1) {
    let lastSwap = 0
    for (let i = 1; i < n; i++) {
      if (arr[i - 1] > arr[i]) {
        ;[arr[i - 1], arr[i]] = [arr[i], arr[i - 1]]
        lastSwap = i
      }
    }
    n = lastSwap
  }

  return arr
}

console.log(bubbleSortLastSwap([5, 1, 4, 19, 43, 2, 6, 9, 7]))
