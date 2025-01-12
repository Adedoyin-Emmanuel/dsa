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

var result = bubbleSortArray([4, 3, 2, 1]);

console.log(result);
