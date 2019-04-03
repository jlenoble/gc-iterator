export default abstract class MapKeys<K, V> implements IMapKeys<K, V> {
  protected readonly collection: Map<K, V>;
  protected readonly iterator: Iterator<[K, V]>;

  public constructor(collection: Map<K, V>) {
    this.collection = collection;
    this.iterator = collection.entries();
  }

  public next(): IteratorResult<K> {
    const { value, done } = this.iterator.next();

    if (done) {
      // eslint-disable-next-line @typescript-eslint/no-object-literal-type-assertion
      return { done } as IteratorResult<K>;
    } else if (this.isValid(value)) {
      return { value: value[0], done };
    }

    return this.doAndNext(value);
  }

  public [Symbol.iterator](): IterableIterator<K> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return new (this.constructor as any)(this.collection);
  }

  abstract isValid(value: [K, V]): boolean;
  abstract doAndNext(value: [K, V]): IteratorResult<K>;
}
