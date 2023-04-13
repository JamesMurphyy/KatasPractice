//LeetCode Questions

// Question 1

// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.



// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.


// ANSWER

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let xSplit = x.toString().split("")
  let xSplitReverse = x.toString().split("").reverse()
  for (let i = 0; i <= xSplit.length; i++) {
    if (xSplit[i] !== xSplitReverse[i]) {
      return false;
    }
  }
  return true;
};

// Question 2

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.



// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// ANSWER

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i <= nums.length; i++) {
    for (let j = i + 1; j <= nums.length - 1; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
};


// Question 3

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.

// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// ANSWER

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1)
      i--
    }
  }
  return nums.length
};

// Question 4

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

//   Example 1:

// Input: strs = ["flower", "flow", "flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog", "racecar", "car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// ANSWER

/**
 * @param {string[]} strs
* @return {string}
*/
var longestCommonPrefix = function (strs) {

  let prevalues = '', values = '';
  for (let i = 0; i < strs[0].length; i++) {
    values += strs[0][i];

    for (let j = 0; j < strs.length; j++) {
      if (!strs[j].startsWith(values)) {
        return prevalues;
      }
    }
    prevalues = values;
  }
  return values;
};


// Question 5

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).



// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.


// ANSWER

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function (nums1, nums2) {
  let concatArray = nums1.concat(nums2)
  let sortedArray = (concatArray.sort((a, b) => (a - b)))
  if (sortedArray.length % 2 === 0) {
    let firstVal = sortedArray[Math.floor(sortedArray.length / 2) - 1]
    let secondVal = sortedArray[Math.floor(sortedArray.length / 2)]
    return ((firstVal + secondVal) / 2)
  }
  return Number(sortedArray[Math.floor(sortedArray.length / 2)])
};





// Given a string s, find the length of the longest 
// substring
//  without repeating characters.



// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.




const substring = function (s) {
  let k = 0
  let maxLength = 0

  for (let i = 0; i < s.length; i++) {
    for (let j = k; j < i; j++) {
      if (s[i] === s[j]) {
        k = j + 1
        break;
      }
    }
    if (i - k + 1 > maxLength) {
      maxLength = i - k + 1
    }
  }
  return maxLength
}


const twoSum = function (nums, target) {
  for (let i = 0; i <= nums.length; i++) {
    for (let j = i + 1; j <= nums.length - 1; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}

