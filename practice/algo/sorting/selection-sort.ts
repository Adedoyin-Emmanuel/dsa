const selectionSortArray = (arr: number[]) => {
  /**
   *
   * We have 2 things to do here
   *
   * 1. Check the lowest item in the array
   * 2. Swap the item to the respective index
   */

  
  for (let i = 0; i < arr.length - 1; i++) {
    var lowestItemIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowestItemIndex]) {
        lowestItemIndex = j;
      }
    }
    var temp = arr[i];
    arr[i] = arr[lowestItemIndex];
    arr[lowestItemIndex] = temp;
  }

  return arr;
};

var result = selectionSortArray([7, 2, 1, 6, 4]);

console.log(result);
