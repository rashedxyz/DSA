/**
 * Linear search algorithm example
 * by Rashed Mahmud
 */


function linearSearch(dataset, target) {
  // traverse through the dataset
  for (let i = 0; i < dataset.length; i++) {
    // if target is found
    if (target === dataset[i]) {
      // return the index of the target
      return i;
    }
  }

  // return an indication that the target is not found
  return -1;

}

// given dataset
const numbers = [4, 6, 8, 9, 7, 2, 1];

// target to find
const targetToFind = 9;

linearSearch(numbers, targetToFind);


