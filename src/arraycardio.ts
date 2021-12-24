// ## Array Cardio Day 2
type PeopleArr = { name: string, year: number }[];
type CommentsArr = { text: string, id: number }[];

const people: PeopleArr = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments: CommentsArr = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const year = new Date().getFullYear();
const isAdult1 = people.some(person => year - person.year >= 19);
console.log(isAdult1);
// Array.prototype.every() // is everyone 19 or older?
const isAdult2 = people.every(person => year - person.year >= 19);
console.log(isAdult2);
// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const findText1 = comments.find(text => text.id === 823423);
console.log(findText1);
// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const findText2 = comments.findIndex(text => text.id === 823423);//1
const delete1 = comments.filter(item => item.id !== 823423);
console.log(delete1);
