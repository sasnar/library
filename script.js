const myLibrary = [];
let modal;
let overlay;

const Book = class {
  constructor(name,author,chapters,chaptersRead,img) {
    this.name = name;
    this.author = author;
    this.chapters = chapters;
    this.chaptersRead = chaptersRead;
    this.img = img;
  }
}

function addBookToLibrary(Book) {
  myLibrary.push(Book);
}

function createCard(Book) {
  let container = document.querySelector(".content");
  let code = `
  <div class="flip-card">
    <div class="card-front">
        <img src="${Book.img}" alt="">
        <p class="img-description">${Book.name}</p>
    </div>
    <div class="card-back">
        <p>Author: ${Book.author}</p>
        <p >Chapters: ${Book.chapters}</p>
        <p>Completion: <span  class="chaptersRead">${Book.chaptersRead}</span> / ${Book.chapters}</p>
        <div class="back-btns">
          <button class="upd-btn">Update</button>
          <button class="remove-btn">Remove</button>
        </div>
    </div>
  </div>
  `
  container.innerHTML += code;
}


function flipCards() {
  let cardBacks = document.querySelector('.card-back');
  document.querySelectorAll('.card-front').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flip');
      card.nextElementSibling.classList.toggle('flip');
    });
  });
  document.querySelectorAll('.card-back').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flip');
    });
  });
}

function updateCard() {
  document.querySelectorAll(".upd-btn").forEach(card => {
    card.addEventListener('click', () => {
      let chaptersRead = card.closest(".flip-card").querySelector(".chaptersRead");
      console.log(chaptersRead);
      chaptersRead.textContent = prompt("How many chapters have you read?");
    });
  });
}

function removeCard() {
  document.querySelectorAll(".remove-btn").forEach(card => {
    card.addEventListener('click', () => {
      let thisCard = card.closest(".flip-card");
      if(confirm("Do you want to remove this book?")) {
        thisCard.remove();
      }
    });
  });
}

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Move event listener attachment outside modalForm function
document.addEventListener("DOMContentLoaded", function() {
  modalForm();
});


function modalForm() {
  modal = document.querySelector(".modal");
  overlay = document.querySelector(".overlay");
  const openModalBtn = document.querySelector(".btn-open");
  const closeModalBtn = document.querySelector(".btn-close");
  openModalBtn.addEventListener("click", openModal);
  closeModalBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);
}

function addModal(){
  let nameInput = document.querySelectorAll('input')[0];
  let authorInput = document.querySelectorAll('input')[1];
  let chaptersInput = document.querySelectorAll('input')[2];
  let chaptersReadInput = document.querySelectorAll('input')[3];
  let imgInput = document.querySelectorAll('input')[4];

  let name = nameInput.value;
  let author = authorInput.value;
  let chapters = chaptersInput.value;
  let chaptersRead = chaptersReadInput.value;
  let img = imgInput.value;

  let book = new Book(name, author, chapters, chaptersRead, img);
  
  nameInput.value = '';
  authorInput.value = '';
  chaptersInput.value = '';
  chaptersReadInput.value = '';
  imgInput.value = '';
  closeModal();
  return book;
}

const addBtn = document.querySelector(".btn-add");
addBtn.addEventListener("click", function() {
  let book = addModal();
  createCard(book);
  addBookToLibrary(book);
  flipCards();
  updateCard();
  removeCard();
  modalForm();
}); 


/*
<div class="flip-card">
<div class="card-front">
    <img src="one" alt="">
    <p class="img-description">Naruto</p>
</div>
<div class="card-back">
    <p>Card description. This is a great manga!</p>
    <p>Chapters: 100</p>
    <p>Finished: no</p>
</div>
</div>
*/