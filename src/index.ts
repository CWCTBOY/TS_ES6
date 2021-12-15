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

console.log(33);