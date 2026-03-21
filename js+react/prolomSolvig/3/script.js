const users = [
  {
    name: "أحمد",
    img: "https://images.pexels.com/photos/35865718/pexels-photo-35865718.jpeg",
  },
  {
    name: "سارة",
    img: "https://images.pexels.com/photos/35865718/pexels-photo-35865718.jpeg",
  },
  {
    name: "ياسين",
    img: "https://images.pexels.com/photos/35865718/pexels-photo-35865718.jpeg",
  },
];
// div==>img,p
users.forEach((users) => {
  let card = document.createElement(`div`);
    card.classList.add(`card`);
    card.classList.add(`card`)
  let img = document.createElement("img");
  img.src = users.img;
  img.classList.add("image");
  let userName = document.createElement(`p`);
  userName = users.name;
  let btnDelete = document.createElement(`button`);
  btnDelete.classList.add(`btn`)
  btnDelete.innerText = `delete`;
  btnDelete.onclick = function () {
    card.remove()
  };


  card.append(userName, img, btnDelete);
  document.body.appendChild(card);
});
