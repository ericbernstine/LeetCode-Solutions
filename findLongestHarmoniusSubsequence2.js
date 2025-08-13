var findLHS = function(nums) {
  let output = 0
  let tracker = new Map();
  for (let i = 0; i < nums.length; i++){
    if (tracker.has(nums[i])){
      tracker.set(nums[i], (tracker.get(nums[i]) + 1))
    } else {
      tracker.set(nums[i], 1)
    }
  }
  const logElements = (value, key) => {
    let findNextIteration = tracker.has((key + 1))
    if (findNextIteration) {
      let total = tracker.get(key) + tracker.get((key + 1))
      output = Math.max(output, total)
    }
  }
  tracker.forEach(logElements)
  return output;
};

console.log(findLHS([100,100,101]))
// [1, 2, 2, 2, 3, 3, 5, 7]
//output = 3

console.log(findLHS([3,3,3,2,2,2,1,1]))
//output = 6

console.log(findLHS([10,9,8,7,6,6,6]))
//output = 4
