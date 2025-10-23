// document.querySelector(".slide-toggle").addEventListener("click", function () {
//   const slideContent = document.querySelector(".slide-content");
//   slideContent.classList.toggle("open");
// });
// let toggle = document.getElementById(`toggle`);
//     toggle.addEventListener(`click`, () => {
//       let content = document.getElementById(`content`);
//       content.classList.toggle("open");

//     });
// document.querySelector(".slide-btn").addEventListener("click", function () {
//   const slideElement = document.querySelector(".slide-element");
//   slideElement.classList.toggle("active");
// });
let slideBtn = document.getElementById("slideBtn");
slideBtn.addEventListener(`click`, () => {
  const slider = document.querySelector(".slider");
  slider.classList.toggle("active");

  // إعادة التعيين إذا كان هناك مشاكل
  if (!slider.classList.contains("active")) {
    setTimeout(() => {
      slider.style.right = "-100%";
    }, 700); // نفس مدة الانتقال
  }
});
