# Count the Number of Special Characters II

🔗 [Problem Link](https://leetcode.com/problems/count-the-number-of-special-characters-ii/)
📊 Difficulty: medium
📂 Category: Hashing

## 📝 Description
You are given a string word. A letter&nbsp;c is called special if it appears both in lowercase and uppercase in word, and every lowercase occurrence of c appears before the first uppercase occurrence of c.

Return the number of special letters in word.

&nbsp;
Example 1:


Input: word = &quot;aaAbcBC&quot;

Output: 3

Explanation:

The special characters are &#39;a&#39;, &#39;b&#39;, and &#39;c&#39;.


Example 2:


Input: word = &quot;abc&quot;

Output: 0

Explanation:

There are no special characters in word.


Example 3:


Input: word = &quot;AbBCab&quot;

Output: 0

Explanation:

There are no special characters in word.


&nbsp;
Constraints:


	1 &lt;= word.length &lt;= 2 * 105
	word consists of only lowercase and uppercase English letters.