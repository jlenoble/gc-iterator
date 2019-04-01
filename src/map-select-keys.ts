import MapKeys from './map-keys';

export default abstract class MapSelectKeys<K, V>
  extends MapKeys<K, V>
  implements IMapKeys<K, V>
{
  doAndNext (): IteratorResult<K>  {
    do {
      const {value, done} = this.iterator.next();

      if (done) {
        return {done} as IteratorResult<K>;
      } else if (this.isValid(value)) {
        return {value: value[0], done};
      }
    } while (true);
  }
}
