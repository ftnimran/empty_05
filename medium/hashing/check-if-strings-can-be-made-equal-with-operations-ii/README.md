# Check if Strings Can be Made Equal With Operations II

🔗 [Problem Link](https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-ii/)
📊 Difficulty: medium
📂 Category: Hashing

## 📝 Description
You are given two strings s1 and s2, both of length n, consisting of lowercase English letters.

You can apply the following operation on any of the two strings any number of times:


	Choose any two indices i and j such that i &lt; j and the difference j - i is even, then swap the two characters at those indices in the string.


Return true if you can make the strings s1 and s2 equal, and&nbsp;false otherwise.

&nbsp;
Example 1:


Input: s1 = &quot;abcdba&quot;, s2 = &quot;cabdab&quot;
Output: true
Explanation: We can apply the following operations on s1:
- Choose the indices i = 0, j = 2. The resulting string is s1 = &quot;cbadba&quot;.
- Choose the indices i = 2, j = 4. The resulting string is s1 = &quot;cbbdaa&quot;.
- Choose the indices i = 1, j = 5. The resulting string is s1 = &quot...