// let a = 1;//1
// //1+1
// let b = a++;//2
// let c = ++b;//2
// console.log(a, b, c);

//  ما الفرق بين spread operator و rest parameter؟
// console.log(typeof null);//ojbect
// console.log(typeof undefined);//undefined
// console.log(null == undefined);//true
// console.log(null === undefined);//flase
// function outer() {
//   let count = 0;
//   return function inner() {
//     count++;
//     console.log(count);
//   };
// }

// const counter1 = outer();
// counter1();//1//0+1=1
// counter1();//2//1+1=2

// const counter2 = outer();
// counter2();//1عشان اول قيمه
// counter1();//3//2+1=3
// nan ====
// let x = NaN
// // undefined
// let y;
// setTimeout(function () {
//     console.log(`hello`)
// },1000)
// console.log(typeof null);//object
// console.log(typeof undefined);//undefined
// console.log(typeof 123n); //number
// console.log(typeof Symbol("test"));//string
// console.log(typeof NaN)////nmuber
// console.log(typeof []);//)====object
// console.log(typeof function () {});//function 
// console.log(typeof Infinity);////nmuber
// console.log(typeof null);//object
// console.log(typeof {});//object
// console.log(typeof Symbol());//symbol
// console.log(typeof (() => {}));//object===>function
// console.log(typeof new String("hello"));//object===>string
// console.log(typeof 42n);//bigint
// console.log(typeof NaN);//number
// console.log(typeof undefined);//undefined
// console.log(typeof null);//object
// console.log(typeof []);//object
// console.log(typeof (() => {}));//object
// console.log(typeof new Number(123));//object===>number
// console.log(typeof 9007199254740991n);//bigint
// console.log(typeof /regex/);//object
// console.log(typeof new Date());//object
// console.log(typeof Math);//number
// console.log(typeof null);//number
// console.log(typeof function* () {});//function===>object
// console.log(typeof class {});//function====>object
console.log(typeof NaN);//===>object
console.log(typeof []);//====>object
console.log(typeof Object);//=====arrery
console.log(typeof new Function());//=====>object
console.log(typeof undefined);//======>undefined={}
console.log(typeof BigInt);//=====>BigInt={}
console.log(typeof new Boolean(true));//=====>Boolean
console.log(typeof Symbol.iterator);//=======>Symbol
