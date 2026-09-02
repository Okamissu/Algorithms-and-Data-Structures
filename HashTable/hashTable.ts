type KeyValuePair<K, V> = [K, V];
type Bucket<K, V> = KeyValuePair<K, V>[];

class HashTable<K extends string = string, V = any> {
  private keyMap: Array<Bucket<K, V> | undefined>;
  constructor(size: number = 53) {
    this.keyMap = new Array(size);
  }

  #hash(key: K): number {
    let total = 0;
    const WEIRD_PRIME = 31;
    const lowerKey = key.toLowerCase();

    for (let i = 0; i < Math.min(lowerKey.length, 100); i++) {
      const char = lowerKey[i];
      const value = char.charCodeAt(0) - 96;
      total = Math.abs((total * WEIRD_PRIME + value) % this.keyMap.length);
    }

    return total;
  }
}

// function simpleHash(key, arrayLen) {
//   let total = 0;
//   for (let char of key.toLowerCase()) {
//     let value = char.charCodeAt(0) - 96;
//     total = (total + value) % arrayLen;
//   }
//   return total;
// }

// console.log(simpleHash('Leia', 7));

// function refinedHash(key, arrayLen) {
//   let total = 0;
//   const WEIRD_PRIME = 31;

//   for (let i = 0; i < Math.min(key.length, 100); i++) {
//     let char = key[i].toLowerCase();
//     let value = char.charCodeAt(0) - 96;

//     total = (total * WEIRD_PRIME + value) % arrayLen;
//   }

//   return total;
// }
