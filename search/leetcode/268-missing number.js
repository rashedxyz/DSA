/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let sum = 0;
  for (let i = 0; i <= nums.length; i++) {
    sum = sum + i;
  }

  let sum2 = 0;
  for (let i = 0; i < nums.length; i++) {
    sum2 = sum2 + nums[i];
  }

  return sum - sum2;
};
