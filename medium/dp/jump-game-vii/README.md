# Jump Game VII

🔗 [Problem Link](https://leetcode.com/problems/jump-game-vii/)
📊 Difficulty: medium
📂 Category: DP

## 📝 Description
You are given a 0-indexed binary string s and two integers minJump and maxJump. In the beginning, you are standing at index 0, which is equal to &#39;0&#39;. You can move from index i to index j if the following conditions are fulfilled:


	i + minJump &lt;= j &lt;= min(i + maxJump, s.length - 1), and
	s[j] == &#39;0&#39;.


Return true if you can reach index s.length - 1 in s, or false otherwise.

&nbsp;
Example 1:


Input: s = &quot;011010&quot;, minJump = 2, maxJump = 3
Output: true
Explanation:
In the first step, move from index 0 to index 3. 
In the second step, move from index 3 to index 5.


Example 2:


Input: s = &quot;01101110&quot;, minJump = 2, maxJump = 3
Output: false


&nbsp;
Constraints:


	2 &lt;= s.length &lt;= 105
	s[i] is either &#39;0&#39; or &#39;1&#39;.
	s[0] == &#39...