let students = +prompt(` Are your number of students`);
let studentsArrery = [];
let user = [];
let grades = [];
let sum = 0;

for (let i = 0; i < students; i++) {
  let userStudents = prompt(`Students' names`);
  let gradesStudents = +prompt(`Students' grades`);
  user.push(userStudents);
  sum += gradesStudents;

  grades.push(gradesStudents);
  if (grades[i] > 50) {
    console.log(`gradesStudents:${user}${gradesStudents}`);
  }
}
console.log(` sum:${sum}`);

function updateStudentGrade(grades, user) {
  //نحدد حاجه نغير من خلالها
  let searchUser = prompt(`We change the students' names`); //نحدد حاجه تغير من خلال promt
  let flag = false; // قيمه مبتدئيه
  for (let i = 0; i < user.length; i++) {
    if ((user[i] = searchUser)) {
      let newGrades = prompt(`${searchUser} ${grades[i]}`);
    }
    newGrades = grades[i];
    console.log(`updataing ${searchUser} :${newGrades}`);

    flag = true;
    break;
  }
  if (!flag) {
    console.log("error");
  }
}
updateStudentGrade(grades, user);
