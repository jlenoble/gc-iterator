interface ISetValues<V> extends IterableIterator<V> {
  isValid (value: V): boolean;
  doAndNext (value: V): IteratorResult<V>;
}

interface IMapValues<K, V> extends IterableIterator<V> {
  isValid (value: [K, V]): boolean;
  doAndNext (value: [K, V]): IteratorResult<V>;
}
