import { pointsForWord, isPalindrome } from '../utils';

describe('pointsForWord', () => {
    it('calculates the total points for a word (1 point per vowel, 2 per consonant)', () => {
        const word = "test";
        expect(pointsForWord(word)).toBe(7);
    });

    it('returns 0 for non-string input', () => {
        expect(pointsForWord(123)).toBe(0);
    });
});

describe('isPalindrome', () => {
    it('returns true for actual palindromes', () => {
        expect(isPalindrome("racecar")).toBe(true);
    });

    it('returns false for non-palindromes', () => {
        expect(isPalindrome("car")).toBe(false);
    });

    it('is case-insensitive', () => {
        expect(isPalindrome("RaceCar")).toBe(true);
    });

    it('returns false for empty string', () => {
        expect(isPalindrome("")).toBe(false);
    });

    it('throws error for non-alphabetic characters', () => {
        expect(() => isPalindrome("race car")).toThrow();
        expect(() => isPalindrome("racecar1")).toThrow();
    });

    it('throws error for non-string inputs', () => {
        expect(() => isPalindrome(123)).toThrow();
        expect(() => isPalindrome(null)).toThrow();
    });
});