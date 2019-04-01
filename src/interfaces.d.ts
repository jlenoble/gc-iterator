interface ISetValues<V> extends IterableIterator<V> {
  isValid (value: V): boolean;
  doAndNext (value: V): IteratorResult<V>;
}

interface ISetSelector<V> extends ISetValues<V> {}
interface ISetShrinker<V> extends ISetValues<V> {}
