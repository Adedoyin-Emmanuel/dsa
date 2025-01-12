const bubbleSortArray = (arr: number[]) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        var largerElement = arr[j + 1];
        var lowerElement = arr[j];

        arr[j + 1] = lowerElement;
        arr[j] = largerElement;
      }
    }
  }

  return arr;
};

console.log(bubbleSortArray([4, 3, 1, 2])); // [1, 2, 3, 4]
console.log(bubbleSortArray([5, 1, 4, 2, 8])); // [1, 2, 4, 5, 8]
console.log(bubbleSortArray([1, 2, 3, 4])); // [1, 2, 3, 4] (already sorted)
console.log(bubbleSortArray([4, 3, 2, 1])); // [1, 2, 3, 4] (reverse order)
console.log(bubbleSortArray([5, 5, 3, 1, 2])); // [1, 2, 3, 5, 5] (duplicate values)

