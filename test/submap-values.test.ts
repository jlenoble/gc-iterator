import { expect } from "chai";
import { SubmapValues as Iterator } from "../src/gc-iterator";

describe("Testing SubmapValues", function() {
  it(`Removing an element from reference`, function() {
    const a: ReadonlyArray<[string, number]> = [
      ["a", 0],
      ["b", 1],
      ["c", 4],
      ["d", 5],
      ["e", 8]
    ];
    const b: ReadonlyArray<[string, number]> = [["a", 0], ["c", 4], ["e", 8]];
    const reference = new Map(a);
    const collection = new Map(b);
    const i = new Iterator<string, number>(collection, reference);
    const c: ReadonlyArray<[string, number]> = [
      ["a", 0],
      ["b", 1],
      ["d", 5],
      ["e", 8]
    ];
    const d: ReadonlyArray<[string, number]> = [["a", 0], ["e", 8]];

    expect(Array.from(reference)).to.eql(a);
    expect(Array.from(collection)).to.eql(b);
    expect(Array.from(i)).to.eql(Array.from(new Map(b).values()));

    reference.delete("c");

    expect(Array.from(collection)).to.eql(b);
    expect(Array.from(reference)).to.eql(c);
    expect(Array.from(i)).to.eql(Array.from(new Map(d).values()));
    expect(Array.from(collection)).to.eql(d);
    expect(Array.from(reference)).to.eql(c);
  });
});
