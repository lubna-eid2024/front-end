// // let str = "lubna"; //string
// // let num = 22; //number
// // let bool = "true"; //boolean
// // let arr = ["lubna", "ahmed"]; //arrery
// // let obj = { name: "lubna", age: "22" }; //object
// // console.log(typeof str);
// // console.log(typeof num);
// // console.log(typeof bool);
// // console.log(typeof arr);
// // console.log(typeof obj);
// // let num1 = +prompt("enter your num1");
// // let num2 = +prompt("enter your num2");
// // let sum = num1 + num2;
// // if (sum > 20) {
// //   document.writeln(` sum:more in 20`);
// // } else {
// //   document.writeln("less in 20");
// // }
// let x = 10;
// let y = 20;
// // x += y;

// // x -= y;
// // x /= y;
// // x *= y;
// console.log(x);
// let x = 10;
// console.log(x++);//10+1==11//10
// console.log(--x);//11-1==10//10
// console.log(++x);//10+1`==11//11
// console.log(x--);//11-1==10//11
// console.log(x);//10
// let x = 20;
// console.log(x++);//20+1==>21//20
// console.log(--x);//21-1==>20
// console.log(++x);//20+1==21
// console.log(x--);//21-1//21
// console.log(x);//20
// var x = 5
// var y = (x++ + 3)
// var z=(x++)+3
// console.log(z);
// let num1=+prompt("enter your num1")
// let num2 = +prompt("enter your num2");
// let sum = num1 + num2
// let sum1 = num1 - num2;
// let sum2 = num1 * num2;
// let sum3 = num1 ** num2;
// let sum4 = num1 / num2;
// let sum5 = num1 % num2
// let sum6 = num1 > num2;
// console.log(sum);
// console.log(sum1);
// console.log(sum2);
// console.log(sum3);
// console.log(sum4);
// console.log(sum5);
// console.log(sum6);
// let fly = prompt("Do you fly?");
// if (fly === "yes") {
//   let wild = prompt("Are you wild?");
//   if (wild === "yes") {
//     confirm("Eagle");
//   } else if (wild === "no") {
//     alert("Parrot");
//   }
// }
// if (fly === "no") {
//   let undersea = prompt("Do you live underse?");
//   if (undersea === "yes") {
//     let wild = prompt("Are you wild?");
//     if (wild === "yes") {
//       alert("Shark");
//     } else if (wild === "no") {
//       alert("Dolphin");
//     }
//   }

//     if (undersea === "no") {
//       let wild = prompt("Are you wild?");
//       if (wild === "yes") {
//         alert("lion");
//       } else if (wild === "no") {
//         confirm("cat");
//       }
//     }

// }
// write program that allow user to insert number then check if number is odd or even
// let num = +prompt("enter your num");
// if (num % 2 === 0) {
//   document.writeln("even");
// } else if (num % 2 === 1) {
//   document.writeln("add");
// } else {
//   document.writeln("nan");
// }
// **********************************************************
// write program that allow user to insert 2number and find max
// let num1 = +prompt("enter your num1");
// let num2 = +prompt("enter your num2");
// if (num1 > num2) {
//   document.writeln(num1);
// } else if (num1 < num2) {
//   document.writeln(num2);
// } else {
//   document.writeln("nan");
// }
// ******************************************************************
// write program that take char form user then if it is vowel char then print vowel otehrwise print constant
// let char = prompt(`enter your char`);
// if (
//   char == `a` ||
//   char == "A" ||
//   char == "u" ||
//   char == "U" ||
//   char == "i" ||
//   char == "I" ||
//   char == "E" ||
//   char == "e" ||
//   char == "o" ||
//   char == "O"
// ) {
//   document.writeln(`this is char :\t`, char);
// } else {
//   document.writeln(`nan`);
// }
// ************************
// write program to enter marks of six subjects and calc total and average and persentage
// let num1 = +prompt(`enter your num1`);
// let num2 = +prompt(`enter your num2`);
// let num3 = +prompt(`enter your num3`);
// let num4 = +prompt(`enter your num4`);
// let num5 = +prompt(`enter your num5`);
// let num6 = +prompt(`enter your num6`);
// let total = num1 + num2 + num3 + num4 + num5 + num6;
// let average = total / 6;
// let subject = (total / 600) * 100;

// console.log(`the totel:\t`, total);
// console.log(`the average:\t`, average);
// console.log(`the subgect:\t`, subject ,`%`);
// ****************************8
// confrim
// let conf = confirm(`are your delete`);
// console.log(conf);
// let x = 15;
// let y = 10;
// console.log(x % y);
// let swim = prompt(`can you swim`);
// if (swim === "yes") {
//   let competition = prompt(`are you want to join competition swim`);
//   if (competition === "yes") {
//     alert("you will join");
//   } else if (competition === "no") {
//     alert("you will not");
//   }
// }
// if (swim === "no") {
//   let competition = prompt(`are you want to join competition running`);
//   if (competition === "yes") {
//     alert("you will join");
//   } else if (competition === "no") {
//     alert("you will not");
//   }
// }
// اكتب الكود باستخدام للطباعه لجميع الارقام الفرديه بين 1-20
// for (let index = 0; index < 21; index++) {
//     if (index % 2 === 1) {
//         document.writeln("<br>",index);
//   }

// }
// let i = 1;
// while (i <= 20) {
//    console.log(i);
//     i++;

// }
// *******************************************************
// اكتب كود باستخدام لطباعه الارقام 1-10 تناقص
// for (let index = 10; index >= 0; index--) {
// console.log(index);

// }
// let i = 11;
// while (i >= 1) {
//   console.log(i);
//   i--;
// }
// *********************************************************
// اكتب الكود باستخدام لطباعه جميع الارقام التي تقبل3 قسمه للعداد بين 1-30
// for (let index = 0; index < 30; index++) {
//    if (index%3===0) {
//     console.log(index);

//    }

// }
// let i = 0;
// while (i <= 30) {
//     if (i % 3 === 0) {

//   console.log(i);

//     }

//   i++;
// }
// *****************************************************
// اكتب الكود باستخدام حاصل ضرب جميع الارقام بين 1-20
// let result = 1;
// for (let index = 1; index <= 21; index++) {
//   result *= index;
// }
// console.log(result);
// *****************************************88
// اكتب كود باستخدام حاصل ضرب جميع الارقام من 1-10
// let result = 1;
// for (let index = 1; index <= 10; index++) {
//   result *= index;
// }

// console.log(result);
// *****************************************8
// for (let index = 1; index <= 101; index++) {
//   if (index % 3 === 0 && index % 5 === 0) {
//     document.writeln(index, "<br> bizz buzz");
//   } else if (index % 3 === 0) {
//     document.writeln(index, " <br> bizz");
//   } else if (index % 5 === 0) {
//     document.writeln(index, "<br> buzz");
//   } else {
//     document.writeln( index,"<br>");
//   }
// }
// print total of number from 1to n
// let number=+prompt(`enter your number`)
// let sum = 1;
// for (let index = 0; index < number; index++) {

//   sum += index;
// }
// console.log(sum);
// ***********************************************
// find factorial number
// let number = +prompt(`enter your number`);
// let factorial = 1;
// for (let index = 1; index <= number; index++) {
//   factorial *= index;
// }
// console.log(factorial);
// ***************************************************8
// print even number from1-20
// for (let index = 1; index <= 21; index++) {
//   if (index % 2 === 0) {
//     console.log(index, "even");
//   }
// }
// ************************************************8
// reverse string by using for loop
// let reverse = prompt("enter your string");
// let str = "";
// for (let index = reverse.length - 1; index >= 0; index--) {
//   str += reverse[index];
// }
// console.log(str);
// ************************************************8
// countdown by using while loop
// for (let index = 20; index >=1; index--) {

//   console.log(index);

// }
// **********************************88
// keep prompting the user until they enter an even number

// for (let index = 1; index <= number; index++) {
//   if (index % 2 === 1) {
//     break;
//   }
//   console.log(index);
// }
// let number;
// do {
//   number = +prompt(`enter your number`);
// } while (number % 2 === 0);
// console.log(number);
// let num1 = +prompt(`enter your num1`);
// let num2 = +prompt(`enter your num2`);
// function sum(num1, num2) {
//   return num1 + num2;
// }
// let result = sum(num1, num2);
// console.log(result);
// ************************************
// print numbers from 1 to 10
// for (let index = 0; index < 10; index++) {

//   console.log(index);

// }
// ******************************************
// print the odd numbers less than100
// for (let index = 101; index >= 1; index--) {
//   if (index % 2 === 1) {
//     console.log(index, "odd");
//   }
// }
// ************************************************
// print the multiplication table with 7
// for (let index = 1; index <= 12; index++) {
//   console.log(`7*${index}=${7*index}`);
// }
// *************************************
//        0         1
// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];
// console.log(arr);
// console.log(arr[0][0]); //1
// console.log(arr[0][1]); //2
// console.log(arr[0][2]); //3
// console.log(arr[1][0]); //4
// console.log(arr[1][1]); //5
// console.log(arr[1][2]); //6
// for (let index = 0; index < arr.length; index++) {
//   for (let i = 0; i < arr[index].length; i++) {
//     document.writeln(arr[index][i], "<br>");
//   }
// }
// let userName;
// let arr = [];
// for (let index = 0; index < 10; index++) {
//   userName = prompt(`enter your user name`);
//   arr[index] = userName;
// }
// console.log(arr);
// *********************************8
// let arr = [];
// let sum = 0;
// function userInput() {
//   for (let index = 0; index < 5; index++) {
//     let numbers = +prompt(`enter your number`);
//     // arr[index] = numbers;
//     sum += numbers;
//     arr.push(numbers);
//   }
//   // console.log(numbers);
//   console.log(arr);
//   console.log(`sum:${sum}`);
// }
// userInput();
// **************************8
// finding the Maximum value in an arrery

// function max(arr,numbers) {
//   let max = arr[0];
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] > max) {
//       max = arr[index];
//     }
//   }
//   return max;
// }

// console.log(max());
//******************************8
//sum of All Elements in an arrery

// function user() {
//   let sum = 0;
//   for (let index = 0; index < 10; index++) {
//     let numbers = +prompt(`enter your numbers`);
//     sum += numbers;
//     console.log(sum);

//   }

// }
// user();
// ************************************
// sum of All Elements in an arrery
//  function sumtion(arr) {
//   let sum = 0
//   for (let index = 0; index < 4; index++) {
//     let numbers = +prompt(`enter your number`)
//     sum+=numbers

//   }return sum
// }  let total=sumtion();
// console.log(total);
// **************************8
// revers an arrery
// function revers(arr) {
//   let newArr = [];
//   for (let index = 5 - 1; index >= 0; index--) {
//     let numbers = +prompt(`enter your number`);
//     newArr.push([index]);
//   }
//   return newArr;
// }
// let result = revers();
// document.writeln(result);
// ********************************************
// find Index of an element
// function finder(arr, ele) {
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] === ele) {
//       return index;
//     }
//   }
//   return -1;
// }

// const result = finder([1, 2, 3, 4], 3);
// console.log(result);
//array function
// let arr = [30, 120, 10, 15, 30];
// document.writeln(arr.sort((a, b) => a - b));
// document.writeln(arr.slice(1,5))//120,10
// document.writeln(arr.splice(1, 0, 50)); //120,10.15
// document.writeln("<br>", arr); //30,30
// let obj1 = { name: "mec", loction: "cario" };
// let obj2 = obj1;
// console.log(obj2);
// obj2.manger = "test";
// console.log(obj1);
// console.log(obj2);
// let pag = document.getElementsByClassName("pag");
// console.log(pag[0]);
// let result = (x) => console.log(x);
// ;
// console.log(result(10));

