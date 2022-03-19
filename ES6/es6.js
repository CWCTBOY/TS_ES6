var 사람 = {
  name: '손흥민',
  sayHi() {
    console.log(`안녕 나는 ${this.name}`);
  }
}

사람.sayHi(); //안녕 나는 손흥민

var 자료 = {
  data: [1, 2, 3, 4, 5],
  전부더하기() {
    let sum = 0;
    for (i = 0; i < this.data.length; i++)
    {
      sum += this.data[i];
    }
    console.log(sum);
  }
}
자료.전부더하기();


document.getElementById('버튼').addEventListener('click', function () {
  setTimeout(() => {
    this.innerHtml = `버튼이에요`;
    console.log(this.innerHtml);
  }, 1000);
});