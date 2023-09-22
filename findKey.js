const findKey = (obj, func) => {
  let answer = null;
  for (let key in obj) {
    if (func(obj[key])) {
      answer = key
      break;
    }
  };
  return answer
} ;

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)) // => "noma" 
