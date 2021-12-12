// what "this" means?

console.log(this); // 1. means "window" when excuting with console, window is 전역object

const obj = {
  name1: "Park",
  age: 22,
  함수1() {
    console.log(this);
  },
  objInObj: {
    name2: "Kim",
    함수2() {
      console.log(this);
    }
  }
}

obj.함수1();
obj.objInObj.함수2(); // 2. means "obj" that contains function[console.log], the function in obj is called "method"

function objMachine() {
  this.name = "Park",
    this.age = 22,
    this.gender = "male"
}

const obj2 = new objMachine();
console.log(obj2); // 3. 새로운 오브젝트 요소를 생성해냅니다. 오브젝트에 할당하는법은 위커맨드 참조