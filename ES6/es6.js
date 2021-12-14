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

//this&arrowfunc 문제

//문제1
// var 사람 = {
//   name: '손흥민',
//   sayHi: function () {
//     return `안녕 나는 ${this.name}`;
//   }
// };

// console.log(사람.sayHi()); //안녕 나는 손흥민

// //문제2
// var 자료 = {
//   data: [1, 2, 3, 4, 5],
//   전부더하기: function () {
//     let sum = 0;
//     for (let i = 0; i < this.data.length; i++)
//     {
//       sum += this.data[i];
//     }
//     console.log(sum);
//   }
// };
// 자료.전부더하기();


// //문제3
// document.getElementById('버튼').addEventListener('click', function () {
//   setTimeout(function () {
//     console.log(document.getElementById('버튼').innerHTML);
//   }, 1000)
// });

//변수 문제
/*
//문제1
함수();
function 함수() {
  console.log(안녕);
  let 안녕 = 'Hello!';
} // 호이스팅 현상으로 fn함수를 실행시키는데 문제가 없다. 변수도 호이스팅현상으로 undefined지만 이는 함수에 의해 실해되므로 err

//문제2
var 함수 = function () {
  console.log(안녕);
  var 안녕 = 'Hello!';
} //함수 실행을 하지않아 동작안함.

//문제3
let a = 1;
var 함수 = function () {
  a = 2;
}
console.log(a);//1, 함수를 실행하지 않았고, 함수속의 변수는 함수안에서만 실행되기 때문.

//문제4
let a = 1;
var b = 2;
window.a = 3;
window.b = 4;

console.log(a + b);//??
*/

//문제5
// const loop = () => {
//   for (let i = 0; i < 5; i++)
//   {
//     setTimeout(() => console.log(i + 1), (i + 1) * 1000);
//   }
// };
// loop();

//문제6
// var 버튼들 = document.querySelectorAll('button');
// var 모달창들 = document.querySelectorAll('div');

// for (let i = 0; i < 3; i++)
// {
//   const btnFnc = () => {
//     모달창들[i].style.display = "block";
//   }
//   버튼들[i].addEventListener("click", btnFnc);
// }

// var pants = 0;
// var socks = 100;
// `바지${pants} 양말${socks}`;

// const 해체분석기 = (str, vari1, vari2) => {
//   if (vari1 === 0)
//   {
//     console.log(`${str[0]}다팔렸어요 ${str[1]}${vari2}`);
//   } else
//   {
//     console.log(`${str[1]}${vari2} ${str[0]}${vari1}`);
//   }
// }
// 해체분석기`바지${pants} 양말${socks}`;

// const arr = [1, 2, 3, 4];
// console.log(...arr);

// const obj = { name: `Park`, age: `22` };
// console.log({ ...obj });

// const arr2 = [1, 2, 3, 4];
// const arr2Sum1 = arr2.reduce((a, b) => a + b, 0);
// console.log(arr2Sum1);
// const arr2Sum2 = (a, b, c, d) => a + b + c + d;
// console.log(arr2Sum2.call(undefined, ...arr2));

// function fn(a, b, c, d, e, f, g, h) {
//   for (let i = 0; i < arguments.length; i++)
//   {
//     console.log(arguments[i]);
//   }
// };
// fn(1, 2, 3, 4, 5, 6, 7, 8);//esnext 이전문법

// const fn2 = (...rest) => {
//   for (let i = 0; i < rest.length; i++)
//   {
//     console.log(rest[i]);
//   }
// };//esnext문법
// fn2(1, 2, 3);

// var a = [1, 2, 3];
// var b = '김밥';
// var c = [...b, ...a];
// console.log(c); //[`김`, `밥`, 1, 2, 3]

// var a = [1, 2, 3];
// var b = ['you', 'are'];
// var c = function (a, b) {
//   console.log([[...a], ...[...b]][1])
// } // => [[1, 2, 3], `you`, `are`][1] => `you`
// c(a, b);

// function 함수(a = 5, b = a * 2) {
//   console.log(a + b);
//   return 10
// }
// 함수(3); //9

// function 함수(a = 5, b = a * 2) {
//   console.log(a + b);
// }
// 함수(undefined, undefined);//15

// function 어레이(...rest) {
//   return rest;
// }

// var newArray = 어레이(1, 2, 3, 4, 5);
// console.log(newArray); 

// var numbers = [2, 3, 4, 5, 6, 1, 3, 2, 5, 5, 4, 6, 7];
// console.log(Math.max(...numbers));

// function 정렬(str) {
//   console.log([...str].sort());
// }

// 정렬('bear'); 

// 데이터분석 하는 사람들이 자주 만들어 쓰는 함수가 있습니다. 

// 알파벳들의 출현 갯수를 세어주는 함수입니다.우리도 한번 만들어봅시다.



//   글자세기('aacbbb') 라고 입력하면 콘솔창에

// { a: 2, b : 3, c : 1 }

// ▲ 이렇게 출력해주는 글자세기() 라는 함수를 만들고 싶습니다.

// 쉽게말하자면 입력한단어에 들어있는 알파벳의 갯수를 세어서 오브젝트에 기록해주고 출력까지 해주는 함수입니다. 

// 글자세기라는 함수를 어떻게 만들면 될까요 ? 