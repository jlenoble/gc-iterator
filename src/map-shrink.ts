import MapEntries from './map-entries';

export default abstract class MapShrink<K, V>
  extends MapEntries<K, V>
  implements IMapEntries<K, V>
{
  doAndNext ([key]: [K, V]): IteratorResult<[K, V]>  {
    this.collection.delete(key);

    do {
      const {value, done} = this.iterator.next();

      if (done || this.isValid(value)) {
        return {value, done};
      }

      this.collection.delete(value[0]);
    } while (true);
  }
}
