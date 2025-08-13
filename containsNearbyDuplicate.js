var containsNearbyDuplicate = function(nums, k) {
  // Set map variable named tracker
  let tracker = new Map(); 
  // Loop over nums array and set a current variable 
  for (let i = 0; i < nums.length; i++){
    let current = nums[i]

    // If tracker already contains current, calualte the difference between the most recent duplicate, and the last one found. 
    if (tracker.has(current)){
      let diff = i - tracker.get(current)
      
  // If that difference is <= k, break loop early and return true. If not then set the current vlaue to the most recent index found, essentially sliding the window. 
      if (diff <= k) return true
      tracker.set(current, i)
      
  // If tracker does not contain the current variable, then add it. 
    } else {
      tracker.set(current, i)
    }
  }
  return false
};

console.log(containsNearbyDuplicate([1,2,3,1], k = 3))
//output = true

console.log(containsNearbyDuplicate([1,2,3,1], k = 0))
//output = false

console.log(containsNearbyDuplicate( [1,2,3,1,2,3,2], k = 2))
//output = true