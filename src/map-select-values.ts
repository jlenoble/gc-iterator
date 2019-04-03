import MapValues from "./map-values";

export default abstract class MapSelectValues<K, V> extends MapValues<K, V>
  implements IMapValues<K, V> {
  public doAndNext(): IteratorResult<V> {
    do {
      const { value, done } = this.iterator.next();

      if (done) {
        // eslint-disable-next-line @typescript-eslint/no-object-literal-type-assertion
        return { done } as IteratorResult<V>;
      } else if (this.isValid(value)) {
        return { value: value[1], done };
      }
    } while (true);
  }
}
