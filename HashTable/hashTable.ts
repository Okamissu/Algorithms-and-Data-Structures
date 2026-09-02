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

  set(key: K, value: V) {
    const index = this.#hash(key);

    if (!this.keyMap[index]) this.keyMap[index] = [];

    this.keyMap[index].push([key, value]);

    return this;
  }

  get(key: K) {
    const index = this.#hash(key);
    const foundItem = this.keyMap[index];

    if (!foundItem) return undefined;
    if (foundItem.length === 1) return foundItem[0][1];

    return foundItem.find((item) => item[0] === key)?.[1];
  }
}

const ht = new HashTable();

ht.set('hello world', 'goodbye');
ht.set('dog', 'goodbye');
ht.set('cat', 'goodbye');
ht.set('pizza', 'goodbye');

console.log(JSON.stringify(ht));

console.log(ht.get('dog'));
