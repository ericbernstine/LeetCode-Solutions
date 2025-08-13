var findLHS = function(nums) {
  // define output and sort the nums argument
  let output = 0
  nums = nums.sort( (x, y) => x - y)

  // set a map variable
  let tracker = new Map();

  // run a loop over sorted nums
  for (let i = 0; i < nums.length; i++){
    // if we have already seen current (nums[i]), then set it's value to one more than the current frequencey count
    if (tracker.has(nums[i])){
      tracker.set(nums[i], (tracker.get(nums[i]) + 1))
    } else {
    // if not then set the current frequency count to 1.
      tracker.set(nums[i], 1)
    }
  }
  
  // Use the .keys() method to iterate over the keys inside the map (tracker) variable, and set the current iteration to move up one with trackKeys.next().value
  let trackKeys = tracker.keys()
  trackKeys.next().value

  // callback function to iterate over the created map variable. REMEMBER no matter what you name the parameters of a callback function for a map forEach, they always takes arguments like this. 
  // ---> function logMapElements(value, key, map)
  const logElements = (value, key) => {
    // Set next iteration to exactly one after the curent
    let nextIteration = trackKeys.next().value
    
    // Set difference to the value of the next iteration - the current
    let difference = nextIteration - key;

    //If that difference is one, we know it meets the critrea of a harmonoius string, now we need to get the count. 
    if (difference === 1){
      // set that count to total variable by adding the key values of the current and next iteration togeather. 
      let total = tracker.get(key) + tracker.get(nextIteration)
      // update output to the new total or keep the current output
      output = Math.max(output, total)
    }
  }
// Run the map object through the logElements function
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


// Notes: 
// Check how many elements exactly equal nums[start] - nums[end] = 1 | a difference of 1
// what's the longest array you can make from those elemnts 
// [1,3,2,2,5,2,3,7]
//  X X
// [3,2,2,5,2,3,7]
//  X X
// [3,2,2,5,2,3,7]
//  X   X
// [3,2,2,5,2,3,7]
//  X     X
// [3,2,2,2,3,7]
//  X     X
// [3,2,2,2,3,7]
//  X       X
// [3,2,2,2,3,7]
//  X       X
// [3,2,2,2,3,7]
//        X X
// [3,2,2,2,3,7]
//    X       X
// [3,2,2,2,3]
//    X     X