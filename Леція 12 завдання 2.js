function getMaxSubSum(arr) {
    let maxSum = 0; // если элементов не будет - возвращаем 0
  
    for (let i = 0; i < arr.length; i++) {
      let sumFixedStart = 0;
      for (let j = i; j < arr.length; j++) {
        sumFixedStart += arr[j];
        maxSum = Math.max(maxSum, sumFixedStart);
      }
    }
  
    return maxSum;
  }
  
 console.log( getMaxSubSum([1,2,3]) ); 
 console.log( getMaxSubSum([0,15,-1,4]) ); 
 console.log( getMaxSubSum([1,100,-10,102]) ); 
 console.log( getMaxSubSum([-11,-3,-8]) ); 
