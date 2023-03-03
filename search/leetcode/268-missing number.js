const missingNumber = (nums) => {
  let sum = 0;
  for (let i = 0; i <= nums.length; i++) {
    sum = sum + i;
  }

  let sum2 = 0;
  for (let i = 0; i < nums.length; i++) {
    sum2 = sum2 + nums[i];
  }

  return sum - sum2;
}

const numbers = [4, 5, 1, 2, 0, 6]; // range [0, 6] distinct length 6

console.log(missingNumber(numbers));