/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
  const len = arr.length
  for(let i = len-1; i >= 0; --i) {
     if(arr[i] === 0) {
      arr.splice(i, 0, 0)
    }
  }
  return arr.slice(0, len)
};

const r = duplicateZeros([1,0,2,3,0,4,5,0])
console.log(r)