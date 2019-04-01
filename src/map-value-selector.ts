import MapValues from './map-values';

export default abstract class MapValueSelector<K, V>
  extends MapValues<K, V>
  implements IMapValueSelector<K, V>
{
  doAndNext (): IteratorResult<V>  {
    do {
      const {value, done} = this.iterator.next();

      if (done) {
        return {done} as IteratorResult<V>;
      } else if (this.isValid(value)) {
        return {value: value[1], done};
      }
    } while (true);
  }
}
