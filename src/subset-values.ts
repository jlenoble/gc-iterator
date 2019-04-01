import SetShrinker from './set-shrinker';

export default class SubsetValues<V>
  extends SetShrinker<V>
  implements ISetValues<V>
{
  constructor (collection: Set<V>, protected readonly reference: Set<V>) {
    super(collection);
  }

  [Symbol.iterator] (): IterableIterator<V> {
    return new (this.constructor as any)(this.collection, this.reference);
  }

  isValid (value: V): boolean {
    return this.reference.has(value);
  }
}
