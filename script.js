function threeSum(arr, target) {
// write your code here
   nums.sort((a, b) => a - b);

    // Initialize variables to store the result and the minimum difference
    let result;
    let minDiff = Infinity;

    // Iterate through the array
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            // Calculate the current sum
            const currentSum = nums[i] + nums[left] + nums[right];

            // Calculate the difference between the current sum and the target
            const diff = Math.abs(currentSum - target);

            // Update the result if the current difference is smaller than the minimum difference
            if (diff < minDiff) {
                minDiff = diff;
                result = currentSum;
            }

            // Adjust the pointers based on the comparison with the target
            if (currentSum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

	console.log(result)
}
