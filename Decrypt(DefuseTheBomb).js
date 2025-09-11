var decrypt = function(code, k) {
  // set empty output array 
  const result = []
  // create one single array containing the og code array twice. 
  let code2 = [...code, ...code]
  // if k = 0, there can be no window, return a new array containing only 0s
  if (k === 0){ return code.map((num) => num = 0) }
  // Set an output variable to keep total of current window.
  let output = 0
  // Flip k to a positive in the event k is a negative. 
  const newK = Math.abs(k);
  // if k is a negative we need to flip the array then reverse it back. Set a new array variable to keep consistency in the code2 array. 
  let code3;
  k < 0 ? code3 = code2.reverse() : code3 = code2; 
  // calculate initial window, and push that number to the result array. 
  for (let i = 1; i <= newK; i++){
    output += code3[i];
  }
  result.push(output)
  // Loop through the rest of the array. 
  for (let i = 1; i < code.length; i++){
    // Add the next number at the end of the window. See below. 
    // [5,7,1,4,5,7,1,4] we add 7, 1, 4 to get the first result array value of [12], this is the result for value 5. 
    // [5,7,1,4,5,7,1,4] now we subtract 7 from this result, and add 5 as that is the next number at the end of the window which is currently equal to [i + k || (newK)]. This gives us the result of [10] which is the total for the next 3 numbers following 7, [1, 4, 5.]
    output += code3[i + newK];
    output -= code3[i];
    // Push the total of the window to our result array. 
    result.push(output)
  }
  // If k is less than 0 (a negative) then return the result array reversed. 
  if (k < 0){
    return result.reverse(); 
  } else{
    return result
  }
};

console.log(decrypt([5,7,1,4], 3))
// output: [12,10,16,13]
// [5,7,1,4,5,7,1,4]
// Each number is replaced by the sum of the next 3 numbers. The decrypted code is [7+1+4, 1+4+5, 4+5+7, 5+7+1]. Notice that the numbers wrap around.

console.log(decrypt([2,4,9,3], -2))
// output: [12,5,6,13]
// [3,9,4,2,3,9,4,2]

console.log(decrypt([5,2,2,3,1], 3))
// output: [7,6,9,8,9]


// Notes:
// Double the array so their is correct length to 'circle' [5,7,1,4] = [5,7,1,4,5,7,1,4]
// If k is positive, strat at left hand point and slide a window of k addding all elements
// If k is negative, do the oposite and start at the right most point (end) of the array. 



// var decrypt = function(code, k) {
//   const result = []
//   let code2 = [...code, ...code]
//   if (k === 0){ return code.map((num) => num = 0) }
//   let output = 0
//   const newK = Math.abs(k);
//   let code3;
//   k < 0 ? code3 = code2.reverse() : code3 = code2; 
//   for (let i = 1; i <= newK; i++){
//     output += code3[i];
//   }
//   result.push(output)
//   for (let i = 1; i < code.length; i++){
//     console.log(`Output: ${output}, adding ${code3[i + newK]}`)
//     output += code3[i + newK];
//     console.log(`NEW Output: ${output}, subtracting ${code3[i]}`)
//     output -= code3[i];
//     console.log(`Output: ${output} before push`)
//     result.push(output)
//   }
//   if (k < 0){
//     return result.reverse(); 
//   } else{
//     return result
//   }
// };