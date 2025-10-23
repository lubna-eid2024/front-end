// btn.onclick = function printHello() {
//   btn.classList.add(`btn`);
//   console.log(`hello`);
// };
// btn.addEventListener(`click`, function printHello() {
//   btn.classList.add(`btn`);
//   console.log(`hello`);
// });
// btn.addEventListener(`click`, () => {
//   let pValue = document.getElementById(`text`);
//   let input = document.getElementById(`input`);
//   console.log(pValue.innerText);
//     console.log(input.innerText);
//     document.writeln(pValue.innerText);
//     document.writeln(input.innerText);
// });
btn.addEventListener(`click`, () => {
  pValue.textContent = input.value;
});
let pValue = document.getElementById(`text`);
btnClear.addEventListener(`click`, () => {
  pValue.textContent = "";
});
let flag = true;
btnShow.addEventListener(`click`, () => {
  if (flag) {
    input2.type = "text";
    btnShow.textContent = "hidden";
    flag = !flag;
  } else {
    input2.type = "password";
    btnShow.textContent = "show";
    flag = !flag;
  }
});

window.addEventListener(`load`, () => {
  document.body.style = ` background-color: brown;`;
});

