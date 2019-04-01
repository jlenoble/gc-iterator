import {expect} from 'chai';
import {SubsetValues as Iterator} from '../src/gc-iterator';

describe('Testing SubsetValues', function () {
  it(`Removing an element from reference`, function () {
    const a = [0, 1, 4, 5, 8];
    const b = [0, 4, 8];
    const reference = new Set(a);
    const collection = new Set(b);
    const i = new Iterator<number>(collection, reference);
    const c = [0, 1, 5, 8];
    const d = [0, 8];

    expect(Array.from(reference)).to.eql(a);
    expect(Array.from(collection)).to.eql(b);
    expect(Array.from(i)).to.eql(b);

    reference.delete(4)

    expect(Array.from(collection)).to.eql(b);
    expect(Array.from(reference)).to.eql(c);
    expect(Array.from(i)).to.eql(d);
    expect(Array.from(collection)).to.eql(d);
    expect(Array.from(reference)).to.eql(c);
  });
});
