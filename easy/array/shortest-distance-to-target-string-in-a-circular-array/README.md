# Shortest Distance to Target String in a Circular Array

🔗 [Problem Link](https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/)
📊 Difficulty: easy
📂 Category: Array

## 📝 Description
You are given a 0-indexed circular string array words and a string target. A circular array means that the array&#39;s end connects to the array&#39;s beginning.


	Formally, the next element of words[i] is words[(i + 1) % n] and the previous element of words[i] is words[(i - 1 + n) % n], where n is the length of words.


Starting from startIndex, you can move to either the next word or the previous word with 1 step at a time.

Return the shortest distance needed to reach the string target. If the string target does not exist in words, return -1.

&nbsp;
Example 1:


Input: words = [&quot;hello&quot;,&quot;i&quot;,&quot;am&quot;,&quot;leetcode&quot;,&quot;hello&quot;], target = &quot;hello&quot;, startIndex = 1
Output: 1
Explanation: We start from index 1 and can reach &quot;hello&quot; by...