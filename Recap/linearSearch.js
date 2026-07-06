const linearSearch = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i
  }
  return -1
}

console.log(linearSearch([5, 10, 15, 20], 15)) // 2
console.log(linearSearch([5, 10, 15, 20], 5)) // 0
console.log(linearSearch([5, 10, 15, 20], 20)) // 3
console.log(linearSearch([5, 10, 15, 20], 100)) // -1

console.log(linearSearch(['apple', 'banana', 'orange'], 'banana')) // 1
console.log(linearSearch(['apple', 'banana', 'orange'], 'grape')) // -1

console.log(linearSearch([], 42)) // -1

console.log(linearSearch([true, false, true], false)) // 1
