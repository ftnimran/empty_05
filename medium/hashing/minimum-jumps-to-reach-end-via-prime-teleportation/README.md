# Minimum Jumps to Reach End via Prime Teleportation

🔗 [Problem Link](https://leetcode.com/problems/minimum-jumps-to-reach-end-via-prime-teleportation/)
📊 Difficulty: medium
📂 Category: Hashing

## 📝 Description
You are given an integer array nums of length n.

You start at index 0, and your goal is to reach index n - 1.

From any index i, you may perform one of the following operations:


	Adjacent Step: Jump to index i + 1 or i - 1, if the index is within bounds.
	Prime Teleportation: If nums[i] is a prime number p, you may instantly jump to any index j != i such that nums[j] % p == 0.


Return the minimum number of jumps required to reach index n - 1.

&nbsp;
Example 1:


Input: nums = [1,2,4,6]

Output: 2

Explanation:

One optimal sequence of jumps is:


	Start at index i = 0. Take an adjacent step to index 1.
	At index i = 1, nums[1] = 2 is a prime number. Therefore, we teleport to index i = 3 as nums[3] = 6 is divisible by 2.


Thus, the answer is 2.


Example 2:


Input: nums = [2,3,4,7,9]...