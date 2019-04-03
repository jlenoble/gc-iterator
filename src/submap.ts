import MapEntryShrinker from "./map-shrink";

export default class Submap<K, V> extends MapEntryShrinker<K, V>
  implements IMapEntries<K, V> {
  public constructor(
    collection: Map<K, V>,
    protected readonly reference: Map<K, V>
  ) {
    super(collection);
  }

  public [Symbol.iterator](): IterableIterator<[K, V]> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return new (this.constructor as any)(this.collection, this.reference);
  }

  public isValid([key]: [K, V]): boolean {
    return this.reference.has(key);
  }
}
