function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    let mid = arr.length / 2;
    let leftSide = arr.slice(0, mid);
    let rightSide = arr.slice(mid, arr.length);
    return sort(mergeSort(leftSide), mergeSort(rightSide));
  }
}

function sort(a, b) {
  let arr = [];
  while (a.length && b.length) {
    if (a[0] < b[0]) {
      arr.push(a.shift());
    } else {
      arr.push(b.shift());
    }
  }
  return [...arr, ...a, ...b];
}

console.log(mergeSort([5, 2, 3, 1, 8, 6, 7, 4, 50, 32, 432, 43, 43]));
