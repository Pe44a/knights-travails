# knights-travails

This is a solution for the Knight's Travail Problem, which consists of finding a sequence of moves for a knight on a chessboard such that the knight visits every square exactly once.

Function:
The function knightMoves(start, end) takes two arguments, start and end, which are arrays containing the coordinates of the starting and ending squares on the chessboard. The function returns an array containing the sequence of squares visited by the knight, in the order they were visited, or null if no such sequence exists.


Example:
const sequence = knightMoves([0,0], [3,3]);
console.log(sequence); // [[0,0],[1,2],[3,3]]


Algorithm:
The function uses a breadth-first search algorithm to find a sequence of moves for the knight. It starts by adding the starting square to a queue, and then iteratively explores all possible moves from the current square, adding new squares to the queue and marking them as visited. The algorithm stops when it reaches the end square, or when all reachable squares have been visited.