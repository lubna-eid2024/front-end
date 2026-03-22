const myLibrary = [
  {
    title: "مقدمة ابن خلدون",
    author: "ابن خلدون",
    cover:
      "https://images.pexels.com/photos/159866/books-library-study-reading-159866.jpeg?auto=compress&cs=tinysrgb&w=150",
    isRead: true,
  },
  {
    title: "قوة العادات",
    author: "تشارلز دويج",
    cover:
      "https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=150",
    isRead: false,
  },
  {
    title: "البداية والنهاية",
    author: "ابن كثير",
    cover:
      "https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&w=150",
    isRead: true,
  },
];
let container = document.createElement(`div`);
let searchInput = document.createElement(`input`);
searchInput.type = `search`;
searchInput.placeholder = `Enter your search`;
let container_main = document.createElement(`div`);

let labelAdd = document.createElement(`label`);
labelAdd.innerText = `الاسم الكتاب`;
let inputAdd = document.createElement(`input`);
inputAdd.type = `text`;
inputAdd.placeholder = `الاسم الكتاب`;
let addBtn = document.createElement(`button`);
addBtn.innerText = `اضافه الان`;
let mainWainer = document.createElement(`div`);

container_main.append(labelAdd, inputAdd, addBtn);
container.append(container_main, mainWainer);
container.insertBefore(searchInput, mainWainer);
document.body.appendChild(container);

function displayBlock(myLibrary) {
  mainWainer.innerHTML = ``;
  myLibrary.forEach((book, index) => {
    let card = document.createElement(`div`);
    card.innerHTML = `<h1>${book.title}</h1>
        <p>${book.author}</p>
        <img src="${book.cover}" style="width:100px">
       <button type="button" class="del-btn">delete</button>`;
    let btnDelete = card.querySelector(".del-btn");

    btnDelete.onclick = function () {
      myLibrary.splice(index, 1);
      card.remove();
      console.log(myLibrary);
    };

    mainWainer.append(card);
  });
}

addBtn.addEventListener(`click`, () => {
  let titleName = inputAdd.value;
  if (titleName.trim() !== "") {
    const newMyLibrary = {
      title: titleName,
      cover:
        "https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&w=150",
    };
    myLibrary.push(newMyLibrary);
    displayBlock(myLibrary);
    inputAdd.value = "";
  } else {
    alert("erere");
  }
});

searchInput.addEventListener(`input`, () => {

  let searchValue = searchInput.value.toLowerCase();


  let filteredBooks = myLibrary.filter((book) => {
    
    return book.title.toLowerCase().includes(searchValue);
  });


  displayBlock(filteredBooks);
});

