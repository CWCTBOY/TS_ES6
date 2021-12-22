//type alias *********
type Project = {
  member: string[];
  days: number;
  started: boolean;
}

let project: Project = {
  member: ['kim', 'park'],
  days: 30,
  started: true,
} // 오브젝트는 type alias로 타입을 지정해주는게 좋다.

type Dog = { name: string, age: number };
// type Cat = { name: string, age: number, express: string }; => 중복되는 속성이 있으면 이 방법보다 
////////////////////////////////////////////////////////////////class, inerface에서도 쓰는 extends(&)를 활용한다.
type Cat = Dog & { express: string }; // => 이런식으로!
const arr = [`Park`, 23, true, null];
arr[4] = false;
console.log(arr);

var 어레이: (number | string)[] = [1, '2', 3];
var 오브젝트: { data: number | string } = { data: '123' };// array type 지정하는 법

let user = 'kim'; // 일반 변수는 따로 타입을 지정해주지 않아도 자동으로 타입이 할당된다.
let age7 = undefined; // 일반 변수는 따로 타입을 지정해주지 않아도 자동으로 타입이 할당된다.
let married = false; // 일반 변수는 따로 타입을 지정해주지 않아도 자동으로 타입이 할당된다.
let 철수: (string | number | undefined | boolean)[] = [user, 7, married];

type School = { score: (number | boolean)[], teacher: string, friend: string | string[] };
// (type1 | type2[])와 (type1 | type2)[]는 엄연히 다르다.

let 학교: School = {
  score: [100, 97, 84],
  teacher: 'Phil',
  friend: 'John'
}
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher]

const sayHi = (name?: string): string => name ? `안녕하세요 ${name}` : `이름이 없습니다.`;

console.log(sayHi(`박인재`));
console.log(sayHi());

const countStr = (x: string | number): number => typeof x === `string` ? x.length : [...String(x)].length;
//type narrowing => type이 union type일 떄 바로 return할 수 없다. 타입을 하나로 narrowing또는 assertion해주어야 한다.

console.log(countStr(1234555));

const canYouMarry = (월소득: number, 집보유여부: boolean, 매력점수: (`상` | `중` | `하`)): string => {
  let sum = 월소득;
  if (집보유여부 === true) {
    sum += 500;
  }
  if (매력점수 === `상`) {
    sum += 100;
  }
  if (sum >= 600) {
    return `결혼가능`
  } else {
    return `결혼 포기해라 ㅋ`;
  }
}; // parameter "매력점수"와 같이 타입을 원시타입으로 하지 않을 수 있다.(ex) 123 | true 등등도 가능)=> literal type지정이라고 한다.
console.log(canYouMarry(100, false, `하`));

// Array.prototype.cleaningArr = function (): number[] {
//   let result = [];
//   for (let i = 0; i < this.length; i++) {
//     typeof this[i] === `string` ? result[i] = parseInt(this[i])
//       : result[i] = this[i];
//   }
//   return result;
// }; // 아니 이거 왜안되지?? => 커스텀 타입을 지정해주고, tsconfig.json도 변경해주어야 함.

const cleaningArr = (arr: (number | string)[]): number[] => {
  let result: number[] = [];
  arr.forEach(item =>
    typeof item === `string` ? result.push(parseInt(item))
      : result.push(item));
  return result;
};
const arr1 = [1, 2, `3`, 4, `5`];
console.log(cleaningArr(arr1));


type Subject = { subject: (string | string[]) };
const belowSubject = (obj: Subject): string =>
  typeof obj.subject === `string` ? obj.subject
    : obj.subject[obj.subject.length - 1];
let 철수쌤 = { subject: 'math' };
let 영희쌤 = { subject: ['science', 'english'] };
let 민수쌤 = { subject: ['science', 'art', 'korean'] };
console.log(belowSubject(영희쌤));

type PositionX = { x: string, y: number };
type PositionY = { y: number, z: number };
type New = PositionX & PositionY;// type alias extend => {x: string, y: number, z:number}
const p: New = { x: `hi`, y: 22, z: 23 };

// literal type지정
const rCP = (hand: (`가위` | `바위` | `보`)): void => {
  let result: (`가위` | `바위` | `보`)[] = [];
  result.push(hand);
  console.log(result);
};

rCP(`바위`);

// 함수에 type alias지정 => type FuncType = (parameter type) => {return type}
type UserInfo = { name: string, age: number, plusOne: (x: number) => number, changeName: () => void };
let 회원정보: UserInfo = {
  name: 'kim',
  age: 30,
  plusOne: (x) => x + 1,
  changeName: () => {
    console.log('안녕');
  }
}
console.log(회원정보.plusOne(1));
회원정보.changeName();


// - cutZero()라는 함수를 만듭시다.이 함수는 문자를 하나 입력하면 맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return 해줍니다.
// - removeDash()라는 함수를 만듭시다.이 함수는 문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다. 

type CutZero = (str: string) => string;
const cutZero: CutZero = (str) => str.replace(/0/g, ``);

console.log(cutZero(`00rk00rrkrk`));

type RemoveDash = (str: string) => string;
const removeDash: RemoveDash = (str) => str.replace(/-/g, ``);

console.log(removeDash(`010-3393-9410`)); // 이전 parseInt는 숫자를 리턴하기에 앞의 0을 없애서 그럼.


type MultiFunc = (str: string, fn1: (str: string) => string, fn2: (str: string) => string) => string;
const multiFunc: MultiFunc = (str, fn1, fn2) => {
  return fn2(fn1(str));
};
console.log(multiFunc(`01-02-03-04-05`, cutZero, removeDash)); // 12345


// class 타입지정 이론 *********
class Person {
  //field value zone => constructor와 똑같은 역할. 하지만 보통 constructor key type을 지정해주기 위해 사용[추측](여기서 something이 있어야 constructor에서 this.something 입력가능)
  name: string;
  age: number;
  gender: string;
  constructor(a: string, b: number, c: string) {//여기서 리턴되는 값은 항상 오브젝트이므로 리턴값의 타입까지 지정해줄 필요는 없음.
    this.name = a;                              // rest parameter, default parameter가능.
    this.age = b;
    this.gender = c;
  }
  //prototype zone => prototype함수는 리턴타입을 결정 해주어야함.
}

// 문제

//1
class Car {
  model: string;
  price: number;
  constructor(model: string, price: number) {
    this.model = model;
    this.price = price;
  }
  tax(): number {
    return this.price / 10;
  }
}

const car1 = new Car(`Benz`, 2000000);
console.log(car1.tax());


class Student {
  name;
  age;
  gender;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}
class Teacher extends Student {
  level;
  constructor(name: string, age: number, gender: string, level: string) {
    super(name, age, gender);
    this.level = level;
  }
}
const student = new Student(`Park`, 22, `male`);
const teacher = new Teacher(`Choi`, 22, `male`, `high`);
console.log(student, teacher);


// interface 이론 ********* => 오브젝트에 type alias지정할떄 interface 사용가능**********
interface Student1 {
  name: string;
  age: number;
  gender: string;
}
interface Teacher1 extends Student1 {
  level: string;
}// class랑 비슷비슷 => extends활용가능 like this!

const student1: Student = {
  name: `Park`,
  age: 22,
  gender: `male`
};
const teacher1: Teacher1 = {
  name: `Choi`,
  age: 42,
  gender: `female`,
  level: `high`
};


// rest parameter 타입지정 ********
class Word {
  str: string[];
  num: number[];
  constructor(...par: (string | number)[]) {// rest parameter는 array타입으로 입력되므로 []로 표시해주어야 한다.
    this.str = [];
    this.num = [];
    [...par].forEach(item => {
      typeof item === `string` ? this.str.push(item)
        : this.num.push(item);
    });
  }
}

const word1 = new Word('kim', 3, 5, 'park', 8, 2, `choi`, 6, `cho`);
console.log(word1);


/// destructuring(es6) 타입지정 ********
interface Student2 {
  name: string[];
  age: number;
}
const student2: Student2 = {
  name: [`Kim`, `Park`, `Choi`],
  age: 22
};
// ===>>> 
const { name: [name1, name2, name3], age } = student2;
console.log(name1, name2, name3, age);
// ===>>>
interface Student3 {
  name5: string;
  age3: number;
}
const student3: Student3 = {
  name5: `Park`,
  age3: 22
};
const { name5, age3 } = student3;

const destruct = ({ name5, age3 }: { name5: string, age3: number }) => {
  console.log(name5, age3);
};
destruct(student3);

//(숙제1) 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다. 
//최댓값(6, 3, 7, 2) 이렇게 쓰면 7이 return 되어야합니다.

//solution 1
type Max = (...num: number[]) => number;

const max1: Max = (...num) => {
  const sortNum = num.sort();
  return sortNum[num.length - 1];
};
console.log(max1(1, 10, 10000, 100, 1000));

//solution 2
// const max2: Max = (...num) => {
//   num.sort((a: number, b: number):number[] => {
//     a < b ? -1 : 1;
//   });
//   return
// };

//solution 3
const max3: Max = (...num) => {
  let m = 0;
  for (let i = 0; i < num.length; i++) {
    if (m < num[i]) {
      m = num[i];
    }
  }
  return m;
};
console.log(max3(4, 23, 7, 9, 1, 100, 1000));

//숙제2
interface Destruct {
  user: string;
  comment: number[];
  admin: boolean;
}
const destructObj: Destruct = {
  user: 'kim',
  comment: [3, 5, 4],
  admin: false
};

const destructFunc = ({ user, comment, admin }: Destruct) => {
  console.log(user, comment, admin);
};

destructFunc(destructObj);

//숙제3
type DestructArr = (number | string | boolean)[]
const destructArr: DestructArr = [40, `wine`, false];

const destructArrFunc = ([a, b, c]: DestructArr) => {
  console.log(a, b, c);
};
destructArrFunc(destructArr);