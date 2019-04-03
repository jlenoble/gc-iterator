import MapValueShrinker from "./map-shrink-values";

export default class SubmapValues<K, V> extends MapValueShrinker<K, V>
  implements IMapValues<K, V> {
  protected readonly reference: Map<K, V>;

  public constructor(collection: Map<K, V>, reference: Map<K, V>) {
    super(collection);
    this.reference = reference;
  }

  public [Symbol.iterator](): IterableIterator<V> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return new (this.constructor as any)(this.collection, this.reference);
  }

  public isValid([key]: [K, V]): boolean {
    return this.reference.has(key);
  }
}
