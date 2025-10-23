// let arr = ["html", "css", "js", "c#"];
// for (let index = 0; index < arr.length; index++) {
//   if (arr[index].startsWith(`c`)) {
//       console.log(arr[index]);
//       console.log("hello");

//   }
// }
// arr.find((value, index, arr) => {
//     if (value.startsWith(`c`)) {
//        console.log(value);
//   }

// });
// serchBtn.addEventListener(`click`, () => {
//   arr.find((value, index, arr) => {
//     if (value == serach.value) {
//       console.log(`your is products${value}`);
//       serch.value = "";
//     } else {
//       console.log(` no your is products${value}`);
//     }
//   });
// });

// const serachInput = document.getElementById("serach"); //input
// const serchBtn = document.getElementById("serchBtn"); //btn
// const products = ["html", "css", "js", "c#", "python"];
// serchBtn.addEventListener(`click`, () => {
//   const serachValue = serachInput.value.trim().toLowerCase();
//   if (serachValue === "") {
//     console.log(`your products`);
//     return;
//   }
//   const foundProduct = products.find((product) => product === serachValue);

//   if (foundProduct) {
//     console.log(`your products`);
//     serachInput.value = "";
//   } else {
//     console.log(`sorry`);
//   }
// });
// const serachInput = document.getElementById("serach");
// const serchBtn = document.getElementById("serchBtn");

// const products = ["html", "css", "js", "c#", "python"];

// serchBtn.addEventListener("click", () => {
//   const searchValue = serachInput.value.trim().toLowerCase();

//   if (searchValue === "") {
//     console.log("من فضلك أدخل كلمة للبحث");
//     return;
//   }

//   const foundProduct = products.find((product) => product === searchValue);

//   if (foundProduct) {
//     console.log(`تم العثور على المنتج: "${foundProduct}"`);
//     serachInput.value = ""; // نمسح الحقل بعد العثور على النتيجة
//   } else {
//     console.log(`"${searchValue}" غير موجود في القائمة`);
//   }
// });
