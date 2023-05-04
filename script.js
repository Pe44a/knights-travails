function knightMoves(start, end) {
    // all possible moves
    moves = [[1 , 2], [1, -2], [2, 1], [2, -1],
    [-1, 2], [-1, -2], [-2, 1], [-2, -1]];

      const visited = [start];
      const queue = [[start]];

      // while at least there is one node
      while(queue.length > 0){
        const currentPath = queue.shift();
        const current = currentPath[currentPath.length - 1];


          // searches all possible moves
          for (const move of moves) {
            const x = current[0] + move[0];
            const y = current[1] + move[1];

            if(x < 0 || x > 7 || y < 0 || y > 7)  continue;
            const travail = [x,y];
          
            

          let alreadyVisited = visited.some(array => array[0] === travail[0] && array[1] === travail[1]);
          if(!alreadyVisited){

            // adds travail to the visited
            visited.push(travail);

            // adds travail to the queue with a current path
            queue.push([...currentPath, travail]);


            // returns result if end is found
            if(travail[0] === end[0] && travail[1] === end[1]) {
              let array = [...currentPath, travail];
              let string = '';

              // modifies array in desirable way
              array.forEach(arr => {
                string += `[${arr}] `;
              });

              return 'You made it in ' + (array.length - 1) + ' moves! Heres your path: ' + string;
            }
          };
        }
      }
        
      
      return null;
}


//How it works
//knightMoves([0,0],[3,3]) == [[0,0],[1,2],[3,3]]