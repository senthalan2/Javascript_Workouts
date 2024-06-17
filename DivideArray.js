const divideArray = (arr, d) => {
  let result = [],
    count = 0,
    tempArr = [];
  for (let i = 0; i < arr.length; i++) {
    count++;
    tempArr.push(arr[i]);
    if (count === d || arr.length - 1 === i) {
      result.push(tempArr);
      tempArr = [];
      count = 0;
    }
  }
  return result;
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let d = 3;
console.log(divideArray(arr, d));
