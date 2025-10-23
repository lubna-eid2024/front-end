let openBtn = document.getElementById(`open`);
let closeBtn = document.getElementById(`close`);
let flag = true;
openBtn.addEventListener(`click`, () => {
  if (flag) {
    let jsPage = window.open(
      `https://preview.colorlib.com/#liquorstore`,
      "_self",
      "width=300,height=300"
    );
    flag = true;
  } else {
    closeBtn.addEventListener(`click`, () => {
      jsPage.close();
      flag = false;
    });
  }
});
