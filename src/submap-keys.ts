import MapKeyShrinker from './map-key-shrinker';

export default class SubmapKeys<K, V>
  extends MapKeyShrinker<K, V>
  implements IMapKeys<K, V>
{
  constructor (collection: Map<K, V>, protected readonly reference:Map<K, V>) {
    super(collection);
  }

  [Symbol.iterator] (): IterableIterator<K> {
    return new (this.constructor as any)(this.collection, this.reference);
  }

  isValid ([key]: [K, V]): boolean {
    return this.reference.has(key);
  }
}
