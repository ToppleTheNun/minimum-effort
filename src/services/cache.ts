import NodeCache, { Key } from "node-cache";

class Cache {
  cache: NodeCache;

  constructor(ttlSeconds: number) {
    this.cache = new NodeCache({
      stdTTL: ttlSeconds,
      checkperiod: ttlSeconds * 0.2,
      useClones: false,
    });
  }

  get<T>(key: Key, storeFunction: () => Promise<T>): Promise<T | undefined> {
    const value = this.cache.get<T>(key);
    if (value) {
      return Promise.resolve(value);
    }

    return storeFunction().then((result) => {
      this.cache.set(key, result);
      return result;
    });
  }

  del(keys: Key | Key[]): void {
    this.cache.del(keys);
  }

  delStartWith(startStr = ""): void {
    if (!startStr) {
      return;
    }

    const keys = this.cache.keys();
    keys.forEach((key) => {
      if (key.indexOf(startStr) === 0) {
        this.del(key);
      }
    });
  }

  flush(): void {
    this.cache.flushAll();
  }
}

export default Cache;
