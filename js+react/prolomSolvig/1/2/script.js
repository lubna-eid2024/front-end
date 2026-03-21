let container = document.createElement(`div`);
container.classList.add(`container`);
let img = document.createElement(`img`);
img.setAttribute(
  `src`,
  `https://images.pexels.com/photos/36089538/pexels-photo-36089538.jpeg`,
);
img.classList.add(`image`);

let user = document.createElement(`p`);
user.classList.add(`userName`);
user.innerText = `user name`;
let btn = document.createElement(`button`);
btn.classList.add(`dark`);
btn.innerText = `Dark Mode`;
let link = document.createElement(`link`);
link.rel = `stylesheet`;
link.href = `https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css`;
container.append(img);
container.append(user);
container.append(btn);

btn.onclick = function () {
  btn.className = ` animate__animated animate__heartBeat`;
// btn.classList.add("animate__animated", "animate__heartBeat");
  if (container.style.backgroundColor === "black") {
    container.style.backgroundColor = `white`;
    container.style.color = "black";
    btn.innerText = `Dark Mode`;
  } else {
    container.style.backgroundColor = `black`;
    btn.innerText = `Light Mode`;
    }
     
};
document.head.appendChild(link);
document.body.appendChild(container);
