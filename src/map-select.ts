import MapEntries from "./map-entries";

export default abstract class MapSelect<K, V> extends MapEntries<K, V>
  implements GCIterator.MapEntries<K, V> {
  public doAndNext(): IteratorResult<[K, V]> {
    do {
      const { value, done } = this.iterator.next();

      if (done || this.isValid(value)) {
        return { value, done };
      }
    } while (true);
  }
}
