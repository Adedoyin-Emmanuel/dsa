const bubbleSortArray = (arr: number[]) => {

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      var largerElement = arr[i + 1];
      var lowerElement = arr[i];

      arr[i + 1] = lowerElement;
      arr[i] = largerElement;
    }
  }

  return arr;
};

var result = bubbleSortArray([2, 1, 6, 4]);

console.log(result);
