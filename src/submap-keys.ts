import MapKeyShrinker from "./map-shrink-keys";

export default class SubmapKeys<K, V> extends MapKeyShrinker<K, V>
  implements GCIterator.MapKeys<K, V> {
  protected readonly reference: Map<K, V>;

  public constructor(collection: Map<K, V>, reference: Map<K, V>) {
    super(collection);
    this.reference = reference;
  }

  public [Symbol.iterator](): IterableIterator<K> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return new (this.constructor as any)(this.collection, this.reference);
  }

  public isValid([key]: [K, V]): boolean {
    return this.reference.has(key);
  }
}
