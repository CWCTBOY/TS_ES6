
type Project = {
  member: string[];
  days: number;
  started: boolean;
}

let project: Project = {
  member: ['kim', 'park'],
  days: 30,
  started: true,
}

const arr = [`Park`, 23, true, null];
arr[4] = false;
console.log(arr);

var 어레이: (number | string)[] = [1, '2', 3];
var 오브젝트: { data: number | string } = { data: '123' };

let user = 'kim';
let age = undefined;
let married = false;
let 철수: (string | number | undefined | boolean)[] = [user, age, married];

type School = { score: (number | boolean)[], teacher: string, friend: string | string[] };

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

const countStr = (x: string | number): number =>
  typeof x === `string` ? x.length : [...String(x)].length;//type narrowing

console.log(countStr(1234555));

const canYouMarry = (월소득: number, 집보유여부: boolean, 매력점수: string): string => {
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
    return ``;
  }
};
console.log(canYouMarry(100, true, `하`));

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


const rCP = (hand: (`가위` | `바위` | `보`)): void => {
  let result: (`가위` | `바위` | `보`)[] = [];
  result.push(hand);
  console.log(result);
};

rCP(`바위`);


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