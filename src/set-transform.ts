export default abstract class SetTransform<V, T>
  implements ISetTransform<V, T>
{
  protected readonly iterator: Iterator<V>;

  constructor (protected readonly collection: Set<V>) {
    this.iterator = collection.values();
  }

  next (): IteratorResult<T> {
    const {value, done} = this.iterator.next();

    if (done || this.isValid(value)) {
      return {value: this.transform(value), done};
    }

    return this.doAndNext(value);
  }

  [Symbol.iterator] (): IterableIterator<T> {
    return new (this.constructor as any)(this.collection);
  }

  abstract transform (value: V): T;
  abstract isValid (value: V): boolean;
  abstract doAndNext (value: V): IteratorResult<T>;
}
