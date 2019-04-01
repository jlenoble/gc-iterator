import SetTransform from './set-transform';

export default abstract class SetSelectTransform<V, T>
  extends SetTransform<V, T>
  implements ISetTransform<V, T>
{
  doAndNext (): IteratorResult<T>  {
    do {
      const {value, done} = this.iterator.next();

      if (done || this.isValid(value)) {
        return {value: this.transform(value), done};
      }
    } while (true);
  }
}
