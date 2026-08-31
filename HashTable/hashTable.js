function simpleHash(key, arrayLen) {
  let total = 0;
  for (let char of key.toLowerCase()) {
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}

console.log(simpleHash('Leia', 7));
