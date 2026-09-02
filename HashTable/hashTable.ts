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
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }

    return Math.abs(total % this.keyMap.length);
  }

  // set(key: K, value: V) {
  //   const index = this.#hash(key);

  //   if (!this.keyMap[index]) this.keyMap[index] = [];

  //   this.keyMap[index].push([key, value]);

  //   return this;
  // }
}

const ht = new HashTable();

// console.log(ht.set('hello world', 'goodbye'));
// console.log(ht.set('dog', 'goodbye'));
// console.log(ht.set('cat', 'goodbye'));
// console.log(ht.set('pizza', 'goodbye'));

console.log(JSON.stringify(ht));
