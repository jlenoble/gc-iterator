import MapEntryShrinker from "./map-shrink";

export default class Submap<K, V> extends MapEntryShrinker<K, V>
  implements IMapEntries<K, V> {
  constructor(collection: Map<K, V>, protected readonly reference: Map<K, V>) {
    super(collection);
  }

  [Symbol.iterator](): IterableIterator<[K, V]> {
    return new (this.constructor as any)(this.collection, this.reference);
  }

  isValid([key]: [K, V]): boolean {
    return this.reference.has(key);
  }
}
