// do {

// } while (condition);
// اكتب كودًا لطباعة الأرقام من 1 إلى 10 باستخدام حلقة do...while.\
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 11);
// اكتب كودًا لحساب مجموع الأرقام من 1 إلى 50 باستخدام do...while.
// let sum = 0;
// let i = 1;
// do {
//   console.log(i);
//     sum += i;
//     i++
// } while (i < 51);
// اكتب كودًا لطباعة جميع الأرقام الزوجية من 1 إلى 20 باستخدام do...while.
// let sum = 0;
// let i = 1;
// do {
//   if (i % 2 == 0) {
//     console.log(i);
//     sum += i;
//   }
//   i++;
// } while (i < 21);
// console.log(`this is sum :${sum}`);
// اكتب كودًا لحساب مجموع الأرقام الفردية من 1 إلى 30 باستخدام do...while.
// let sum = 0;
// let i = 1;
// do {
//   if (i % 2 == 0) {
//     console.log(i);
//     sum += i;
//   }
//   i++;
// } while (i < 31);
// console.log(`this is sum:${sum}`);
// كتب كودًا ينفذ do...while لطباعة الأرقام من 100 إلى 1 بترتيب تنازلي.
// let i = 100;
// do {
//   console.log(i);
//   i--;
// } while (i >= 0);
//اكتب كودًا باستخدام do...while لطباعة مضاعفات الرقم 3 بين 1 و50.
// let i = 3;
// do {
//   if (i <= 50) {
//     console.log(i);
//   }
//   i += 3;
// } while (i <= 50);
// اكتب كودًا يتحقق من كون الرقم موجبًا أم سالبًا باستخدام do...while ويستمر في القراءة حتى يتم إدخال الصفر.
// let number;

// let i;
// do {
//   i = parseInt(prompt("أدخل رقمًا:"));

//   if (i > 0) {
//     console.log("+");
//   } else if (i < 0) {
//     console.log("-");
//   } else if (i === 0) {
//     console.log("تم إدخال صفر. الخروج.");
//   } else {
//     console.log("القيمة المدخلة ليست رقمًا.");
//   }
// } while (i !== 0);
// let sum = 0;
// let i = +prompt("your number");
// for (let x = 1; x <i; x++) {
//   console.log(x);
//   sum += i;
// }
// console.log(`this is sum:${sum}`);
// for (let i = 1; i < 20; i++) {
//   if (i % 2 == 1) {
//     console.log("even");
//   }
// }
//
// function calc(arr1) {
//   let sum = 0;
//   for (let i = 0; i < arr1.length; i++) {
//     sum += arr1[i];
//   }
//   return sum;
// }
// let sumition = calc[(10, 20, 30)];
// console.log(`The sum: ${sumition}`);
// في حاله عكس arrery
// function name(arr1) {
//   let rev = [];
//   for (let index = arr1.length - 1; index >= 0; index--) {
//     rev.push(arr1[index]);
//   }return rev
// }
// let reselt = name([10, 20, 30]);
// console.log(reselt);
// let num1 = +prompt("enter your num1");
// let num2 = +prompt("enter your num2");
// function name(num1, num2) {

//   return num1 + num2;
// }
// let reselt = name(num1, num2);
// console.log(reselt);

// انت فاهم انا بقول

// إنشاء لعبة تعتمد على الأسئلة التالية بشكل منطقي:

// السؤال الأول: "Do you fly?"
// إذا كانت الإجابة "Yes"، ننتقل إلى السؤال "Are you wild?"
// إذا كانت الإجابة "Yes"، النتيجة: "Eagle"
// إذا كانت الإجابة "No"، النتيجة: "Parrot"
// إذا كانت الإجابة "No"، ننتقل إلى السؤال "Do you live undersea?"
// إذا كانت الإجابة "Yes"، ننتقل إلى السؤال "Are you wild?"
// إذا كانت الإجابة "Yes"، النتيجة: "Shark"
// إذا كانت الإجابة "No"، النتيجة: "Dolphin"

// إذا كانت الإجابة "No"، ننتقل إلى السؤال "Are you wild?"
// إذا كانت الإجابة "Yes"، النتيجة: "Lion"
// إذا كانت الإجابة "No"، النتيجة: "Cat"
// برمجة اللعبة باستخدام المنطق الشرطي (if/else).

// طلب إدخال الإجابات من المستخدم باستخدام prompt وطباعة النتيجة باستخدام console.log.

// function whoAmI() {
//   let fly = prompt("Do you fly?");
//   if (fly == "yes") {
//     let wild = prompt("Are you wild?");
//     if (wild === "yes") {
//       return "Eagle";
//     } else if (wild === "no") {
//       return "Parrot";
//     } else {
//       return "Invalid input. Please answer with 'yes' or 'no'.";
//     }
//   }
//   if (fly === "no") {
//     let undersea = prompt("you live undersea?");

//     if (undersea === "yes") {
//       let wild = prompt("Are you wild?");

//       if (wild == "yes") {
//         return "Shark";
//       } else if (wild == "no") {
//         return "Dolphin";
//       } else {
//         return "returnInvalid input. Please answer with 'yes' or 'no'.";
//       }
//     }
//   }
//   if (fly === "no") {
//     let wild = prompt("Are you wild?");
//     if (wild === "yes") {
//       return "lion";
//     } else if (wild == "no") {
//       return "cat";
//     } else {
//       return "returnInvalid input. Please answer with 'yes' or 'no'.";
//     }
//   }
// }

// let total = whoAmI();
// console.log(total);
// function whoAmI() {
//   let fly = prompt("Do you fly?");
//   if (fly === "yes") {
//     let wild = prompt("Are you wild?");
//     if (wild === "yes") {
//       return "Eagle";
//     } else if (wild == "no") {
//       return "Parrot";
//     }
//   }
//   if (fly === "no") {
//     let undersea = prompt("Do you live undersea?");
//     if (undersea === "yes") {
//       let wild = prompt("Are you wild?");
//       if (wild === "yes") {
//         return "shark";
//       } else if (wild === "no") {
//         return "dolphin";
//       }
//     }
//     if (fly === "no") {
//       // let undersea = prompt("Do you live undersea?");
//       if (undersea === "no") {
//         let wild = prompt("Are you wild?");
//         if (wild === "yes") {
//           return "lion";
//         } else if (wild === "no") {
//           return "cat";
//         }
//       }
//     }
//   }
// }
// let total = whoAmI();
// console.log(total);
// let totalSum = 0;

// while (true) {
//   // طلب إدخال قيمة من المستخدم
//   let userInput = prompt("Enter a number (enter 0 to stop):");

//   // التحقق من أن المدخل صالح (رقم)
//   if (isNaN(userInput) || userInput === null || userInput.trim() === "") {

//     continue;
//   }

//   // تحويل الإدخال إلى رقم
//   let value = parseFloat(userInput);

//   // التوقف إذا أدخل المستخدم الرقم 0
//   if (value === 0) {
//     break;
//   }

//   // إضافة القيمة إلى المجموع الكلي
//   totalSum += value;

//   // التوقف إذا تجاوز المجموع 100
//   if (totalSum > 100) {
//     break;
//   }
// }

// // عرض المجموع الكلي للمستخدم
// console.log(`The total sum of the entered values is: ${totalSum}`);
// // let totalSum = 0;
// while (true) {
//   let userInput = prompt("enter aunber(enter 0to stop):");
//   if (isNaN(userInput || userInput === null || userInput === "")) {
//     continue;
//   }
//   let value = parseFloat(userInput);
//   if (value === 0) {
//     break;
//   }
//   totalSum += value;
//   if (totalSum > 100) {
//     break;
//   }
// }console.log(totalSum)
// let totalSum = 0;
// while (true) {
//   let userInput = prompt("enter aunber(enter 0to stop):");
//   if (isNaN(userInput) || userInput == null || userInput === "") continue;
//   let value = parseFloat(userInput);
//   if (value === 0) {
//     break;
//   }
//   totalSum += value;
//   if (totalSum > 100) {
//     break;
//   }
// }
// console.log(`The total sum of the entered values is: ${totalSum}`);
// let totalSum = 0;
// while (true) {
//   let userInput = prompt(
//     "Entering numbers stops when the number 0 is entered or the sum exceeds 100"
//   );
//   if (isNaN(userInput) || userInput === null || userInput.trim() === "") {
//      alert("Invalid input! Please enter a valid number.");
//     continue;
//   }
//   let value = parseFloat(userInput);
//   if (value === 0) {
//     break;
//   }
//   totalSum += value;
//   if (totalSum > 100) {
//     break;
//   }
// }
// console.log(`The total sum of the entered values is: ${totalSum}`);
// function countEcharacters() {
//   let userInpute = prompt("please enter string");
//   if (!userInpute || userInpute.trim() === "") {
//     alert("Invalid input! Please enter a valid string.");
//     return;
//   }
//   let count = userInpute.split(``).filter((ch) => ch.toLowerCase() === `e`);
//   alert(`The total number of 'e' characters is: ${count}`);
//   return count;
// }
// let total = countEcharacters();
// console.log(total);
// let num1 = +prompt("enter your num1");
// let num2 = +prompt("enter your num2");
// let num3 = +prompt("enter your num3");
// let sum = num1 + num2 + num3;
// let multiply = num1 * num2 * num3;
// let dividing = num1 / num2 / num3;
// function calculate(num1, num2, num3) {
//   return {
//     sum: sum,
//     multiply: multiply,
//     dividing: dividing,
//   };
// }
// let result = calculate(num1, num2, num3);

// console.log(`The sum: ${result.sum}`);
// console.log(`The multiplication: ${result.multiply}`);
// console.log(`The division: ${result.dividing}`);
// function getRandom(arr) {
//   const randomIndix1 = Math.floor(Math.random() * arr.length);
//   let randomIndix2;
//   do {
//     randomIndix2 = Math.floor(Math.random() * arr.length);
//   } while (randomIndix1 === randomIndix2);
//   return [arr[randomIndix1], arr[randomIndix2]];
// }
// let output = getRandom(["ahmed", "islam", "sandra", "fatma", "ali"]);
// console.log(output);
// console.log(window)
// confirm(`are your stady`)
let flag = true;
if (flag) {
  window.open(
    `https://fontawesome.com/`,
    (innerWidth = `300px`),
    (innerHeight = `400px`)
  );
  flag = true;
} else {
  window.close(
    `https://fontawesome.com/`,
    (innerWidth = `300px`),
    (innerHeight = `400px`)
  );
  flag = false;
}
let openBtn = document.getElementById(`op`);
console.log(openBtn);
let closeBtn = document.getElementById(`cl`);
openBtn.addEventListener(`click`, () => {
  window.open(
    `https://fontawesome.com/`,
    (innerWidth = `300px`),
    (innerHeight = `400px`)
  );
});
