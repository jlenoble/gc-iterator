import Muter, {captured} from 'muter';
import {expect} from 'chai';
import GcIterator from '../src/gc-iterator';

describe('Testing GcIterator', function () {
  const muter = Muter(console, 'log'); // eslint-disable-line new-cap

  it(`Class GcIterator says 'Hello world!'`, captured(muter, function () {
    new GcIterator();
    expect(muter.getLogs()).to.equal('Hello world!\n');
  }));
});
