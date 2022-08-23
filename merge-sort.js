function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  const left = arr.slice(0, Math.floor(arr.length / 2));
  const right = arr.slice(Math.floor(arr.length / 2));
  return mergeMerge(mergeSort(left), mergeSort(right));
}

function mergeMerge(left, right) {
  const result = [];
  //sort
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  //whichever side still has numbers after while loop push to result
  if (left.length > 0) {
    result.push(...left);
  } else {
    result.push(...right);
  }

  return result;
}

const sortThis = [13, 2, 5, 3, 9, 0, 1];

console.log(mergeSort(sortThis));
