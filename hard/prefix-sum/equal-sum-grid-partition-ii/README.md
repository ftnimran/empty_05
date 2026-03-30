# Equal Sum Grid Partition II

🔗 [Problem Link](https://leetcode.com/problems/equal-sum-grid-partition-ii/)
📊 Difficulty: hard
📂 Category: Prefix Sum

## 📝 Description
You are given an m x n matrix grid of positive integers. Your task is to determine if it is possible to make either one horizontal or one vertical cut on the grid such that:


	Each of the two resulting sections formed by the cut is non-empty.
	The sum of elements in both sections is equal, or can be made equal by discounting at most one single cell in total (from either section).
	If a cell is discounted, the rest of the section must remain connected.


Return true if such a partition exists; otherwise, return false.

Note: A section is connected if every cell in it can be reached from any other cell by moving up, down, left, or right through other cells in the section.

&nbsp;
Example 1:


Input: grid = [[1,4],[2,3]]

Output: true

Explanation:




	A horizontal cut after the first row g...