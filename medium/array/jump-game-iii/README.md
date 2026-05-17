# Jump Game III

🔗 [Problem Link](https://leetcode.com/problems/jump-game-iii/)
📊 Difficulty: medium
📂 Category: Array

## 📝 Description
Given an array of non-negative integers arr, you are initially positioned at start&nbsp;index of the array. When you are at index i, you can jump&nbsp;to i + arr[i] or i - arr[i], check if you can reach&nbsp;any index with value 0.

Notice that you can not jump outside of the array at any time.

&nbsp;
Example 1:


Input: arr = [4,2,3,0,3,1,2], start = 5
Output: true
Explanation: 
All possible ways to reach at index 3 with value 0 are: 
index 5 -&gt; index 4 -&gt; index 1 -&gt; index 3 
index 5 -&gt; index 6 -&gt; index 4 -&gt; index 1 -&gt; index 3 


Example 2:


Input: arr = [4,2,3,0,3,1,2], start = 0
Output: true 
Explanation: 
One possible way to reach at index 3 with value 0 is: 
index 0 -&gt; index 4 -&gt; index 1 -&gt; index 3


Example 3:


Input: arr = [3,0,2,1,2], start = 2
Outp...