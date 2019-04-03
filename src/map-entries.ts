export default abstract class MapEntries<K, V> implements IMapEntries<K, V> {
  protected readonly iterator: Iterator<[K, V]>;

  constructor(protected readonly collection: Map<K, V>) {
    this.iterator = collection.entries();
  }

  next(): IteratorResult<[K, V]> {
    const { value, done } = this.iterator.next();

    if (done || this.isValid(value)) {
      return { value, done };
    }

    return this.doAndNext(value);
  }

  [Symbol.iterator](): IterableIterator<[K, V]> {
    return new (this.constructor as any)(this.collection);
  }

  abstract isValid(value: [K, V]): boolean;
  abstract doAndNext(value: [K, V]): IteratorResult<[K, V]>;
}
