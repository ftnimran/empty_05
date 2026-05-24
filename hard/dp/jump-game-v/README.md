# Jump Game V

🔗 [Problem Link](https://leetcode.com/problems/jump-game-v/)
📊 Difficulty: hard
📂 Category: DP

## 📝 Description
Given an array of&nbsp;integers arr and an integer d. In one step you can jump from index i to index:


	i + x where:&nbsp;i + x &lt; arr.length and  0 &lt;&nbsp;x &lt;= d.
	i - x where:&nbsp;i - x &gt;= 0 and  0 &lt;&nbsp;x &lt;= d.


In addition, you can only jump from index i to index j&nbsp;if arr[i] &gt; arr[j] and arr[i] &gt; arr[k] for all indices k between i and j (More formally min(i,&nbsp;j) &lt; k &lt; max(i, j)).

You can choose any index of the array and start jumping. Return the maximum number of indices&nbsp;you can visit.

Notice that you can not jump outside of the array at any time.

&nbsp;
Example 1:


Input: arr = [6,4,14,6,8,13,9,7,10,6,12], d = 2
Output: 4
Explanation: You can start at index 10. You can jump 10 --&gt; 8 --&gt; 6 --&gt; 7 as shown.
Note that if you sta...