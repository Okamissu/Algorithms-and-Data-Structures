const binarySearch = (arr, target) => {
  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    let mid = Math.floor((right - left) / 2) + left

    if (target === arr[mid]) {
      return mid
    }

    if (target < arr[mid]) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return -1
}

console.log(binarySearch([5, 10, 15, 20], 15)) // 2
console.log(binarySearch([5, 10, 15, 20], 5)) // 0
console.log(binarySearch([5, 10, 15, 20], 20)) // 3
console.log(binarySearch([5, 10, 15, 20], 100)) // -1

const binarySearchRecursive = (
  arr,
  target,
  left = 0,
  right = arr.length - 1,
) => {
  if (left > right) return -1

  const mid = Math.floor(left + (right - left) / 2)

  if (arr[mid] === target) return mid

  if (target < arr[mid]) {
    return binarySearchRecursive(arr, target, left, mid - 1)
  }

  return binarySearchRecursive(arr, target, mid + 1, right)
}

console.log(binarySearchRecursive([5, 10, 15, 20], 15)) // 2
console.log(binarySearchRecursive([5, 10, 15, 20], 5)) // 0
console.log(binarySearchRecursive([5, 10, 15, 20], 20)) // 3
console.log(binarySearchRecursive([5, 10, 15, 20], 100)) // -1
