import MapKeys from "./map-keys";

export default abstract class MapSelectKeys<K, V> extends MapKeys<K, V>
  implements GCIterator.MapKeys<K, V> {
  public doAndNext(): IteratorResult<K> {
    do {
      const { value, done } = this.iterator.next();

      if (done) {
        // eslint-disable-next-line @typescript-eslint/no-object-literal-type-assertion
        return { done } as IteratorResult<K>;
      } else if (this.isValid(value)) {
        return { value: value[0], done };
      }
    } while (true);
  }
}
