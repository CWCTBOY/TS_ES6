// // what "this" means?

// console.log(this); // 1. means "window" when excuting with console, window is 전역object

// const obj = {
//   name1: "Park",
//   age: 22,
//   함수1() {
//     console.log(this);
//   },
//   objInObj: {
//     name2: "Kim",
//     함수2() {
//       console.log(this);
//     }
//   }
// }

// obj.함수1();
// obj.objInObj.함수2(); // 2. means "obj" that contains function[console.log], the function in obj is called "method"

// function objMachine() {
//   this.name = "Park",
//     this.age = 22,
//     this.gender = "male"
// }

// const obj2 = new objMachine();
// console.log(obj2); // 3. 새로운 오브젝트 를 생성해냅니다. 오브젝트에 할당하는법은 위커맨드 참조

// const h1 = document.querySelector(".h1");
// h1.addEventListener("click", titleFnc);
// function titleFnc() {
//   console.log(this) //4.이벤트리스너 안에서의 "this"는 "e.currentTarget(현재 이벤트가 동작하는 곳)"와 같다;
//   const arr = [1, 2, 3];
//   arr.forEach(function (a) {
//     console.log(this);
//   });
// }

// const obj3 = {
//   이름들: ["김", "이", "박"],
//   함수3() {
//     console.log(this);
//     obj3.이름들.forEach(function (a) {
//       console.log(this)//forEach안의 함수는 콜백함수라 전역오브젝트를 출력한다.;
//     });
//   }
// };

// console.log(obj3.함수3());

// console.log(this);
// function 기계() {
//   console.log(this);
// }
// 기계();

// const obj = {
//   name: "Park",
//   age: 22,
//   함수() {
//     console.log(this);
//   }
// };
// obj.함수();

// function 옵젝함수() {
//   this.name = "Park";
//   this.age = 24;
// }
// const obj2 = new 옵젝함수();
// console.log(obj2);

// const h1 = document.querySelector("h1");
// h1.addEventListener("click", click);
// function click() {
//   console.log(this);
//   const arr = [1, 2, 3, 4];
//   arr.forEach(function (a) {
//     console.log(a);
//     console.log(this);
//   });
//   arr.forEach(a => {
//     console.log(a);
//     console.log(this);
//   })
// }

// part2. arrow function

// const obj4 = {
//   name: "Park",
//   age: 45,
//   함수4: function () {
//     console.log(this);
//   },
//   함수5: () => {
//     console.log(this);
//     console.log(obj4);
//   }
// };

// obj4.함수4();
// obj4.함수5();

//문제1
var 사람 = {
  name: '손흥민',
  sayHi: function () {
    return `안녕 나는 ${this.name}`;
  }
};

console.log(사람.sayHi()); //안녕 나는 손흥민

//문제2
var 자료 = {
  data: [1, 2, 3, 4, 5],
  전부더하기: function () {
    for (let i = 0; i < this.data.length; i++)
    {
      let sum = 0;
      sum += this.data[i];
      return sum;
    }
  }
};
console.log(자료.전부더하기());


//문제3
document.getElementById('버튼').addEventListener('click', function () {
  setTimeout(function () {
    console.log(document.getElementById('버튼').innerHTML);
  }, 1000)
});
