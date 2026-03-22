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

let container = document.createElement(`div`);
container.classList.add("container");
console.log(container);

let container_main = document.createElement(`div`);
container_main.classList.add(`con`)
let controls = document.createElement(`div`);
controls.classList.add(`contronls`)
let labalInput = document.createElement(`label`);
labalInput.classList.add(`labalInput`);
labalInput.innerText = `  Search for the name:
`;
let inputText = document.createElement(`input`);
inputText.placeholder = ` Type the name here:`;

let add_box = document.createElement(`div`);
add_box.classList.add(`addBox`)
let add_labal = document.createElement(`label`);
add_labal.innerText = ` 
Add a new user`;
let add_input = document.createElement(`input`);
add_input.placeholder = `New username`;

let add_Btn = document.createElement(`button`);
add_Btn.innerText = `  Add now`;
add_Btn.classList.add(`add`)

let cardsWrapper = document.createElement(`div`); //data

add_box.append(add_labal, add_input, add_Btn);
controls.append(labalInput, inputText, add_box);
container_main.append(controls);
container.append(container_main, controls, cardsWrapper);

document.body.appendChild(container);

function displayUsers(users) {
  cardsWrapper.innerHTML = ``; //عملنا عشان ميكررش
  users.forEach((users) => {
    let card = document.createElement(`div`);
    card.innerHTML = ` 
<img src="${users.img}" alt="${users.name}" style="width: 100px; display: block;">
  <p>${users.name}</p>
    <button type="button" class="del-btn"">delete/button>
`;

    let btnDelete = card.querySelector(".del-btn");
    btnDelete.classList.add(`delete`)
    btnDelete.onclick = function () {
      card.remove();
    };

    cardsWrapper.append(card);
  });
}

add_Btn.onclick = function () {
  let nameValue = add_input.value;


  if (nameValue.trim() !== "") {
    let newUser = {
      name: nameValue,
      img: "https://images.pexels.com/photos/35865718/pexels-photo-35865718.jpeg",
    };
    users.push(newUser);

    displayUsers(users);
    add_input.value = "";
  } else {
    alert("من فضلك اكتب اسم المستخدم أولاً!");
  }
};
