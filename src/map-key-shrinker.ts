import MapKeys from './map-keys';

export default abstract class MapKeyShrinker<K, V>
  extends MapKeys<K, V>
  implements IMapKeys<K, V>
{
  doAndNext ([key]: [K, V]): IteratorResult<K>  {
    this.collection.delete(key);

    do {
      const {value, done} = this.iterator.next();

      if (done) {
        return {done} as IteratorResult<K>;
      } else if (this.isValid(value)) {
        return {value: value[0], done};
      }

      this.collection.delete(value[0]);
    } while (true);
  }
}
