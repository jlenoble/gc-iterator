export default abstract class MapKeys<K, V> implements IMapKeys<K, V> {
  protected readonly iterator: Iterator<[K, V]>;

  constructor(protected readonly collection: Map<K, V>) {
    this.iterator = collection.entries();
  }

  next(): IteratorResult<K> {
    const { value, done } = this.iterator.next();

    if (done) {
      return { done } as IteratorResult<K>;
    } else if (this.isValid(value)) {
      return { value: value[0], done };
    }

    return this.doAndNext(value);
  }

  [Symbol.iterator](): IterableIterator<K> {
    return new (this.constructor as any)(this.collection);
  }

  abstract isValid(value: [K, V]): boolean;
  abstract doAndNext(value: [K, V]): IteratorResult<K>;
}
