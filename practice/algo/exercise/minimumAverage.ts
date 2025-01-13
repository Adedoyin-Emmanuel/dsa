function minimumAverage(nums: number[]): number {
  var averages: number[] = [];
  var sortedNums = nums.sort((a, b) => a - b);

  while (sortedNums.length != 0) {
    var smallest = sortedNums[0];
    var largest = sortedNums[sortedNums.length - 1];

    var average = (largest + smallest) / 2;

    averages.push(average);

    sortedNums.splice(sortedNums.indexOf(smallest), 1);
    sortedNums.splice(sortedNums.indexOf(largest), 1);
  }

  var smallestAverage = Math.min(...averages);

  return smallestAverage;
}

console.log(minimumAverage([7, 8, 3, 4, 15, 13, 4, 1]));
