export default abstract class MapEntries<K, V> implements IMapEntries<K, V> {
  protected readonly iterator: Iterator<[K, V]>;

  public constructor(protected readonly collection: Map<K, V>) {
    this.iterator = collection.entries();
  }

  public next(): IteratorResult<[K, V]> {
    const { value, done } = this.iterator.next();

    if (done || this.isValid(value)) {
      return { value, done };
    }

    return this.doAndNext(value);
  }

  public [Symbol.iterator](): IterableIterator<[K, V]> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return new (this.constructor as any)(this.collection);
  }

  abstract isValid(value: [K, V]): boolean;
  abstract doAndNext(value: [K, V]): IteratorResult<[K, V]>;
}
