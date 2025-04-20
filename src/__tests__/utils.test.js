// Your tests here
import { pointsForWord } from "../utils";

describe("pointsForWord", () => {
  it("calculates the total points for a word (1 point per vowel, 2 per consonant)", () => {
    const word = "test";
    const points = pointsForWord(word);
    expect(points).toBe(7); // t(2) + e(1) + s(2) + t(2)
  });

  it("handles uppercase and lowercase input", () => {
    const word = "tEsT";
    const points = pointsForWord(word);
    expect(points).toBe(7);
  });

  it("returns 0 for an empty string", () => {
    const points = pointsForWord("");
    expect(points).toBe(0);
  });

  it("ignores non-alphabetic characters (bonus)", () => {
    const word = "t3s!t";
    const points = pointsForWord(word);
    expect(points).toBe(6); // t(2) + s(2) + t(2)
  });

  it("returns 0 for non-string input", () => {
    const points = pointsForWord(null);
    expect(points).toBe(0);
  });
});
