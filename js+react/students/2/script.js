let numbersEmployees = +prompt(`Number of employees`);
let employees = [];
let names = [];
let grades = [];
let max = 0;
let topEmployee = "";
let sum = 0;

for (let i = 0; i < numbersEmployees; i++) {
  let namesEmploy = prompt(`الاسماء `);
  let gardesEmploy = +prompt(` رواتب`);
  names.push(namesEmploy);
  grades.push(gardesEmploy);
  sum += gardesEmploy;
  if (gardesEmploy > max) {
    max = gardesEmploy;
    topEmployee = namesEmploy;
  }
}
function updataingEmploy(names, grades) {
  let gradesSearch = prompt(`هل تريد راتب احد`);
  let found = false;
 for (let i = 0; i < names.length; i++) {
   if (names[i] === gradesSearch) {

     let newGrades = +prompt(`${gradesSearch}:${grades[i]}`);
     grades[i] = newGrades;
     console.log(`grades: ${newGrades}`);

     found = true; 
     break;
   }
 }
  if (!found) {
    alert("error");
  }
}
function deleteEmployee() {
  let nameToDelete = prompt("ما هو اسم الموظف الذي تريدين حذفه؟");
  let found = false;
  for (let i = 0; i < names.length; i++) {
    if (names[i] === nameToDelete) {
      // حذف الاسم والراتب من نفس المكان
      names.splice(i, 1);
      grades.splice(i, 1);
      console.log(`delete${nameToDelete} بنجاح`);
      found = true;
      break;
    }
  }
  if (!found) alert("لم نجد هذا الموظف لحذفه!");
}
console.log(sum / numbersEmployees);

console.log(`${max}`);

updataingEmploy(names, grades);
deleteEmployee();
