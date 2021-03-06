import SetValues from "./set-values";

export default abstract class SetSelect<V> extends SetValues<V>
  implements GCIterator.SetValues<V> {
  public doAndNext(): IteratorResult<V> {
    do {
      const { value, done } = this.iterator.next();

      if (done || this.isValid(value)) {
        return { value, done };
      }
    } while (true);
  }
}
