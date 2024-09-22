/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// sort the array in ascending order
// return list of target indexes

var targetIndices = function (nums, target) {
  const sortedNums = nums.sort((a, b) => a - b);

  let result = [];

  let start = 0;
  let end = sortedNums.length - 1;
  
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (target === sortedNums[mid]) {
      let leftMost = mid;
      let rightMost = mid;
      while(sortedNums[leftMost - 1] === target && leftMost > 0){
        leftMost--;
      }
      while(sortedNums[rightMost + 1] === target && rightMost < sortedNums.length - 1){
        rightMost++;
      }
      result.push(...Array.from({length: rightMost - leftMost + 1}, (_, i) => leftMost + i));
      break;
    }

    if (target < sortedNums[mid]) {
      end = mid - 1;
    }

    if (target > sortedNums[mid]) {
      start = mid + 1;
    }
  }
  return result;
};

console.log(targetIndices([48,90,9,21,31,35,19,69,29,52,100,54,21,86,6,45,42,5,62,77,15,38], 6));
