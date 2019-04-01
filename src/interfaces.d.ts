interface ISetValues<V> extends IterableIterator<V> {
  isValid (value: V): boolean;
  doAndNext (value: V): IteratorResult<V>;
}

interface ISetTransform<V, T> extends IterableIterator<T> {
  transform (value: V): T;
  isValid (value: V): boolean;
  doAndNext (value: V): IteratorResult<T>;
}

interface IMapEntries<K, V> extends IterableIterator<[K, V]> {
  isValid (value: [K, V]): boolean;
  doAndNext (value: [K, V]): IteratorResult<[K, V]>;
}

interface IMapKeys<K, V> extends IterableIterator<K> {
  isValid (value: [K, V]): boolean;
  doAndNext (value: [K, V]): IteratorResult<K>;
}

interface IMapValues<K, V> extends IterableIterator<V> {
  isValid (value: [K, V]): boolean;
  doAndNext (value: [K, V]): IteratorResult<V>;
}
