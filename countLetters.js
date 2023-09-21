const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
      console.assert(actual === expected, `${actual} ! == ${expected}`) ;
  }
}; 

const countLetters = (string) => {
  const letters = string.split('').filter((letter) => letter !== ' ')
  const answer = {}
  letters.forEach((letter) => {
    answer[letter] ? answer[letter]++ : answer[letter] = 1
  })
  return answer
}

console.log(countLetters("lighthouse in the house"))