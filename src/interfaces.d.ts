interface ISetValues<V> extends IterableIterator<V> {
  isValid (value: V): boolean;
  doAndNext (value: V): IteratorResult<V>;
}

interface ISetSelector<V> extends ISetValues<V> {}
interface ISetShrinker<V> extends ISetValues<V> {}

interface IMapValues<K, V> extends IterableIterator<V> {
  isValid (value: [K, V]): boolean;
  doAndNext (value: [K, V]): IteratorResult<V>;
}

interface IMapValueSelector<K, V> extends IMapValues<K, V> {}
