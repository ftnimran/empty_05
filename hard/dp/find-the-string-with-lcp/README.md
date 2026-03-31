# Find the String with LCP

🔗 [Problem Link](https://leetcode.com/problems/find-the-string-with-lcp/)
📊 Difficulty: hard
📂 Category: DP

## 📝 Description
We define the lcp matrix of any 0-indexed string word of n lowercase English letters as an n x n grid such that:


	lcp[i][j] is equal to the length of the longest common prefix between the substrings word[i,n-1] and word[j,n-1].


Given an&nbsp;n x n matrix lcp, return the alphabetically smallest string word that corresponds to lcp. If there is no such string, return an empty string.

A string a is lexicographically smaller than a string b (of the same length) if in the first position where a and b differ, string a has a letter that appears earlier in the alphabet than the corresponding letter in b. For example, &quot;aabd&quot; is lexicographically smaller than &quot;aaca&quot; because the first position they differ is at the third letter, and &#39;b&#39; comes before &#39;c&#39;.

&nbsp...