// for (let i = 1; i < 10; i++) {
//   console.log(i);
// }
// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }
// for (let i = 0; i < 10; i++) {
//   if (i % 2 == 0) {
//     console.log("even");
//   } else if (i % 2 == 1) {
//     console.log("odd");
//   }
// }
// *********************************
// اكتب كودًا باستخدام for loop في JavaScript للطباعة لجميع الأرقام الفردية بين 1 و 20 (بما في ذلك 1 و 20).

// for (let i = 1; i < 21; i++) {
//   if (i % 2 === 1) {
//     console.log("add");
//   } else console.log("even");
// }
// ************************************************************
// اكتب كودًا باستخدام for loop في JavaScript لطباعة الأرقام من 10 إلى 1 في تناقص.
// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }
// ***************************************
// اكتب كودًا باستخدام for loop في JavaScript لطباعة جميع الأرقام التي هي قسمة للعدد 3 بين 1 و 30.
// for (let i = 1; i < 30; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//   } else if (!(1 / 3)) {
//     console.log("nan");
//   }
// }
// *****************************************
// اكتب كودًا باستخدام for loop في JavaScript لطباعة جميع الأرقام الزوجية بين 1 و 50 (بما في ذلك 50).
// for (let i = 0; i < 50; i++) {
//   if (i % 2 === 0) {
//    console.log(`${i} is even`);
//   } else  console.log(`${i} is add`);
// }
// *********************************************
// كتب كودًا باستخدام for loop في JavaScript لطباعة حاصل ضرب جميع الأرقام من 1 إلى 10.\
// let result = 1;
// for (let i = 1; i < 10; i++) {
//      result *= i;
// }
// console.log( result);
// let result = 1;

// for (let i = 1; i <= 10; i++) {
//   result *= i; // ضرب النتيجة في i في كل دورة
// }

// console.log("حاصل ضرب الأرقام من 1 إلى 10 هو:", result);
// *******************************
// اكتب كودًا باستخدام for loop في JavaScript لطباعة كل رقم من 1 إلى 20 إذا كان الرقم فرديًا فقط.
// for (let i = 1; i < 21; i++) {
//   if (i % 2 === 1) {
//     console.log(`${i} add`);
//   } else console.log(`${i} even`);
// }
// ****************************************
// اكتب كودًا باستخدام for loop في JavaScript لطباعة جميع الأرقام التي هي قسمة للعدد 5 بين 1 و 50.
// for (let i = 1; i < 51; i++){
//     if (i % 5 === 0) {
//         console.log(i)
//     }else(console.log("no"))
// }
// *****************************
// اكتب كودًا باستخدام for loop في JavaScript لطباعة الأرقام من 1 إلى 30، مع استثناء الأرقام القابلة للقسمة على 3.
// for (let i = 1; i < 31; i++) {
//   if (i % 3 !== 0) {
//     console.log(i);
//   }
// }
// ******************************************
// اكتب كودًا باستخدام for loop في JavaScript لطباعة الأرقام من 1 إلى 50 فقط للأرقام الزوجية.
// for (let i = 1; i < 51; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }
// *****************************
// اكتب كودًا باستخدام for loop في JavaScript لطباعة الأرقام من 1 إلى 100، ولكن إذا كان الرقم قابلاً للقسمة على 3 اطبع "Fizz"، وإذا كان قابلاً للقسمة على 5 اطبع "Buzz"، وإذا كان قابلاً للقسمة على 3 و 5 معًا اطبع "FizzBuzz".
// for (let i = 1; i < 101; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(`${i} FizzBuzz `);
//   } else if (i % 3 === 0) {
//     console.log(`${i} Fizz`);
//   } else if (i % 5 === 0) {
//     console.log(`${i} Buzz`);
//   }
// }
// اكتب كودًا باستخدام for loop في JavaScript لطباعة الأرقام من 1 إلى 20، ولكن يجب أن تطبع "Prime" للأرقام الأولية فقط.

// for (let i = 1; i <= 20; i++) {
//   let isPrime = true;
//   if (i === 1) {
//     isPrime = false;
//   } else {
//     for (let j = 2; j <= Math.sqrt(i); i++) {
//       isFinite = false;
//       break;
//     }
//   }

//   if (isPrime) {
//     console.log(`${i}  Prime`);
//   }
// }

//  اكتب كودًا باستخدام for loop في JavaScript لطباعة الأرقام الزوجية فقط بين 10 و 100
// for (let i = 10; i < 101; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }
// اكتب كودًا باستخدام for loop في JavaScript لحساب مجموع الأرقام من 1 إلى 50.
// let sum = 0;
// for (let i = 1; i < 51; i++) {
//   sum += i;
// }
// console.log(sum);
// اكتب كودًا باستخدام for loop في JavaScript لطباعة الأرقام من 1 إلى 100، ولكن إذا كان الرقم قابلًا للقسمة على 7 اطبع "Lucky".
// for (let i = 1; i < 101; i++) {
//   if (i % 7 == 0) {
//     console.log(i);
//   }
// }
// اكتب كودًا باستخدام حلقة for لطباعة جميع الأرقام من 1 إلى 50 مع الإشارة إلى ما إذا كان الرقم "زوجي" (Even) أو "فردي" (Odd).
// for (let i = 1; i < 51; i++) {
//   if (i % 2 == 0) {
//     console.log(`${i} :even`);
//   } else if (i % 2 == 1) {
//     console.log(`${i} :odd`);
//   }
// }
// for (let i = 1; i < 20; i++) {
//   if (i % 2 == 0) {
//     console.log("even");
//   }
// }
// function reversString(str) {
//   let reversed = "lubna";
//   for (let i = str - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }
// let number = +prompt("this is number");
// for (let i = 0; i < number; i++) {
//   if (i % 2 == 0) {
//     console.log("even");

//   }
// }
// return;
// let names = [`ahmed`, `ali`, `mazen`, `omer`];
// names.unshift(`eidc`)
// names.push(`lubna`);
// console.log(names[0]); //ahmed
// console.log(names[1]); //ali
// console.log(names[2]); //mazen
// console.log(names[3]); //omer
// console.log(names[4]);//lubna
// let object = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
// object[1]=10
// console.log(object[0]); //1
// console.log(object[1]); //2
// console.log(object[2]); //3
// console.log(object[3][0]); //4
// console.log(object[3][1]); //5
// console.log(object[3][2]); //6

// console.log(object[3][3][0]); //7
// console.log(object[3][3][1]); //8
// console.log(object[3][3][2]); //9
// let arr = [5, 4, 3, 2];
// document.writeln(arr.sort());
