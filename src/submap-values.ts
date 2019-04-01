import MapValueShrinker from './map-shrink-values';

export default class SubmapValues<K, V>
  extends MapValueShrinker<K, V>
  implements IMapValues<K, V>
{
  constructor (collection: Map<K, V>, protected readonly reference:Map<K, V>) {
    super(collection);
  }

  [Symbol.iterator] (): IterableIterator<V> {
    return new (this.constructor as any)(this.collection, this.reference);
  }

  isValid ([key]: [K, V]): boolean {
    return this.reference.has(key);
  }
}
