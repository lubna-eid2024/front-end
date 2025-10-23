// function allUeusers() {
//   let ueusers = [];
//   setTimeout(() => {
//     ueusers = [
//       { id: 1, name: "lubna" },
//       { id: 2, name: "ayaat" },
//       { id: 3, name: "marim" },
//     ];
//     console.log(ueusers);
//   }, 1000);
//   console.log(ueusers);
// }
//  let reuselt=allUeusers();
// start filter
// تصفيه الاعداد زوجيه
// let number = [1, 2, 3, 4, `lubna`, `aHMED`];
// let evenNumbers = number.filter(function (num) {
//   return num % 2 === 0;
// });
// console.log(evenNumbers);
// // تصيقه الاعمار اكبر من 18
// const users = [
//   { name: "Ali", age: 17 },
//   { name: "Mona", age: 22 },
//   { name: "Tamer", age: 19 },
//   { name: "Laila", age: 15 },
// ];
// let usersAge = users.filter((users) => users.age >= 18);
// console.log(usersAge);
// // تصفيه درجه الطلاب الناجين
// const students = [
//   { name: "Ahmed", grade: 80 },
//   { name: "Sara", grade: 45 },
//   { name: "Youssef", grade: 60 },
//   { name: "Mona", grade: 30 },
//   { name: "Hassan", grade: 70 },
// ];
// let studentsGrands = students.filter((students) => students.grade >= 50);
// console.log(studentsGrands);
//end filter
// start map
// مضاغفه الاعداد
// const nums = [1, 2, 3, 4, 5];
// let num2 = nums.map((n) => n * 2);
// console.log(num2);
let promise = new Promise((fun1, fun2) => {
  let nameUser = "lubna";
  if (nameUser === "lubna") {
    fun1("yes");
  } else {
    fun2("error");
  }
});
console.log(promise);
promise
  .then((nameUser) => {
    console.log(nameUser);
  })
  .catch(() => {
    console.log(error);
  });
