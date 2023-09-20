const without = (array, itemsToRemove) => {
  const answer = array.filter((item) => {
    return !itemsToRemove.includes(item)
  })
  return answer
}

without([1, 2, 3], [1]) 
