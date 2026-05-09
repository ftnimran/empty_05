# Cyclically Rotating a Grid

🔗 [Problem Link](https://leetcode.com/problems/cyclically-rotating-a-grid/)
📊 Difficulty: medium
📂 Category: Matrix

## 📝 Description
You are given an m x n integer matrix grid​​​, where m and n are both even integers, and an integer k.

The matrix is composed of several layers, which is shown in the below image, where each color is its own layer:



A cyclic rotation of the matrix is done by cyclically rotating each layer in the matrix. To cyclically rotate a layer once, each element in the layer will take the place of the adjacent element in the counter-clockwise direction. An example rotation is shown below:

Return the matrix after applying k cyclic rotations to it.

&nbsp;
Example 1:


Input: grid = [[40,10],[30,20]], k = 1
Output: [[10,20],[40,30]]
Explanation: The figures above represent the grid at every state.


Example 2:
  


Input: grid = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]...