export function pointsForWord(word) {
  if (typeof word !== "string") return 0;

  let points = 0;
  for (const char of word.toLowerCase()) {
    if (/[a-z]/.test(char)) {
      points += /[aeiou]/.test(char) ? 1 : 2;
    }
  }
  return points;
}

export function isPalindrome(word) {
  // Input validation
  if (typeof word !== 'string') {
      throw new Error('Input must be a string');
  }

  if (word.length === 0) {
      return false;
  }

  if (!/^[A-Za-z]+$/.test(word)) {
      throw new Error('Input must contain only alphabetic characters');
  }

  // Convert to lowercase and check if it reads the same forwards and backwards
  const lowerCaseWord = word.toLowerCase();
  return lowerCaseWord === lowerCaseWord.split('').reverse().join('');
}