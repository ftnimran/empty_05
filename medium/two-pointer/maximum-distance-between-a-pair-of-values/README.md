# Maximum Distance Between a Pair of Values

🔗 [Problem Link](https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/)
📊 Difficulty: medium
📂 Category: Two Pointer

## 📝 Description
You are given two non-increasing 0-indexed integer arrays nums1​​​​​​ and nums2​​​​​​.

A pair of indices (i, j), where 0 &lt;= i &lt; nums1.length and 0 &lt;= j &lt; nums2.length, is valid if both i &lt;= j and nums1[i] &lt;= nums2[j]. The distance of the pair is j - i​​​​.

Return the maximum distance of any valid pair (i, j). If there are no valid pairs, return 0.

An array arr is non-increasing if arr[i-1] &gt;= arr[i] for every 1 &lt;= i &lt; arr.length.

&nbsp;
Example 1:


Input: nums1 = [55,30,5,4,2], nums2 = [100,20,10,10,5]
Output: 2
Explanation: The valid pairs are (0,0), (2,2), (2,3), (2,4), (3,3), (3,4), and (4,4).
The maximum distance is 2 with pair (2,4).


Example 2:


Input: nums1 = [2,2,2], nums2 = [10,10,1]
Output: 1
Explanation: The valid pairs are (0,0), (0,1), and (1,...