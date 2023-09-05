var findNumbers = function(nums) {
  return nums.reduce((r, c) => {
    return r + (c % 2 === 0 ? 1 : 0)
  }, 0)
};

console.log(findNumbers([12,345,2,6,7896]))