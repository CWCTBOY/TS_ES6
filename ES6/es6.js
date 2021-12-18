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

// var a = [1, 2, 3];
// var b = '김밥';
// var c = [...b, ...a];
// console.log(c); // [`김`, `밥`, 1, 2, 3]

// var a = [1, 2, 3];
// var b = ['you', 'are'];
// var c = function (a, b) {
//   console.log([[...a], ...[...b]][1])
// }
// c(a, b); // you

// function 함수(a = 5, b = a * 2) {
//   console.log(a + b);
//   return 10
// }
// 함수(3); // 9

// function 함수(a = 5, b = a * 2) {
//   console.log(a + b);
// }
// 함수(undefined, undefined); // 15

// function 어레이(...num) {
//   return num;
// }

// var newArray = 어레이(1, 2, 3, 4, 5);
// console.log(newArray); 

// var numbers = [2, 3, 4, 5, 6, 1, 3, 2, 5, 5, 4, 6, 7];
// console.log(Math.max(...numbers));

// function 정렬(str) {
//   console.log([...str].sort());
// }

// 정렬('bear'); 

// const countText = (text) => {
//   const arr = [...text].sort();
//   const result = {};
//   for (let i = 0; i < arr.length; i++)
//   {
//     !(arr[i] in result) ? result[arr[i]] = 1
//       : result[arr[i]] += 1;
//   }
//   console.log(result);
// };
// countText(`abcabcabcdfdfdfdf`);

// function Student(a, b) {
//   this.name = a;
//   this.age = b;
//   this.sayHi = () => `안녕하세요 저는 ${a}입니다`;
// }

// const newObject = new Student(`김`, 22);
// console.log(newObject.sayHi());

// const Product = function (a, b) {
//   this.name = a;
//   this.price = b;
//   this.부가세 = () => {
//     console.log(`${b / 10}원 입니다.`);
//   };
// };

// const product1 = new Product(`shirt`, 50000);
// const product2 = new Product(`shirt`, 60000);

// product1.부가세();
// product2.부가세();

// function Student(이름, 나이) {
//   this.name = 이름;
//   this.age = 나이;
// }

// Student.prototype.sayHi = () => {// arrow function이 문제
//   console.log('안녕 나는 ' + this.name + '이야');// arrow function에서 this는 window의미
// }
// var 학생1 = new Student('Kim', 20);

// 학생1.sayHi(); //왜 이 코드가 제대로 안나오죠?

// const Remove = function (...num) {
//   this.arr = new Array(...num);
//   this.remove3 = function () {
//     const result = [...num];
//     for (let i = 0; i < this.arr.length; i++)
//     {
//       if (this.arr[i] === 3)
//       {
//         result.splice(i, 1);
//       }
//     }
//     return result;
//   };
// };
// const arr1 = new Remove(1, 2, 3, 4, 3, 6, 4, 3, 5, 3);
// console.log(arr1.remove3());


// Array.prototype.remove3 = function () {
//   for (let i = 0; i < this.length; i++)
//   {
//     if (this[i] === 3)
//     {
//       this.splice(i, 1);
//     }
//   }
//   return this;
// };

// const arr = [1, 2, 3, 3, 5, 6, 7, 4, 3, 2, 1, 4, 3];
// console.log(arr.remove3());
// console.log(arr.filter(a => a !== 3));


// class Remove {
//   constructor(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     //constructor에 함수를 넣으면 그냥 오브젝트에 함수가 추가됨.
//   }
//   //prototype
//   sayHi() {
//     console.log(`Hello ${this.name}. You are ${this.age}years old and ${this.gender}.`);
//   }//여기에 함수를 작성하면 prototype 내에 함수가 추가됨.
// }
// const obj = new Remove(`박인재`, 22, `Male`);
// obj.sayHi();

// class Add extends Remove {
//   constructor(name, age, gender, a, b) {
//     super(name, age, gender);//constructor에서의 super는 부모의 constructor를 가져와 복제하는 것.
//     this.plus = a + b;
//   }
//   sayHello() {
//     super.sayHi();//method에서의 super는 부모의 prototype을 가져와 복제하는 것.
//   }
// }

// const add1 = new Add(`김혁준`, 24, `male`, 3, 4);
// add1.sayHi(); 


class Dog {
  constructor(type, color) {
    this.type = type;
    this.color = color;
  }
}

const dog1 = new Dog(`말티즈`, `white`);
const dog2 = new Dog(`진돗개`, `brown`);

console.log(dog1, dog2);

class Cat extends Dog {
  constructor(type, color, age) {
    super(type, color);
    this.age = age;
  }
  get agePlus() {
    return this.age + 1
  }
}

const cat1 = new Cat(`코숏`, `white`, 5);
const cat2 = new Cat(`러시안블루`, `brown`, 2);

console.log(cat1.agePlus);


class Unit {
  constructor(str = 5, hp = 100) {
    this.str = str;
    this.hp = hp;
  }
  get battlePoint() {
    return this.str + this.hp;
  }// getter함수는 값을 뽑을 때 주로사용, return값을 필요로 함
  set heal(num) {
    this.hp += num;
  }// setter함수는 오브젝트 밸류를 재할당할 때 주로 사용, parameter를 필요로 함. 이때 parameter는 하나만 가능하고 rest parameter는 못씀.
}

const char1 = new Unit(20, 80);
console.log(char1);
console.log(char1.battlePoint);
char1.heal = 50;
console.log(char1.hp);

var data = {
  odd: [],
  even: [],
  setter: function (...num) {
    for (let i = 0; i < [...num].length; i++)
    {
      [...num][i] % 2 === 0 ? this.even.push([...num][i])
        : this.odd.push([...num][i]);
    }//for 반복문
  },
  setter2: function (...num2) {
    [...num2].forEach(function (item) {
      item % 2 === 0 ? data.even.push(item)
        : data.odd.push(item);
    });//forEach array내장함수
  },
  setter3: function (...num2) {
    [...num2].forEach(item => {
      item % 2 === 0 ? this.even.push(item)
        : this.odd.push(item);
    });//forEach array내장함수 with arrow function => 콜백함수에서의 this는 윈도우를 의미하므로 화살표함수를 이용해 연계. 
  },
  getter: function () {
    return console.log(this.odd.sort(), this.even.sort());
  }
}

data.setter3(1, 5, 7, 3, 2, 6, 4, 8, 3, 3, 4, 4, 4, 5, 5, 6, 6);
data.getter();


