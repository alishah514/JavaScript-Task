function manipulateArray(arr) {
  const uniqueSortedArray = [...new Set(arr)].sort((a, b) => a - b);
  return uniqueSortedArray.reduce((acc, curr) => acc + curr, 0);
}

module.exports = { manipulateArray };
