import SetShrinker from "./set-shrink";

export default class Subset<V> extends SetShrinker<V>
  implements GCIterator.SetValues<V> {
  protected readonly reference: Set<V>;

  public constructor(collection: Set<V>, reference: Set<V>) {
    super(collection);
    this.reference = reference;
  }

  public [Symbol.iterator](): IterableIterator<V> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return new (this.constructor as any)(this.collection, this.reference);
  }

  public isValid(value: V): boolean {
    return this.reference.has(value);
  }
}
