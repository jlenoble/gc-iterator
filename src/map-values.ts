export default abstract class MapValues<K, V> implements IMapValues<K, V> {
  protected readonly iterator: Iterator<[K, V]>;

  constructor(protected readonly collection: Map<K, V>) {
    this.iterator = collection.entries();
  }

  next(): IteratorResult<V> {
    const { value, done } = this.iterator.next();

    if (done) {
      // eslint-disable-next-line @typescript-eslint/no-object-literal-type-assertion
      return { done } as IteratorResult<V>;
    } else if (this.isValid(value)) {
      return { value: value[1], done };
    }

    return this.doAndNext(value);
  }

  [Symbol.iterator](): IterableIterator<V> {
    return new (this.constructor as any)(this.collection);
  }

  abstract isValid(value: [K, V]): boolean;
  abstract doAndNext(value: [K, V]): IteratorResult<V>;
}
