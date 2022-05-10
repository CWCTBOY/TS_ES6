const arr = [1, 2, 3];
Array.prototype.remove3 = function () {
  return this.filter((item: number) => {
    item !== 3
  });
}
console.log(arr.remove3())