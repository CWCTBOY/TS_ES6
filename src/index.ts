
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
// }; // 아니 이거 왜안되지?? => 커스텀 타입을 지정해주고, tsconfid.json도 변경해주어야 함.

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