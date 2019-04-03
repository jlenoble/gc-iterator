declare namespace GCIterator {
  interface SetValues<V> extends IterableIterator<V> {
    isValid(value: V): boolean;
    doAndNext(value: V): IteratorResult<V>;
  }

  interface SetTransform<V, T> extends IterableIterator<T> {
    transform(value: V): T;
    isValid(value: V): boolean;
    doAndNext(value: V): IteratorResult<T>;
  }

  interface MapEntries<K, V> extends IterableIterator<[K, V]> {
    isValid(value: [K, V]): boolean;
    doAndNext(value: [K, V]): IteratorResult<[K, V]>;
  }

  interface MapKeys<K, V> extends IterableIterator<K> {
    isValid(value: [K, V]): boolean;
    doAndNext(value: [K, V]): IteratorResult<K>;
  }

  interface MapValues<K, V> extends IterableIterator<V> {
    isValid(value: [K, V]): boolean;
    doAndNext(value: [K, V]): IteratorResult<V>;
  }
}
