// O(n) approach

var maxArea = function(height) {
    let s = 0;
    let e = height.length - 1;
    let area;
    let max = -Infinity;
    let width = height.length - 1;
    while (s<e) {
       area = width * Math.min(height[s], height[e]);
       max = Math.max(area, max);
       if(height[e]>height[s]){
           s++
       }else{
           e--
       }
          width--

  }
   return max;
  };  
  
  console.log(maxArea([1,8,6,2,5,4,8,3,7]))