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
    const bucket = this.keyMap[index];

    if (!bucket) return undefined;
    if (bucket.length === 1 && bucket[0][0] === key) return bucket[0][1];

    return bucket.find((item) => item[0] === key)?.[1];
  }

  delete(key: K): boolean {
    const index = this.#hash(key);
    const bucket = this.keyMap[index];

    if (!bucket) return false;

    const itemIndex = bucket.findIndex(([k]) => k === key);
    if (itemIndex === -1) return false;

    bucket.splice(itemIndex, 1);
    if (bucket.length === 0) this.keyMap[index] = undefined;
    return true;
  }

  has(key: K): boolean {
    return this.get(key) !== undefined;
  }

  display(): void {
    this.keyMap.forEach((bucket, index) => {
      if (bucket && bucket.length > 0) {
        const formattedBucket = bucket
          .map(([key, value]) => `[ ${key}: ${JSON.stringify(value)} ]`)
          .join(', ');
        console.log(`Bucket ${index}: ${formattedBucket}`);
      }
    });
  }
}

// ==========================================
// Examples & Usage Demonstration
// ==========================================

// 1. Initialize a small table (size 7) to make collisions easier to see
const ht = new HashTable(7);

console.log('--- 1. Setting Initial Keys ---');
ht.set('cat', 'meow');
ht.set('dog', 'woof');
ht.set('pizza', 'delicious');
ht.set('hello world', 'goodbye');

// Display internal storage
ht.display();

console.log('\n--- 2. Retrieving Values (get) ---');
console.log("get('dog'):", ht.get('dog')); // "woof"
console.log("get('cat'):", ht.get('cat')); // "meow"
console.log("get('missing'):", ht.get('missing')); // undefined

console.log('\n--- 3. Checking Existence (has) ---');
console.log("has('pizza'):", ht.has('pizza')); // true
console.log("has('burger'):", ht.has('burger')); // false

console.log('\n--- 4. Deleting Entries (delete) ---');
console.log("delete('dog'):", ht.delete('dog')); // true
console.log("delete('missing'):", ht.delete('missing')); // false
console.log("has('dog') after deletion:", ht.has('dog')); // false

console.log('\n--- 5. Hash Table State After Deletion ---');
ht.display();
