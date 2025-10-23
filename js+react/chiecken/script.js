let setInterva = setInterval(() => {
  //تكرار

  let content = document.getElementById(`content`); //div
  let img = document.createElement(`img`); //img
  let canvas = document.createElement(`img`);

  img.src = `img/download.jpg`;
  img.classList.add(`checken`);
  content.appendChild(img);
  content.appendChild(canvas);
}, 50); //عدد دجاج
setTimeout(() => {
  clearInterval(setInterva);

  let canvas = (document.getElementById("imgCanvas").style.display = "block");

  //وقوف
}, 4000);
canvas.addEventListener(`click`, () => {
  let sound = new Audio(`sound/vine-boom-spam-sound-effect-205568.mp3`);
  sound.play();
});
