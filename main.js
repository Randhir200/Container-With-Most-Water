var maxArea = function (height) {
  let s = 0;
  let e = height.length - 1;
  let area;
  let max = -Infinity;
  // while(e<height.length){
  //   bag+=s+","+ e+"|";
  //   console.log(bag)
  //   if(e==height.length-1) {
  //       e = s+1;
  //       s++;
  //   }
  //   e++;
  // }
  let width = height.length - 1;
  while (s < height.length - 1) {
    if (e == s) {
      //1
      e = height.length - 1; //5
      s++; //1
      width = height.length - 1 - s;
    }
    area = width * Math.min(height[s], height[e]);
    max = Math.max(area, max);
    e--; //4
    width--;
}
console.log(max);
};

maxArea([1,8,6,2,5,4,8,3,7]);
