import SetValues from './set-values';

export default abstract class SetShrinker<V>
  extends SetValues<V>
  implements ISetSelector<V>
{
  doAndNext (value: V): IteratorResult<V>  {
    this.collection.delete(value);

    do {
      const {value, done} = this.iterator.next();

      if (done || this.isValid(value)) {
        return {value, done};
      }

      this.collection.delete(value);
    } while (true);
  }
}
