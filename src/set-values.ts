export default abstract class SetValues<V> implements ISetValues<V> {
  protected readonly iterator: Iterator<V>;

  public constructor(protected readonly collection: Set<V>) {
    this.iterator = collection.values();
  }

  public next(): IteratorResult<V> {
    const { value, done } = this.iterator.next();

    if (done || this.isValid(value)) {
      return { value, done };
    }

    return this.doAndNext(value);
  }

  public [Symbol.iterator](): IterableIterator<V> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return new (this.constructor as any)(this.collection);
  }

  abstract isValid(value: V): boolean;
  abstract doAndNext(value: V): IteratorResult<V>;
}
