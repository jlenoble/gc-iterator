import MapValues from "./map-values";

export default abstract class MapShrinkValues<K, V> extends MapValues<K, V>
  implements IMapValues<K, V> {
  public doAndNext([key]: [K, V]): IteratorResult<V> {
    this.collection.delete(key);

    do {
      const { value, done } = this.iterator.next();

      if (done) {
        // eslint-disable-next-line @typescript-eslint/no-object-literal-type-assertion
        return { done } as IteratorResult<V>;
      } else if (this.isValid(value)) {
        return { value: value[1], done };
      }

      this.collection.delete(value[0]);
    } while (true);
  }
}
