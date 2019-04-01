import MapValues from './map-values';

export default abstract class MapValueShrinker<K, V>
  extends MapValues<K, V>
  implements IMapValues<K, V>
{
  doAndNext ([key]: [K, V]): IteratorResult<V>  {
    this.collection.delete(key);

    do {
      const {value, done} = this.iterator.next();

      if (done) {
        return {done} as IteratorResult<V>;
      } else if (this.isValid(value)) {
        return {value: value[1], done};
      }

      this.collection.delete(value[0]);
    } while (true);
  }
}
