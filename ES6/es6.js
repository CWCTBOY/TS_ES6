'use strict';
function count(text) {
  const textSort = [...text].sort();
  const dataMiner = {};
  textSort.forEach(item => {
    dataMiner[item] == undefined
      ? dataMiner[item] = 1
      : dataMiner[item] += 1
  })
  console.log(dataMiner);
}
count('aaaccbb');