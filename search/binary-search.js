// binary search in an ascending array
const arr = [12, 14, 45, 67, 78];

const target = 14;

function binarySearchAsc(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return `target found at index ${mid}`;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return "target not found";
}

console.log(binarySearchAsc(arr, target));



// binary search in a descending array
const arr2 = [500, 400, 300, 200, 100, 50, 20, 10];

const target2 = 100;

function binarySearchDesc(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return `target found at index ${mid}`;
    } else if (arr[mid] < target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return "target not found";
}

console.log(binarySearchDesc(arr2, target2));



// order agnostic binary search
const arr3 = [40, 50, 70, 90, 100, 200, 300, 400, 500, 600];

const target3 = 50;

function binarySearchOrderAgnostic(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let mid;

  const isAscending = arr[0] < arr[arr.length - 1];

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return `target found at index ${mid}`;
    } else if (arr[mid] < target) {
      if (isAscending) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    } else {
      if (isAscending) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }
  return "target not found";
}

console.log(binarySearchOrderAgnostic(arr3, target3));
