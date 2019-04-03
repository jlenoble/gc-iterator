import SetTransform from "./set-transform";

export default abstract class SetShrinkTransform<V, T>
  extends SetTransform<V, T>
  implements GCIterator.SetTransform<V, T> {
  public doAndNext(value: V): IteratorResult<T> {
    this.collection.delete(value);

    do {
      const { value, done } = this.iterator.next();

      if (done || this.isValid(value)) {
        return { value: this.transform(value), done };
      }

      this.collection.delete(value);
    } while (true);
  }
}
