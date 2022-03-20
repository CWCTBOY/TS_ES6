interface School {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
}
let 학교: School = {
  score: [100, 97, 84],
  teacher: 'Phil',
  friend: 'John'
}
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher]