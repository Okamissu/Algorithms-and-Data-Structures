function simpleHash(key, arrayLen) {
  let total = 0;
  for (let char of key.toLowerCase()) {
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}

console.log(simpleHash('Leia', 7));

function refinedHash(key, arrayLen) {
  let total = 0;
  const WEIRD_PRIME = 31;

  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i].toLowerCase();
    let value = char.charCodeAt(0) - 96;

    total = (total * WEIRD_PRIME + value) % arrayLen;
  }

  return total;
}
