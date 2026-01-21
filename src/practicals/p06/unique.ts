export function getUniqueNumbers(arr1: number[], arr2: number[]): number[] {
  // Write your code below
  const concatArr: number[] = arr1.concat(arr2);
  const resultArr: number[] = [];
  for(let i = 0; i < concatArr.length; i++){
    for(let j = i + 1; j < concatArr.length - i; j++){
      if(concatArr[i] === concatArr[j]){
        break;
      }else{
        resultArr.push(concatArr[i]);
        break;
      }
    }
  }

  if(resultArr.length > 0){
    return resultArr;
  }else{
    return [];
  }
}

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
//1,2,3,4,3,4,5,6

console.log(getUniqueNumbers(arr1, arr2));