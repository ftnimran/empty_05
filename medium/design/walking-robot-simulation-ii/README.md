# Walking Robot Simulation II

🔗 [Problem Link](https://leetcode.com/problems/walking-robot-simulation-ii/)
📊 Difficulty: medium
📂 Category: Design

## 📝 Description
A width x height grid is on an XY-plane with the bottom-left cell at (0, 0) and the top-right cell at (width - 1, height - 1). The grid is aligned with the four cardinal directions (&quot;North&quot;, &quot;East&quot;, &quot;South&quot;, and &quot;West&quot;). A robot is initially at cell (0, 0) facing direction &quot;East&quot;.

The robot can be instructed to move for a specific number of steps. For each step, it does the following.


	Attempts to move forward one cell in the direction it is facing.
	If the cell the robot is moving to is out of bounds, the robot instead turns 90 degrees counterclockwise and retries the step.


After the robot finishes moving the number of steps required, it stops and awaits the next instruction.

Implement the Robot class:


	Robot(int width, int height)...