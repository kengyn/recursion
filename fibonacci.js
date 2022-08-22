//iteration
function fibs(x) {
  let results = [0];
  for (i = 1; i < x; i++) {
    if (i == 1 || i == 2) {
      results.push(1);
    } else {
      results.push(results[i - 1] + results[i - 2]);
    }
  }
  return results;
}
//recursion
function fibsRec(x) {
  if (x <= 0) {
    return [];
  }
  if (x == 1) {
    return [0];
  }
  if (x == 2) {
    return [0, 1];
  }
  return [...fibsRec(x - 1), fibsRec(x - 1)[x - 2] + fibsRec(x - 2)[x - 3]];
}

console.log(fibs(8));
