# Minimum Initial Energy to Finish Tasks

🔗 [Problem Link](https://leetcode.com/problems/minimum-initial-energy-to-finish-tasks/)
📊 Difficulty: hard
📂 Category: Greedy

## 📝 Description
You are given an array tasks where tasks[i] = [actuali, minimumi]:


	actuali is the actual amount of energy you spend to finish the ith task.
	minimumi is the minimum amount of energy you require to begin the ith task.


For example, if the task is [10, 12] and your current energy is 11, you cannot start this task. However, if your current energy is 13, you can complete this task, and your energy will be 3 after finishing it.

You can finish the tasks in any order you like.

Return the minimum initial amount of energy you will need to finish all the tasks.

&nbsp;
Example 1:


Input: tasks = [[1,2],[2,4],[4,8]]
Output: 8
Explanation:
Starting with 8 energy, we finish the tasks in the following order:
    - 3rd task. Now energy = 8 - 4 = 4.
    - 2nd task. Now energy = 4 - 2 = 2.
    - 1st...