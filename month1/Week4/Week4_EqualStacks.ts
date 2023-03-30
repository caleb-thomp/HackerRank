function check_height(h1: number[], h2: number[], h3: number[]) {
  let result_1 = 0;
  let result_2 = 0;
  let result_3 = 0;

  h1.forEach(element => {
    result_1 += element;
  })

  h2.forEach(element => {
    result_2 += element;
  })

  h3.forEach(element => {
    result_3 += element;
  })

  return [result_1, result_2, result_3];
}


function equalStacks(h1: number[], h2: number[], h3: number[]): number {
  // Write your code here
  let height_1: number, height_2: number, height_3: number = 0;

  // topmost cylinder index
  let index_1: number = 0;
  let index_2: number = 0;
  let index_3: number = 0;

  // check height of stacks and 
  // save height in variables.
  [height_1, height_2, height_3] = check_height(h1, h2, h3);

  while (true) {
    // are stacks equal?
    if (height_1 === height_2 && height_2 === height_3) {
      return height_1;
    } else {
      // find the tallest stack 
      let tallest_stack = [height_1, height_2, height_3].indexOf(Math.max(height_1, height_2, height_3));

      // substract the topmost stack from the height
      // and increase index of topmost cylinder
      if (tallest_stack === 0) {
        height_1 -= h1[index_1];
        index_1++;

      } else if (tallest_stack === 1) {
        height_2 -= h2[index_2];
        index_2++;

      } else if (tallest_stack === 2) {
        height_3 -= h3[index_3];
        index_3++;
      }
    }

  }
}