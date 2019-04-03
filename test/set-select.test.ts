import { expect } from "chai";
import { SetSelect as Iterator } from "../src/gc-iterator";

describe("Testing SetSelect", (): void => {
  it(`Set of numbers`, (): void => {
    class MyIterator extends Iterator<number> {
      isValid(): boolean {
        return true;
      }
    }

    const a = [0, 1, 4, 5, 8];
    const s = new Set(a);
    const i = new MyIterator(s);

    expect(Array.from(s)).to.eql(a);
    expect(Array.from(i)).to.eql(a);
    expect(Array.from(s)).to.eql(a);
  });

  it(`Set of even numbers`, (): void => {
    class MyIterator extends Iterator<number> {
      isValid(value: number): boolean {
        return !(value % 2);
      }
    }

    const a = [0, 1, 4, 5, 8];
    const s = new Set(a);
    const i = new MyIterator(s);
    const b = [0, 4, 8];

    expect(Array.from(s)).to.eql(a);
    expect(Array.from(i)).to.eql(b);
    expect(Array.from(s)).to.eql(a);
  });

  it(`Set of strings`, (): void => {
    class MyIterator extends Iterator<string> {
      isValid(): boolean {
        return true;
      }
    }

    const a = ["a", "ab", "ba", "aa", "aba", "baa"];
    const s = new Set(a);
    const i = new MyIterator(s);

    expect(Array.from(s)).to.eql(a);
    expect(Array.from(i)).to.eql(a);
    expect(Array.from(s)).to.eql(a);
  });

  it(`Set of matching strings`, (): void => {
    class MyIterator extends Iterator<string> {
      isValid(value: string): boolean {
        return value.includes("ba");
      }
    }

    const a = ["a", "ab", "ba", "aa", "aba", "baa"];
    const s = new Set(a);
    const i = new MyIterator(s);
    const b = ["ba", "aba", "baa"];

    expect(Array.from(s)).to.eql(a);
    expect(Array.from(i)).to.eql(b);
    expect(Array.from(s)).to.eql(a);
  });
});
