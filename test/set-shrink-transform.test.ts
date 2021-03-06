import { expect } from "chai";
import { SetShrinkTransform as Iterator } from "../src/gc-iterator";

describe("Testing SetShrinkTransform", (): void => {
  it(`Squaring numbers`, (): void => {
    class MyIterator extends Iterator<number, number> {
      public transform(value: number): number {
        return value * value;
      }

      public isValid(): boolean {
        return true;
      }
    }

    const a = [0, 1, 4, 5, 8];
    const s = new Set(a);
    const i = new MyIterator(s);
    const b = [0, 1, 16, 25, 64];

    expect(Array.from(s)).to.eql(a);
    expect(Array.from(i)).to.eql(b);
    expect(Array.from(s)).to.eql(a);
  });

  it(`Squaring even numbers`, (): void => {
    class MyIterator extends Iterator<number, number> {
      public transform(value: number): number {
        return value * value;
      }

      public isValid(value: number): boolean {
        return !(value % 2);
      }
    }

    const a = [0, 1, 4, 5, 8];
    const s = new Set(a);
    const i = new MyIterator(s);
    const b = [0, 16, 64];
    const c = [0, 4, 8];

    expect(Array.from(s)).to.eql(a);
    expect(Array.from(i)).to.eql(b);
    expect(Array.from(s)).to.eql(c);
  });

  it(`Concatenating strings`, (): void => {
    class MyIterator extends Iterator<string, string> {
      public transform(value: string): string {
        return value + value;
      }

      public isValid(): boolean {
        return true;
      }
    }

    const a = ["a", "ab", "ba", "aa", "aba", "baa"];
    const s = new Set(a);
    const i = new MyIterator(s);
    const b = ["aa", "abab", "baba", "aaaa", "abaaba", "baabaa"];

    expect(Array.from(s)).to.eql(a);
    expect(Array.from(i)).to.eql(b);
    expect(Array.from(s)).to.eql(a);
  });

  it(`Matching and concatenating strings`, (): void => {
    class MyIterator extends Iterator<string, string> {
      public transform(value: string): string {
        return value + value;
      }

      public isValid(value: string): boolean {
        return value.includes("ba");
      }
    }

    const a = ["a", "ab", "ba", "aa", "aba", "baa"];
    const s = new Set(a);
    const i = new MyIterator(s);
    const b = ["baba", "abaaba", "baabaa"];
    const c = ["ba", "aba", "baa"];

    expect(Array.from(s)).to.eql(a);
    expect(Array.from(i)).to.eql(b);
    expect(Array.from(s)).to.eql(c);
  });
});
