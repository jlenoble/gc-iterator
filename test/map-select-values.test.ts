import { expect } from "chai";
import { MapSelectValues as Iterator } from "../src/gc-iterator";

describe("Testing MapSelectValues", (): void => {
  it(`Map of numbers`, (): void => {
    class MyIterator extends Iterator<string, number> {
      isValid(): boolean {
        return true;
      }
    }

    const a: ReadonlyArray<[string, number]> = [
      ["a", 0],
      ["b", 1],
      ["c", 4],
      ["d", 5],
      ["e", 8]
    ];
    const s = new Map(a);
    const i = new MyIterator(s);

    expect(Array.from(s)).to.eql(a);
    expect(Array.from(i)).to.eql(Array.from(new Map(a).values()));
    expect(Array.from(s)).to.eql(a);
  });

  it(`Map of even numbers`, (): void => {
    class MyIterator extends Iterator<string, number> {
      isValid([, value]: [string, number]): boolean {
        return !(value % 2);
      }
    }

    const a: ReadonlyArray<[string, number]> = [
      ["a", 0],
      ["b", 1],
      ["c", 4],
      ["d", 5],
      ["e", 8]
    ];
    const s = new Map(a);
    const i = new MyIterator(s);
    const b: ReadonlyArray<[string, number]> = [["a", 0], ["c", 4], ["e", 8]];

    expect(Array.from(s)).to.eql(a);
    expect(Array.from(i)).to.eql(Array.from(new Map(b).values()));
    expect(Array.from(s)).to.eql(a);
  });

  it(`Map of strings`, (): void => {
    class MyIterator extends Iterator<string, string> {
      isValid(): boolean {
        return true;
      }
    }

    const a: ReadonlyArray<[string, string]> = [
      ["a", "a"],
      ["b", "ab"],
      ["c", "ba"],
      ["d", "aa"],
      ["e", "aba"],
      ["f", "baa"]
    ];
    const s = new Map(a);
    const i = new MyIterator(s);

    expect(Array.from(s)).to.eql(a);
    expect(Array.from(i)).to.eql(Array.from(new Map(a).values()));
    expect(Array.from(s)).to.eql(a);
  });

  it(`Map of matching strings`, (): void => {
    class MyIterator extends Iterator<string, string> {
      isValid([, value]: [string, string]): boolean {
        return value.includes("ba");
      }
    }

    const a: ReadonlyArray<[string, string]> = [
      ["a", "a"],
      ["b", "ab"],
      ["c", "ba"],
      ["d", "aa"],
      ["e", "aba"],
      ["f", "baa"]
    ];
    const s = new Map(a);
    const i = new MyIterator(s);
    const b: ReadonlyArray<[string, string]> = [
      ["c", "ba"],
      ["e", "aba"],
      ["f", "baa"]
    ];

    expect(Array.from(s)).to.eql(a);
    expect(Array.from(i)).to.eql(Array.from(new Map(b).values()));
    expect(Array.from(s)).to.eql(a);
  });
});
