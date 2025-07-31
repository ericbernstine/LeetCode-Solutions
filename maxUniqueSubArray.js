var maximumUniqueSubarray = function (nums) {
  let left = 0;
  let checkArr = [];
  let checkSum = 0; 
  let maxSum = 0; 

  for (let right = 0; right < nums.length; right++){
    while (checkArr.includes(nums[right])){
      //console.log(`subtracting ${nums[left]} from ${checkSum}`)
      checkSum -= nums[left]; 
      //console.log(`checkSum now set to - ${checkSum}`)
      //console.log(`Removing ${nums[left]} from [${checkArr}]`)
      checkArr.shift();
      left++;
    }
    //console.log(`Pushing ${nums[right]} into [${checkArr}]`)
    checkArr.push(nums[right])
    //console.log(`Adding ${nums[right]} to - ${checkSum}`)
    checkSum += nums[right];
    //console.log(`checkSum now updated to - ${checkSum}`)
    maxSum = Math.max(maxSum, checkSum); 
  }
  return maxSum;

};

//console.log(maximumUniqueSubarray([4, 2, 4, 5, 6]));
// output: 17. sub array = [2, 4, 5, 6]

//console.log(maximumUniqueSubarray([2, 2, 3, 4, 5]));
// output: 14. sub array = [2, 3, 4, 5]

//console.log(maximumUniqueSubarray([2, 2, 2, 2]));
// output: 2. sub array = [2]

//console.log(maximumUniqueSubarray([1, 2, 3, 2, 4, 5]));
// output: 14. sub array = [3, 2, 4, 5]

console.log(maximumUniqueSubarray([2, 3, 4, 5, 1, 2, 3]));
// output: 15. sub array = [2, 3, 4, 5, 1]

console.log(maximumUniqueSubarray([7, 3, 4, 3, 5, 6, 7]));
// output: 25. sub array = [4, 3, 5, 6, 7]

console.log(maximumUniqueSubarray([187,470,25,436,538,809,441,167,477,110,275,133,666,345,411,459,490,266,987,965,429,166,809,340,467,318,125,165,809,610,31,585,970,306,42,189,169,743,78,810,70,382,367,490,787,670,476,278,775,673,299,19,893,817,971,458,409,886,434]));
// output: 16911. sub array. 
