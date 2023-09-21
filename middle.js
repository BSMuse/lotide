
const middle = (array) => {
  if (array.length < 3) {
    return [];
  } else if (array.length % 2 === 0) {
    const middleIndex1 = array.length / 2 - 1;
    const middleIndex2 = array.length / 2;
    return array.slice(middleIndex1, middleIndex2 + 1);
  } else if (array.length % 2 === 1) {
    const middleIndex = Math.floor(array.length / 2);
    return array.slice(middleIndex, middleIndex + 1);
  }
}

console.log(middle([1,2,3]))