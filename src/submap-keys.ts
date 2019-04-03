import MapKeyShrinker from "./map-shrink-keys";

export default class SubmapKeys<K, V> extends MapKeyShrinker<K, V>
  implements IMapKeys<K, V> {
  public constructor(
    collection: Map<K, V>,
    protected readonly reference: Map<K, V>
  ) {
    super(collection);
  }

  public [Symbol.iterator](): IterableIterator<K> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return new (this.constructor as any)(this.collection, this.reference);
  }

  public isValid([key]: [K, V]): boolean {
    return this.reference.has(key);
  }
}
