function getNeighbors(row, col, graph) {

  let top = [row - 1, col];
  let bottom = [row + 1, col];
  let left = [row, col - 1];
  let right = [row, col + 1];

  let neighbor = [top, bottom, left, right];

  let res = [];

  neighbor.forEach(ele => {
    let x = ele[0]
    let y = ele[1]

    if(x >= 0 && y >=0 && x < graph.length && y < graph[0].length){
      if(graph[x][y] === 1){
        res.push(ele);
      }
    }



  })
  return res


  // Check top// row -1, col, if < 0, don't add


  // Check bottom // row + 1, col if > matrix.length

  // Check left // row, col-1  if < 0, don't add

  // Check right // row, col +1 if > matrix.length, don't add

  // Return neighbors

  // Your code here
}
matrix = [
  [1,1,1,0,0],
  [0,1,1,0,1],
  [0,1,1,0,1],
]

console.log(getNeighbors(0, 0, matrix))


function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes
  // Put the stringified starting node in visited
  const v = new Set([`${row}, ${col}`]);

  // Create a stack, put the starting node in the stack
  const queue = [[row, col]]

 


  // Initialize size to 0
  let size = 0;

  // While the stack is not empty,
  while(queue.length){
    // Pop the first node
    let currentNode = queue.shift();
    size++;
    let neighbors = getNeighbors(currentNode[0], currentNode[1], graph);
    neighbors.forEach(ele => {
      let string = `${ele[0]}, ${ele[1]}`
      if(!v.has(string)){
        v.add(string)
        queue.push(ele)
      }
    })
  }
  return size;
    // DO THE THING (increment size by 1)

    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!

  // return size

  // Your code here
}

module.exports = [getNeighbors, islandSize];
