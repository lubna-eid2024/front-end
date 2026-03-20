let container = document.createElement(`div`);
let btn = document.createElement(`button`);
btn.innerText = "show";
btn.classList.add(`btn`);
let link = document.createElement(`link`);
link.rel = `stylesheet`;
link.href = `https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css`;
document.head.appendChild(link);
document.querySelector(`body`);
container.append(btn);
document.body.appendChild(container);
let message = document.createElement(`p`);
message.classList.add(`meesage`);

message.innerText = `hello world`;
document.body.appendChild(container);
btn.onclick = function () {
        btn.className = ` animate__animated animate__heartBeat`;
  if (message.style.display === `none`) {

    message.style.display = `block`;
    btn.innerText = `hide`;
    //   btn.className = ` animate__animated animate__heartBeat`;
  } else {
    message.style.display = `none`;
      btn.innerText = `show`;
      btn.className = "btn";
  }
};
container.append(message);
