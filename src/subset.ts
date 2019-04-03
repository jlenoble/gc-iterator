import SetShrinker from "./set-shrink";

export default class Subset<V> extends SetShrinker<V> implements ISetValues<V> {
  constructor(collection: Set<V>, protected readonly reference: Set<V>) {
    super(collection);
  }

  [Symbol.iterator](): IterableIterator<V> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return new (this.constructor as any)(this.collection, this.reference);
  }

  isValid(value: V): boolean {
    return this.reference.has(value);
  }
}
