import SetValues from './set-values';

export default abstract class SetSelector<V>
  extends SetValues<V>
  implements ISetValues<V>
{
  doAndNext (): IteratorResult<V>  {
    do {
      const {value, done} = this.iterator.next();

      if (done || this.isValid(value)) {
        return {value, done};
      }
    } while (true);
  }
}
