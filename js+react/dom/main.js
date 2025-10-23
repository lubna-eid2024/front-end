// // 🔹 مصفوفة تحتوي على مسارات الصور
// let images = [
//   `img/prod-1.jpg`, `img/prod-2.jpg`, `img/prod-3.jpg`, `img/prod-4.jpg`,
//   `img/prod-5.jpg`, `img/prod-6.jpg`, `img/prod-7.jpg`, `img/prod-8.jpg`
// ];

// // 🔹 تحديد العنصر الأساسي الذي يحتوي على الصور
// let container = document.getElementById("gallery");

// let row; // متغير لحفظ الصف الحالي

// images.forEach((imgSrc, index) => {
// //   ✅ إنشاء صف جديد كل 4 صور
//   if (index % 4 === 0) {
//     row = document.createElement(`div`);
//     row.className = "row"; // تعيين الكلاس
//     container.appendChild(row);
//   }

//   // 🔹 إنشاء بطاقة تحتوي على الصورة
//   let card = document.createElement(`div`);
//   card.className = "card";

//   let img = document.createElement(`img`);
//   img.src = imgSrc;
//   img.alt = `Product ${index + 1}`;

//   card.appendChild(img);
//   row.appendChild(card); // ✅ إضافة البطاقة إلى الصف الحالي
// });
// function elemts() {
//   for (let index = 0; index < 10; index++) {
//     console.log(index);
//   }
// }
// let btn = document.getElementById(`btn`);
// btn.load = function () {
//   alert(`تم النفر`);
// };
// اكتب كودًا يجعل زر <button> يعرض رسالة "تم النقر!" عند الضغط عليه.
// كيف يمكنك إضافة حدث mouseover على صورة بحيث يتم تغيير الصورة عند مرور الماوس عليها؟
// let btn = document.getElementById(`btn`);
// btn.addEventListener("click", function () {
//   btn.p = `hello world`;
//   console.log(btn.p);
// });
// let text = document.getElementById(`text`);
// btn.addEventListener(`onmousedown`, function () {
//   document.body.style.background = `red`;
// });
// btn.addEventListener(`click`, function () {
//   btn.style.color = `blue`;
// });

// text.onkeydown = function () {
// console.log(`hello world`)
// };
// let USD = document.getElementById(`USD`);
// let EGP = document.getElementById(`EGP`);
// USD.onkeyup = function () {
//   EGP.value = USD.value * 15.6;
// };
// EGP.onkeyup = function () {
//   USD.value = EGP.value / 15.6;
// };
// let after = document.getElementById(`after`);
// let before = document.getElementById(`before`);
// let append = document.getElementById(`append`);
// let contact = document.getElementById(`contact`); //p
// let container = document.getElementById(`container`); //div
// container.style.height = `50px`;
// container.style.background = `red`;
// contact.style.textAlign = `center`;
// contact.style.padding = `10px`;

// after.onclick = function () {
//   contact.after(container);
// };
// // before.onclick = function () {
// //   contact.before(container);+++
// // };w
// // append.onclick = function () {
// //     container.append(contact);
// //     contact.style.color = `white`;
// // };
// // let contact = document.getElementById(`contact`); //p
// // contact.classList.add("name");

// // contact.onclick = function () {
// //   contact.classList.toggle("name");
// //   contact.style.background = `red`;
// // };
// // contact.oncontextmenu = function () {
// // //   contact.classList.remove("child");
// // //   contact.style.background = `green`;
// // // };
// // // let open = document.getElementById(`open`);
// // // let close = document.getElementById(`close`);
// // // let container = document.getElementsByClassName(`container`)[0];
// // // close.onclick = function () {
// // //   container.classList.add(`hide`);
// // //   open.classList.remove(`hide`);
// // // };
// // // open.onclick = function () {
// // //   container.classList.remove(`hide`);
// // //   close.classList.add(`hide`);
// // // };
// // // let text = document.getElementById(`text`);
// // // let btn = document.getElementById(`btn`);
// // // window.onload = function () {
// // //   text.placeholder = `enter`;
// // // };
// // // btn.onclick = function () {
// // //   btn.style.background = `red`;
// // //   btn.style.color = `white`;
// // // };

// // // let container = document.querySelector(`.container`);

// // // for (let i = 0; i <= 100; i++) {
// // //   const box = document.createElement(`div`);
// // //   box.classList.add(`blog`);
// // //   box.textContent = i;

// // //   if (i % 2 === 0) {
// // //     box.style.background = `brown`;
// // //   } else {
// // //     box.style.background = `blue`;
// // //   }
// // //   container.appendChild(box);
// // // }

// // let container = document.createElement(`div`);
// // document.body.appendChild(container)

// // titleText  = [`Headphones`, `Keyboard`, `phone`, `phone`, `phone`];
// // pagText = [
// //   `This is a description`,
// //   `This is a description`,
// //   `This is a description`,
// //   `This is a description`,
// //   `This is a description`,
// // ];
// // smallLatter = [`23`, `50`, `1000`, `1000`, `1000`];

// // function elemmts(titleText, pagText, smallLatter) {
// //     let mainTitle = document.createElement(`h1`)
// //     mainTitle.textContent = `product list`
// //    for (let index = 0; index < titleText.length; index++) {
// //       let card = document.createElement(`div`);
// //  let title = document.createElement("h3");
// //  title.textContent = `${pagText[indix]}  ${smallLatter[indix]}`;

// //    }
// //   let card = document.createElement(`div`);
// //   let title = document.createElement(`h2`);
// //   let pag = document.createElement(`p`);
// //     let price = document.createElement(`small`);
// //     // ***********************
// //     // let cards = document.createTextNode(`div`)
// //     let titlePag = document.createTextNode(`h2`)
// //     let pagText = document.createTextNode(`p`);
// //     let priceNumber = document.createTextNode(`small`);
// // //   div.appendChild(card);
// //   h1.appendChild(titlePag);
// //   p.appendChild(pagText);
// //   small.appendChild( priceNumber );
// //     container.appendChild(card);
// //     card.appendChild(titlePag)
// //     card.appendChild(pagText);
// //      card.appendChild(priceNumber);
// //   for (let i = 0; i < 3; i++) {
// //     console.log(i);
// //   }
// // }
// // elemmts(div, h1, p, small);
// // // إنشاء الحاوية الرئيسية
// // let container = document.createElement('div');
// // document.body.appendChild(container);
// // إنشاء الحاوية الرئيسية
// let container = document.createElement('div');
// document.body.appendChild(container);

// // بيانات المنتجات
// let titles = ['Headphones', 'Keyboard', 'Phone', 'Tablet', 'Watch'];
// let descriptions = [
//   'This is a description',
//   'This is a description',
//   'This is a description',
//   'This is a description',
//   'This is a description'
// ];
// let prices = ['23', '50', '1000', '150', '300'];

// // دالة لإنشاء قائمة المنتجات
// function createProductList(container, titles, descriptions, prices) {
//   // إنشاء العنوان الرئيسي
//   let mainTitle = document.createElement('h2');
//   mainTitle.textContent = 'Products List';
//   container.appendChild(mainTitle);

//   // إنشاء العناصر بناءً على المصفوفات
//   for (let i = 0; i < titles.length; i++) {
//     let card = document.createElement('div');
//     card.style.border = '1px solid #ccc';
//     card.style.margin = '10px 0';
//     card.style.padding = '10px';
//     card.style.backgroundColor = '#f0f0d0';

//     let title = document.createElement('h3');
//     title.textContent = `${titles[i]} | $${prices[i]}`;

//     let description = document.createElement('p');
//     description.textContent = descriptions[i];

//     // إضافة العناصر إلى البطاقة
//     card.appendChild(title);
//     card.appendChild(description);

//     // إرفاق البطاقة بالحاوية الرئيسية
//     container.appendChild(card);
//   }
// }

// // استدعاء الدالة مع تمرير الحاوية
// createProductList(container, titles, descriptions, prices);

// window.scroll(200,200)
// location.assign()
// location.replace

// let container = document.createElement(`div`);
// document.body.appendChild(container);

// let titles = ["Headphones", "Keyboard", "Phone", "Tablet", "Watch"];
// let descriptions = [
//   "This is a description",
//   "This is a description",
//   "This is a description",
//   "This is a description",
//   "This is a description",
// ];
// let prices = ["23", "50", "1000", "150", "300"];
// function createProductList(container, titles, descriptions, prices) {
//   let mainTitle = document.createElement(`h2`);
//   mainTitle.textContent = `Products List`;
//   container.appendChild(mainTitle);
//   for (let i = 0; i < titles.length; i++) {
//     let card = document.createElement(`div`);
//     card.classList.add(`main`);
//     let title = document.createElement(`h3`);
//     title.textContent = `${titles[i]}|$${prices}`;
//     let description = document.createElement(`h3`);
//     description.textContent = descriptions[i];
//     card.appendChild(title);
//     card.appendChild(description);
//     container.appendChild(card);
//   }
// // }
// // createProductList(container, titles, descriptions, prices);
//  let btn=document.getElementById("btn");
// btn.addEventListener("click", function(event) {

// });

// document.getElementById("btn").removeEventListener("click", function() {
//     console.log("تم النقر!");
// });
// كيف يمكنك إزالة حدث mousemove من عنصر معين بعد مرور 4 ثوانٍ من إضافته؟
// let btn = document.getElementById(`btn`);
// let clickCount = 0;

// function handleClick() {
//   clickCount++;
//   console.log(`تم النقر ${clickCount} مرات`);

//   if (clickCount >= 3) {
//     btn.removeEventListener("click", handleClick);
//     console.log("تم تعطيل الحدث بعد 3 نقرات!");
//   }
// }

// // إضافة الحدث
// btn.addEventListener("click", handleClick);
// لديك مربع <div>، عندما يتم الضغط عليه يغير لونه إلى لون عشوائي، ولكن بعد 5 ضغطات فقط يتم إزالة الحدث ولا يمكن تغيير اللون بعد ذلك.
// let perent = document.getElementById(`perent`);
// let clickCount = 0;

// function element() {
//  perent.style.background="red"
//   clickCount++;
//   console.log(`${clickCount}`);
//     if (clickCount >= 5) {

//     perent.removeEventListener(`click`, element);
//       alert(`nan`);

//   }
// }
// perent.addEventListener(`click`, element);
// let btn = document.getElementById("btn");
// let hideCount = 0;

// function hideButton() {
//   hideCount++;
//   btn.style.visibility = `hidden`;
//    setTimeout(() => {
//      btn.style.visibility = "visible";
//    }, 3000);
//   if (hideCount >= 4) {
//     btn.removeEventListener(`click`, hideButton);
//     alert(`الفرص الانتهت`);
//   }
// }
// btn.addEventListener(`click`, hideButton);
// let reselt = function name(x) {
//     console.log(x);
//   return x;
// };
// console.log(reselt);
// console.log(
//   "*************************************************************************"
// );
// console.log(reselt(5));
// console.log(
//   "*************************************************************************"
// );
// let reselt2 = _ => console.log("lubna ");
// let reselt3 = _ => "lubna ";
// console.log(reselt2())
// console.log(
//   "*************************************************************************"
// );
// console.log(reselt3 ());
// let password = document.getElementById(`password`); //password
// let togglePassword = document.getElementById(`togglePassword`); //button
// togglePassword.addEventListener(`click`, function () {
//   if (password.type === "password") {
//     password.type = "text";
//   } else {
//     password.type = "password";
//   }
// });
// let prenents = document.getElementById(`prenents`);

// prenents.addEventListener(`click`, function () {
//   let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//   prenents.style.backgroundColor = randomColor;
//   console.log(randomColor);
// });
// let btn = document.getElementById(`btn`);
// let p = document.getElementById(`p`);
// let clickCount = 0;

// btn.addEventListener(`click`, function () {
//   clickCount++;
//   p.textContent = clickCount;
// });
// لمطلوب: لديك div يحتوي على نص، ويوجد زر عند النقر عليه يتم إخفاء النص، وعند النقر مرة أخرى يتم إظهاره.
// let prenents = document.getElementById(`prenents`);
// let p = document.getElementById(`p`);
// let btn = document.getElementById(`btn`);
// btn.addEventListener(`click`, function () {
//   if (prenents.style.display === "none") {
//     prenents.style.display = "block";
//     btn.textContent = "p";
//   } else {
//   prenents.style.display = "none";

//     btn.textContent = "p";
//   }
// });
//  let prenents = document.getElementById("prenents");
//  let btn = document.getElementById("btn");

//  btn.addEventListener("click", function () {
//    if (prenents.style.display === "" || prenents.style.display === "block") {
//      prenents.style.display = "none";
//      btn.textContent = "إظهار";
//    } else {
//      prenents.style.display = "block";
//      btn.textContent = "إخفاء";
//    }
//  });
// let title = document.getElementById(`title`);
// let originalText = title.textContent;
// title.addEventListener(`mouseover`, function () {
//   title.textContent = "hello";
//   title.style.color = `red`;
// });
// title.addEventListener(`mouseout`, function () {
//   title.textContent = originalText;
//   title.style.color = `blue`;
// });
// let prent = document.getElementById(`prent`);

// let hideCount = 10;
// function text() {
//   hideCount--;
//   prent.style.opacity = "0";

//   setTimeout(() => {
//     prent.style.opacity = "1";
//     prent.textContent = `اضغط عليّ (${hideCount})`;
//   }, 1000);

//   if (hideCount <= 0) {
//     prent.removeEventListener("click", text);
//     alert("انتهى الوقت!");
//   }
// }

// prent.addEventListener("click", text);
// let prent = document.getElementById("prent");
// let textInput = document.getElementById("textInput");

// textInput.addEventListener("input", function () {
//   prent.textContent = textInput.value.trim() || "";
// });
// let togglePassword = document.getElementById(`togglePassword`);
// togglePassword.addEventListener(`input`, function () {
//   let length = togglePassword.value.length;
//   if (length < 6) {
//     togglePassword.style.color = `red`;
//   } else if (length <= 10) {
//     togglePassword.style.color = `yellow`;
//   } else {
//     togglePassword.style.color = `green`;
//   }
// });
// let prent = document.getElementById(`prent`);
// prent.addEventListener(`click`, function () {
//   let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//   prent.style.backgroundColor = randomColor;
// });
// let prenents = document.getElementById(`prenents`);
// let p = document.getElementById(`p`);
// let counter = 10;
// prenents.addEventListener(`click`, function () {
//     counter--;
//     if (counter <= 0)  {
//       alert(`انتهت الوقت`)
//     }
//   p.textContent = counter;
// });
// let pass = document.getElementById(`pass`);
// let btn = document.getElementById(`btn`);
// btn.addEventListener(`click`, function () {
//   if (pass.type === "password") {
//     pass.type = "text";
//   } else {
//     pass.type = "password";
//   }
// });
